import type { ActionFunction, LinksFunction } from 'remix';
import { json, Link, useActionData, useSearchParams } from 'remix';

import stylesUrl from '../styles/login.css';
import { db as database } from '../utils/db.server';

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: 'stylesheet' }];
};

const validateUsername = (username: unknown): string | undefined => {
  if (typeof username !== 'string' || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
};

const validatePassword = (password: unknown): string | undefined => {
  if (typeof password !== 'string' || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
};

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    loginType: string;
    username: string;
    password: string;
  };
};

const badRequest = (data: ActionData): Response => {
  return json(data, { status: 400 });
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get('loginType');
  const username = form.get('username');
  const password = form.get('password');
  const redirectTo = form.get('redirectTo') ?? '/jokes';
  if (
    typeof loginType !== 'string' ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    typeof redirectTo !== 'string'
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { loginType, password, username };
  const fieldErrors = {
    password: validatePassword(password),
    username: validateUsername(username),
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  switch (loginType) {
    case 'login': {
      // login to get the user
      // if there's no user, return the fields and a formError
      // if there is a user, create their session and redirect to /jokes
      return badRequest({
        fields,
        formError: 'Not implemented',
      });
    }

    case 'register': {
      const userExists = await database.user.findFirst({
        select: { id: true },
        where: { username },
      });
      if (userExists) {
        return badRequest({
          fields,
          formError: `User with username ${username} already exists`,
        });
      }

      // create the user
      // create their session and redirect to /jokes
      return badRequest({
        fields,
        formError: 'Not implemented',
      });
    }

    default: {
      return badRequest({
        fields,
        formError: `Login type invalid`,
      });
    }
  }
};

const Login = (): JSX.Element => {
  const actionData = useActionData<ActionData>();
  const [searchParameters] = useSearchParams();

  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Login</h1>
        <form
          method="post"
          aria-describedby={
            typeof actionData?.formError === 'string'
              ? 'form-error-message'
              : undefined
          }
        >
          <input
            type="hidden"
            name="redirectTo"
            value={searchParameters.get('redirectTo') ?? undefined}
          />
          <fieldset>
            <legend className="sr-only">Login or Register?</legend>
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked={
                  typeof actionData?.fields?.loginType !== 'string' ||
                  actionData?.fields?.loginType === 'login'
                }
              />{' '}
              Login
            </label>
            <label>
              <input
                type="radio"
                name="loginType"
                value="register"
                defaultChecked={actionData?.fields?.loginType === 'register'}
              />{' '}
              Register
            </label>
          </fieldset>
          <div>
            <label htmlFor="username-input">Username</label>
            <input
              type="text"
              id="username-input"
              name="username"
              defaultValue={actionData?.fields?.username}
              aria-invalid={Boolean(actionData?.fieldErrors?.username)}
              aria-describedby={
                typeof actionData?.fieldErrors?.username === 'string'
                  ? 'username-error'
                  : undefined
              }
            />
            {typeof actionData?.fieldErrors?.username === 'string' ? (
              <p
                className="form-validation-error"
                role="alert"
                id="username-error"
              >
                {actionData?.fieldErrors.username}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              name="password"
              defaultValue={actionData?.fields?.password}
              type="password"
              aria-invalid={
                Boolean(actionData?.fieldErrors?.password) || undefined
              }
              aria-describedby={
                typeof actionData?.fieldErrors?.password === 'string'
                  ? 'password-error'
                  : undefined
              }
            />
            {typeof actionData?.fieldErrors?.password === 'string' ? (
              <p
                className="form-validation-error"
                role="alert"
                id="password-error"
              >
                {actionData?.fieldErrors.password}
              </p>
            ) : null}
          </div>
          <div id="form-error-message">
            {typeof actionData?.formError === 'string' ? (
              <p className="form-validation-error" role="alert">
                {actionData?.formError}
              </p>
            ) : null}
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jokes">Jokes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
