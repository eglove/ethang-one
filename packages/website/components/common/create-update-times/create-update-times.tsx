import {humanReadableLocalDateTime} from '@ethang-one/util-typescript';

interface CreateUpdateTimesProperties {
  created: string;
  updated: string;
}

export const CreateUpdateTimes = ({
  created,
  updated,
}: CreateUpdateTimesProperties): JSX.Element => (
  <div>
    {`Published: ${humanReadableLocalDateTime(
      created,
    )}, Updated: ${humanReadableLocalDateTime(updated)}`}
  </div>
);
