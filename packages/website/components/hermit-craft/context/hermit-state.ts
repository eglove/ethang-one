import { DataEntity } from '../types/hermit-craft-types';
import { HermitStateProperties } from './hermit-reducer';

export class HermitState {
  private _availableStreams?: DataEntity[];
  private _currentlyWatching?: string;
  private _notCurrentlyWatching?: DataEntity[];

  constructor(oldStateProperties?: HermitStateProperties) {
    for (const key of Object.keys(oldStateProperties)) {
      this[key] = oldStateProperties[key] as unknown;
    }
  }

  visitHermitHome(availableStreams: DataEntity[]): void {
    this._availableStreams = availableStreams;
    this._currentlyWatching = availableStreams[0].id;
    this._notCurrentlyWatching =
      availableStreams.length > 0
        ? availableStreams.filter(stream => {
            return stream.id !== availableStreams[0].id;
          })
        : [];
  }

  get availableStreams(): DataEntity[] {
    return this._availableStreams;
  }

  set availableStreams(availableStreams: DataEntity[]) {
    this._availableStreams = availableStreams;
  }

  get currentlyWatching(): string {
    return this._currentlyWatching;
  }

  set currentlyWatching(currentlyWatching: string) {
    this._currentlyWatching = currentlyWatching;
    this._notCurrentlyWatching = this._availableStreams?.filter(stream => {
      return stream.id !== currentlyWatching;
    });
  }

  get notCurrentlyWatching(): DataEntity[] {
    return this._notCurrentlyWatching;
  }

  set notCurrentlyWatching(notCurrentlyWatching: DataEntity[]) {
    this._notCurrentlyWatching = notCurrentlyWatching;
  }
}
