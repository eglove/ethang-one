import { Constant, ENV_KEYS } from '@ethang/node-environment';
import jwt from 'jsonwebtoken';
import { action, makeAutoObservable, observable } from 'mobx';

export class Dashboard {
  @observable private _isLoggedIn: boolean;

  constructor() {
    makeAutoObservable(this);
    this.resumeLogin();
  }

  @action resumeLogin = (): void => {
    const token = globalThis.localStorage?.getItem('token');

    if (typeof token !== 'undefined') {
      const constants = new Constant();
      const decoded = jwt.decode(JSON.parse(token)) as { email: string };

      this.isLoggedIn = decoded?.email === constants.get(ENV_KEYS.ADMIN_EMAIL);
    }
  };

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  @action set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
