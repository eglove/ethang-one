import { Constant, ENV_KEYS } from '@ethang/node-environment';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { constants as nodeConstants } from 'node:http2';

export default function (
  request: NextApiRequest,
  response: NextApiResponse
): void {
  if (
    typeof request.body.email !== 'string' ||
    typeof request.body.password !== 'string' ||
    request.method !== 'POST'
  ) {
    response.status(500);
    response.send({ error: 'Failed to login.' });
    return;
  }

  const { email, password } = request.body as {
    email: string;
    password: string;
  };

  const constants = new Constant();
  if (
    email !== constants.get(ENV_KEYS.ADMIN_EMAIL) ||
    password !== constants.get(ENV_KEYS.ADMIN_PASSWORD)
  ) {
    response.status(nodeConstants.HTTP_STATUS_UNAUTHORIZED);
    response.send({ error: 'Unauthorized' });
    return;
  }

  response.status(nodeConstants.HTTP_STATUS_OK);
  response.json({
    token: jwt.sign(
      {
        email,
      },
      process.env.NX_CRYPTO_TOKEN,
      {
        expiresIn: '365d',
      }
    ),
  });
}
