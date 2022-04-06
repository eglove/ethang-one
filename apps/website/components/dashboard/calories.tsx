import { useMutation, useQuery } from '@apollo/client';
import { Constant, ENV_KEYS } from '@ethang/node-environment';
import { Form, FormInput, InputType } from '@ethang/react-components';
import { useLocalStorage } from '@ethang/react-hooks';
import { ageFromBirthday } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

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
      inputProperties: { required: true, step: '0.01' },
      type: InputType.number,
    }),
    new FormInput('AddCalories', {
      type: InputType.number,
    }),
  ];

  const constants = new Constant();
  const [handleUpdateWeight, { loading }] = useMutation(updateWeight);

  useQuery<MyData>(calorieData, {
    fetchPolicy: 'cache-and-network',
    onCompleted(data_) {
      setFormState(formState_ => {
        return {
          ...formState_,
          Weight: data_.person.weightLbs,
        };
      });

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
    formState.AddCalories = 0;

    handleUpdateWeight({
      refetchQueries: [
        {
          query: calorieData,
          variables: {
            id: constants.get(ENV_KEYS.MY_ID),
          },
        },
      ],
      variables: { id: constants.get(ENV_KEYS.MY_ID), weight: rounded },
    }).catch((error: Error) => {
      console.error(error);
    });
  };

  const onReset = (): void => {
    setTodaysCalories(0);
  };

  return (
    <>
      <HeadTag title="Profile" />
      <div style={{ width: 'max-content' }}>
        <CircularProgressbarWithChildren
          maxValue={calories}
          value={todaysCalories}
          strokeWidth={3}
        >
          <Form
            inputObjects={formInputs}
            inputState={formState}
            setInputState={setFormState}
            cancelButtonText="Reset"
            submitButtonText={loading ? 'Saving' : 'Save'}
            postSubmitFunction={onWeightChange}
            cancelButtonProperties={{ onClick: onReset }}
            submitButtonProperties={{ style: { marginLeft: '0.3rem' } }}
            formProperties={{
              className: commonStyles.Form,
            }}
          />
          <div>{Number(calories.toFixed(0)) - todaysCalories} left</div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
}
