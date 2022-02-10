import { createContext, Dispatch, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

import { ProviderAction, providerReducer } from './provider-reducer';
import { ProviderState } from './provider-state';

const ProviderContext = createContext(new ProviderState());
ProviderContext.displayName = 'ProviderState';

// @ts-expect-error Default provided by immer
const ProviderDispatch = createContext<Dispatch<ProviderAction>>();
ProviderDispatch.displayName = 'ProviderDispatch';

export const useProviderState = (): ProviderState => {
  return useContext(ProviderContext);
};

export const useProviderDispatch = (): Dispatch<ProviderAction> => {
  return useContext(ProviderDispatch);
};

export const ProviderWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  // @ts-expect-error Just go with it.
  const [provider, providerDispatch] = useImmerReducer(providerReducer, {});

  return (
    <ProviderDispatch.Provider value={providerDispatch}>
      <ProviderContext.Provider value={provider}>
        {children}
      </ProviderContext.Provider>
    </ProviderDispatch.Provider>
  );
};
