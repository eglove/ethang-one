import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { createCookieSessionStorage, redirect } from 'remix';

import { db as database } from './db.server';

type AuthType = {
  password: string;
  username: string;
};

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
