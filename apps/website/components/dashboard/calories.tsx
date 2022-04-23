import {
  InputType,
  SimpleForm,
  simpleFormButtons,
  simpleFormInputs,
} from '@ethang/react-components';
import { ageFromBirthday, fetcher, JSON_HEADER } from '@ethang/util-typescript';
import { TodaysCalories as TodaysCaloriesObject } from '@prisma/client';
import { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import useSWR from 'swr';

import commonStyles from '../../styles/common.module.css';
import { API_TODAYS_CALORIES } from '../../util/constants';

export function Calories(): JSX.Element {
  const { data, mutate } = useSWR<TodaysCaloriesObject>(
    API_TODAYS_CALORIES,
    fetcher
  );
  const [isLoading, setIsLoading] = useState(false);
  const [calories, setCalories] = useState<number>(0);
  const [formState, setFormState] = useState({ AddCalories: 0, Weight: 0 });

  useEffect(() => {
    if (typeof data === 'undefined') {
      return;
    }

    setFormState(formState_ => {
      return {
        ...formState_,
        Weight: data.weight,
      };
    });

    const weightInKg = data.weight * 0.453_592;
    const heightInCm = data.height * 2.54;
    const age = ageFromBirthday(data.birthday);
    setCalories(10 * weightInKg + 6.25 * heightInCm - 5 * age + 5);
  }, [data]);

  const onUpdate = async (): Promise<void> => {
    setIsLoading(true);
    const roundedWeight = Number(Number(formState.Weight).toFixed(2));
    const addedCalories = data.currentCalories + formState.AddCalories;
    formState.AddCalories = 0;

    await fetch(API_TODAYS_CALORIES, {
      body: JSON.stringify({
        currentCalories: addedCalories,
        weight: roundedWeight,
      }),
      headers: JSON_HEADER,
      method: 'POST',
    });
    await mutate();
    setIsLoading(false);
  };

  const onReset = async (): Promise<void> => {
    setIsLoading(true);
    await fetch(API_TODAYS_CALORIES, {
      body: JSON.stringify({
        currentCalories: 0,
      }),
      headers: JSON_HEADER,
      method: 'POST',
    });
    await mutate();
    setIsLoading(false);
  };

  const formInputs = simpleFormInputs([
    {
      inputProperties: { required: true, step: '0.01' },
      inputType: InputType.number,
      name: 'Weight',
    },
    {
      inputType: InputType.number,
      name: 'AddCalories',
    },
  ]);

  const buttons = simpleFormButtons([
    {
      name: 'Clear',
      properties: {
        onClick: onReset,
      },
    },
    {
      buttonText: isLoading ? 'Saving' : 'Save',
      name: 'Save',
      properties: { style: { marginLeft: '0.3rem' }, type: 'submit' },
    },
  ]);

  if (typeof data === 'undefined') {
    return null;
  }

  return (
    <div style={{ width: '330px' }}>
      <CircularProgressbarWithChildren
        maxValue={calories}
        strokeWidth={3}
        value={data.currentCalories}
      >
        <SimpleForm
          buttons={buttons}
          fieldsetProperties={{ disabled: isLoading }}
          formProperties={{ className: commonStyles.Form }}
          formState={formState}
          inputs={formInputs}
          postSubmitFunction={onUpdate}
          setFormState={setFormState}
        />
        <div>{Number(calories.toFixed(0)) - data.currentCalories} left</div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
