import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { createCookieSessionStorage, redirect, Session } from 'remix';

import { db as database, db as database_ } from './db.server';

type AuthType = {
  password: string;
  username: string;
};

export async function register({
  username,
  password,
}: AuthType): Promise<ReturnType<typeof database.user.create>> {
  const passwordHash = await bcrypt.hash(password, 10);
  return database.user.create({
    data: { passwordHash, username },
  });
}

export const login = async ({
  password,
  username,
}: AuthType): Promise<undefined | User> => {
  const existingUser = await database.user.findFirst({ where: { username } });

  if (existingUser === null) {
    return undefined;
  }

  const passwordsMatch = await bcrypt.compare(
    password,
    existingUser.passwordHash
  );

  if (!passwordsMatch) {
    return undefined;
  }

  return existingUser;
};

const sessionSecret = process.env.NX_SESSION_SECRET;

if (typeof sessionSecret !== 'string') {
  throw new TypeError('Must set ENV session secret.');
}

const storage = createCookieSessionStorage({
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    name: 'RJ_Session',
    path: '/',
    sameSite: 'lax',
    secrets: [sessionSecret],
    secure: true,
  },
});

export const createUserSession = async (
  redirectTo: string,
  userId: string
): Promise<Response> => {
  const session = await storage.getSession();
  session.set('userId', userId);

  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
};

export const getUserSession = async (request: Request): Promise<Session> => {
  return storage.getSession(request.headers.get('Cookie'));
};

export const getUserId = async (
  request: Request
): Promise<string | undefined> => {
  const session = await getUserSession(request);

  const userId = session.get('userId') as unknown;

  if (typeof userId === 'string') {
    return userId;
  }
};

export const requireUserId = async (
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<string> => {
  const userId = await getUserId(request);

  if (typeof userId !== 'string') {
    const parameters = new URLSearchParams([
      ['redirectTo', redirectTo],
    ]).toString();
    // Allow this throw to stop execution and redirect user with no further action
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw redirect(`/login?${parameters}`);
  }

  return userId;
};

export const getUser = async (request: Request): Promise<User | undefined> => {
  const userId = await getUserId(request);

  if (typeof userId !== 'string') {
    return;
  }

  const user = await database_.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user === null) {
    throw await logout(request);
  }

  return user;
};

export const logout = async (request: Request): Promise<Response> => {
  const session = await getUserSession(request);
  return redirect('/jokes', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  });
};
