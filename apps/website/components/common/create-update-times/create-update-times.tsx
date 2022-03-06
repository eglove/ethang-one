import { humanReadableLocalDateTime } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';

interface CreateUpdateTimesProperties {
  created: string | Date;
  updated: string | Date;
}

export const CreateUpdateTimes = ({
  created,
  updated,
}: CreateUpdateTimesProperties): JSX.Element => {
  const [returnString, setReturnString] = useState<string>();

  useEffect(() => {
    const readableCreated = humanReadableLocalDateTime(created);
    const readableUpdated = humanReadableLocalDateTime(updated);
    let newReturnString = `Published: ${readableCreated}`;

    if (readableCreated !== readableUpdated) {
      newReturnString += `, Updated: ${readableUpdated}`;
    }

    setReturnString(newReturnString);
  }, [created, updated]);

  return <div>{returnString}</div>;
};
