import { JwtToken } from '@ethang/types';
import { isNullOrUndefined } from '@ethang/util-typescript';
import jwt from 'jsonwebtoken';
import { action, makeAutoObservable, observable } from 'mobx';

import { apolloClient } from '../../../pages/_app';
import { VALIDATE_USER } from '../graphql/queries/dashboard-queries';

export class Dashboard {
  @observable userId?: string;
  @observable private _isLoggedIn: boolean;

  constructor() {
    makeAutoObservable(this);
    this.resumeLogin().catch((error: Error) => {
      console.error(error);
    });
  }

  @action resumeLogin = async (): Promise<void> => {
    const token = globalThis.localStorage?.getItem('jwtToken');

    if (typeof token !== 'undefined') {
      const decoded = jwt.decode(token) as JwtToken | undefined;
      this.userId = decoded.userId;

      if (!isNullOrUndefined<JwtToken>(decoded)) {
        const { data } = await apolloClient.query<{ validate: boolean }>({
          query: VALIDATE_USER,
          variables: {
            email: decoded.userEmail,
            encryptedPassword: decoded.encrypted,
            role: 'admin',
          },
        });

        if (typeof data?.validate === 'boolean') {
          this.isLoggedIn = true;
        }
      }
    }
  };

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  @action set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
