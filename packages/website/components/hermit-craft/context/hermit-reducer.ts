import { DataEntity } from '../types/hermit-craft-types';
import { HermitState } from './hermit-state';

export interface HermitStateProperties {
  availableStreams?: DataEntity[];
  currentlyWatching?: string;
  notCurrentlyWatching?: DataEntity[];
}

export enum HermitActionEnum {
  availableStreams = 'availableStreams',
  currentlyWatching = 'currentlyWatching',
  visitHermitHome = 'visitHermitHome',
}

export type HermitAction = {
  type: HermitActionEnum;
  payload?: unknown;
};

export const hermitReducer = (
  draft: HermitStateProperties,
  action: HermitAction
): void => {
  const newState = new HermitState(draft);
  for (const key of Object.keys(draft)) {
    newState[key] = draft[key] as unknown;
  }

  const hermitStateMethods = Object.getOwnPropertyNames(HermitState.prototype);

  if (hermitStateMethods.includes(action.type)) {
    const methodToCall = newState[action.type] as unknown;

    if (typeof methodToCall === 'function') {
      // @ts-expect-error If it's a function is callable.
      newState[action.type](action.payload);
    } else {
      // @ts-expect-error If there's a payload, we're setting
      newState[action.type] = action.payload;
    }
  } else {
    throw new Error(
      `action.type should be one of ${hermitStateMethods.toString()}`
    );
  }

  for (const key of Object.keys(newState)) {
    const publicKey = key.slice(1);
    draft[publicKey] = newState[publicKey] as unknown;
  }
};
