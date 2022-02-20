import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

import { HomePageQuery } from '../../graphql-queries/technology-logos-query';

export class HomeState {
  private _data?: HomePageQuery;

  constructor(data?: HomePageQuery) {
    makeAutoObservable(this);
    this.data = data;
  }

  get data(): HomePageQuery {
    return this._data;
  }

  set data(value: HomePageQuery) {
    this._data = value;
  }
}

export const HomeStateContext = createContext(new HomeState());

export const useHomeState = (): HomeState => {
  return useContext(HomeStateContext);
};
