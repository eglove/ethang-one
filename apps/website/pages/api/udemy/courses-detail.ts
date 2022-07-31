import { UdemyApi } from '@ethang/udemy-api';
import { HTTP_METHOD } from '@ethang/util-typescript';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function coursesDetail(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  if (request.method !== HTTP_METHOD.GET) {
    throw new Error('Invalid method.');
  }

  const { courseKey } = request.query;

  const data = await new UdemyApi().coursesDetail(Number(courseKey));

  response.json(data);
}
