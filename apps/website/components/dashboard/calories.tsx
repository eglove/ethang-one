import { useMutation, useQuery } from '@apollo/client';
import { Constant, ENV_KEYS } from '@ethang/node-environment';
import { Form, FormInput, InputType } from '@ethang/react-components';
import { useLocalStorage } from '@ethang/react-hooks';
import { ageFromBirthday } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { usePrevious } from '../../../../libs/react-hooks/src/lib/use-previous';
import { Person } from '../../graphql/types';
import commonStyles from '../../styles/common.module.css';
import { HeadTag } from '../common/head-tag/head-tag';
import { updateWeight } from './graphql/mutations';
import { calorieData } from './graphql/queries';

type MyData = {
  person: Pick<
    Person,
    'birthday' | 'heightIn' | 'firstName' | 'lastName' | 'weightLbs'
  >;
};

export function Calories(): JSX.Element {
  const [weight, setWeight] = useState(0);
  const previousWeight = usePrevious(weight);
  const [calories, setCalories] = useState<number>(0);
  const [formState, setFormState] = useState({ AddCalories: 0, Weight: 0 });
  const [todaysCalories, setTodaysCalories] = useLocalStorage<number>(
    'todaysCalories',
    0
  );

  useEffect(() => {
    setFormState(formState_ => {
      return { ...formState_, CaloriesToday: todaysCalories };
    });
  }, [todaysCalories]);

  const formInputs = [
    new FormInput('Weight', {
      inputProperties: { required: true },
      type: InputType.number,
    }),
    new FormInput('AddCalories', {
      type: InputType.number,
    }),
  ];

  const constants = new Constant();
  const [handleUpdateWeight] = useMutation(updateWeight);

  useQuery<MyData>(calorieData, {
    onCompleted(data_) {
      setFormState(formState_ => {
        return {
          ...formState_,
          Weight: data_.person.weightLbs,
        };
      });
      setWeight(data_.person.weightLbs);
      const weightInKg = data_.person.weightLbs * 0.453_592;
      const heightInCm = data_.person.heightIn * 2.54;
      const age = ageFromBirthday(data_.person.birthday);
      setCalories(10 * weightInKg + 6.25 * heightInCm - 5 * age + 5);
    },
    variables: {
      id: constants.get(ENV_KEYS.MY_ID),
    },
  });

  const onWeightChange = (): void => {
    const rounded = Number(Number(formState.Weight).toFixed(2));
    setTodaysCalories(Number(todaysCalories) + formState.AddCalories);

    if (weight !== previousWeight) {
      console.log('firing');
      handleUpdateWeight({
        variables: { id: constants.get(ENV_KEYS.MY_ID), weight: rounded },
      }).catch((error: Error) => {
        console.error(error);
      });
    }
  };

  return (
    <>
      <HeadTag title="Profile" />
      <div style={{ width: 'max-content' }}>
        <CircularProgressbarWithChildren
          maxValue={calories}
          value={todaysCalories}
        >
          <Form
            hideSubmitButton
            inputObjects={formInputs}
            inputState={formState}
            setInputState={setFormState}
            submitButtonText="Save"
            postSubmitFunction={onWeightChange}
            formProperties={{
              className: commonStyles.Form,
            }}
          />
          <div>
            {todaysCalories} out of {calories.toFixed(0)}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
}
