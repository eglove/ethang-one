import {DataEntity} from '../types/hermit-craft-types';

export type HermitState = {
  availableStreams?: DataEntity[];
  currentlyWatching?: string;
  notCurrentlyWatching?: DataEntity[];
};

export enum HermitActionEnum {
  setAvailableStreams = 'setAvailableStreams',
  setHermitWatching = 'setHermitWatching',
  visitHermitHome = 'visitHermitHome',
}

export type HermitAction = {type: HermitActionEnum; payload?: unknown};

export const hermitReducer = (draft: HermitState, action: HermitAction): void => {
  switch (action.type) {
    case HermitActionEnum.visitHermitHome: {
      const availableStreams = action.payload as DataEntity[];

      draft.availableStreams = availableStreams;
      draft.currentlyWatching = availableStreams?.[0]?.id;
      draft.notCurrentlyWatching = availableStreams && availableStreams.length > 0 ? availableStreams.filter(stream => {
        return stream.id !== availableStreams[0].id;
      }) : [];
      return;
    }

    case HermitActionEnum.setAvailableStreams: {
      draft.availableStreams = action.payload as DataEntity[];
      return;
    }

    case HermitActionEnum.setHermitWatching: {
      draft.currentlyWatching = action.payload as string;
      draft.notCurrentlyWatching = draft.availableStreams?.filter(stream => {
        return stream.id !== action.payload;
      });
      return;
    }

    default: {
      throw new Error('action.type must be a typeof HermitActionEnum');
    }
  }
};
