import { createContext, Dispatch, useContext, useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

import {
  GlobalActionEnum,
  GlobalActionType,
  globalReducer,
  GlobalStateType,
} from './global-reducer';

interface GlobalContextWrapperProperties {
  children: JSX.Element | JSX.Element[];
}

// @ts-expect-error No default needed, will be initialized by immer
export const GlobalStateContext = createContext<GlobalStateType>();
GlobalStateContext.displayName = 'GlobalState';

export const GlobalDispatchContext =
  // @ts-expect-error No default needed, will be initialized by immer
  createContext<Dispatch<GlobalActionType>>();
GlobalDispatchContext.displayName = 'InviteDispatch';

export function GlobalContextWrapper({
  children,
}: GlobalContextWrapperProperties): JSX.Element {
  // @ts-expect-error leave for now
  const [globalState, globalDispatch] = useImmerReducer(globalReducer, {
    currentShellMessages: [],
  });

  useEffect(() => {
    globalDispatch({ type: GlobalActionEnum.createSocket });
  }, [globalDispatch]);

  return (
    <GlobalDispatchContext.Provider value={globalDispatch}>
      <GlobalStateContext.Provider value={globalState}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
}

export const useGlobalStateContext = (): GlobalStateType => {
  return useContext(GlobalStateContext);
};

export const useGlobalDispatchContext = (): Dispatch<GlobalActionType> => {
  return useContext(GlobalDispatchContext);
};
