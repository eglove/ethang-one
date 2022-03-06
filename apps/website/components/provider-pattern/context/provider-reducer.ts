import { ProviderState } from './provider-state';

export type ProviderAction = {
  method: keyof ProviderState;
  payload?: unknown;
};

export const providerReducer = (
  draft: ProviderState,
  action: ProviderAction
): void => {
  const newState = new ProviderState(draft);

  const providerMethods = Object.getOwnPropertyNames(ProviderState.prototype);

  if (!providerMethods.includes(action.method)) {
    throw new Error(
      `action.method should be one of ${providerMethods.toString()}`
    );
  }

  // @ts-expect-error Type checking in methods
  newState[action.method] = action.payload;

  for (const key of Object.keys(newState)) {
    let publicKey = key;
    if (key.startsWith('_')) {
      publicKey = key.slice(1);
    }

    draft[publicKey] = newState[publicKey] as unknown;
  }
};
