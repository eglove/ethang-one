import { createContext, Dispatch, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

import {
  HermitAction,
  hermitReducer,
  HermitStateProperties,
} from './hermit-reducer';

interface HermitContextWrapperProperties {
  children: JSX.Element | JSX.Element[];
}

export const HermitStateContext = createContext<HermitStateProperties>({});
HermitStateContext.displayName = 'HermitState';

// @ts-expect-error Default will be set by immer
export const HermitDispatchContext = createContext<Dispatch<HermitAction>>();
HermitDispatchContext.displayName = 'HermitDispatch';

export const HermitContextWrapper = ({
  children,
}: HermitContextWrapperProperties): JSX.Element => {
  const [hermitState, hermitDispatch] = useImmerReducer(hermitReducer, {});

  return (
    <HermitDispatchContext.Provider value={hermitDispatch}>
      <HermitStateContext.Provider value={hermitState}>
        {children}
      </HermitStateContext.Provider>
    </HermitDispatchContext.Provider>
  );
};

export const useHermitStateContext = (): HermitStateProperties => {
  return useContext(HermitStateContext);
};

export const useHermitDispatchContext = (): Dispatch<HermitAction> => {
  return useContext(HermitDispatchContext);
};
