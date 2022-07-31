import fetch from 'cross-fetch';

import { CoursesDetail } from './types/courses-detail';

export class UdemyApi {
  async coursesDetail(primaryKey: number): Promise<CoursesDetail> {
    const response = await fetch(`${this.baseUrl}/courses/${primaryKey}`, {
      headers: this.headers,
    });

    return response.json() as unknown as CoursesDetail;
  }

  private get baseUrl(): string {
    return 'https://www.udemy.com/api-2.0';
  }

  private get clientId(): string {
    return process.env.NX_UDEMY_CLIENT_ID ?? '';
  }

  private get clientSecret(): string {
    return process.env.NX_UDEMY_CLIENT_SECRET ?? '';
  }

  private get headers(): HeadersInit {
    const secretBuffer = Buffer.from(`${this.clientId}:${this.clientSecret}`);
    const authorization = `Basic ${secretBuffer.toString('base64')}`;

    return {
      Accept: 'application/json, text/plain, */*',
      Authorization: authorization,
      'Content-Type': 'application/json;charset=utf-8',
    };
  }
}
