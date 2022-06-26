import 'react-circular-progressbar/dist/styles.css';

import { useMutation, useQuery } from '@apollo/client';
import {
  InputType,
  SimpleForm,
  simpleFormButtons,
  simpleFormInputs,
} from '@ethang/react-components';
import { useContext, useEffect, useState } from 'react';

import formStyles from '../../../../styles/form.module.css';
import { DashboardContext } from '../../pages/dashboard';
import { ADD_CALORIE, AddCalorie } from './graphql/queries/dashboard-mutations';
import {
  LAST_CALORIE_RECORD,
  LastCalorieRecord,
} from './graphql/queries/dashboard-queries';

export function Calories(): JSX.Element {
  const dashboardState = useContext(DashboardContext);
  const { data: queryData, loading: queryLoading } =
    useQuery<LastCalorieRecord>(LAST_CALORIE_RECORD, {
      fetchPolicy: 'cache-and-network',
    });
  const [addCalorie, { loading: mutationLoading }] =
    useMutation<AddCalorie>(ADD_CALORIE);

  const [formState, setFormState] = useState({ AddCalories: 0, Weight: 0 });

  useEffect(() => {
    if (typeof queryData !== 'undefined') {
      setFormState(formState_ => {
        return {
          ...formState_,
          Weight: queryData.calorieFirst.Person.weightLbs,
        };
      });
    }
  }, [queryData]);

  const onUpdate = async (): Promise<void> => {
    const roundedWeight = Number(Number(formState.Weight).toFixed(2));

    await addCalorie({
      refetchQueries: [{ query: LAST_CALORIE_RECORD }],
      variables: {
        caloriesToAdd: formState.AddCalories,
        userId: dashboardState.userId,
        weight: roundedWeight,
      },
    });

    formState.AddCalories = 0;
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
      buttonText: queryLoading || mutationLoading ? 'Saving' : 'Save',
      name: 'Save',
      properties: { style: { marginLeft: '0.3rem' }, type: 'submit' },
    },
  ]);

  if (typeof queryData === 'undefined') {
    return null;
  }

  return (
    <div style={{ width: '330px' }}>
      <SimpleForm
        buttons={buttons}
        fieldsetProperties={{ disabled: queryLoading || mutationLoading }}
        formProperties={{ className: formStyles.Form }}
        formState={formState}
        inputs={formInputs}
        postSubmitFunction={onUpdate}
        setFormState={setFormState}
      />
      <div style={{ fontWeight: 'bold' }}>
        {queryData.calorieFirst.leftForToday} Left
      </div>
    </div>
  );
}
