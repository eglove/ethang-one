import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default function (
  request: NextApiRequest,
  response: NextApiResponse
): void {
  if (
    typeof request.body.username !== 'string' ||
    typeof request.body.password !== 'string' ||
    request.method !== 'POST'
  ) {
    response.status(500);
    response.send('Failed to login.');
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { username, password } = request.body as {
    password: string;
    username: string;
  };

  response.json({
    token: jwt.sign(
      {
        username,
      },
      process.env.NX_CRYPTO_TOKEN,
      {
        expiresIn: '365d',
      }
    ),
  });
}

export const decodeToken = (
  token: string | undefined
): ReturnType<typeof jwt.decode> => {
  return jwt.decode(token);
};
