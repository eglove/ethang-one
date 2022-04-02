import { gql, useMutation } from '@apollo/client';
import { Constant, ENV_KEYS } from '@ethang/node-environment';
import { ageFromBirthday } from '@ethang/util-typescript';
import { ChangeEvent, useEffect, useState } from 'react';

import { Container } from '../../../components/common/container/container';
import { HeadTag } from '../../../components/common/head-tag/head-tag';
import { Person } from '../../../graphql/types';
import { apolloClient } from '../../_app';
import { updateHeight, updateWeight } from '../graphql/mutations';

type MyData = Pick<
  Person,
  'birthday' | 'heightIn' | 'firstName' | 'lastName' | 'weightLbs'
>;

interface ProfileProperties {
  data: { person: MyData };
}

function Profile({ data }: ProfileProperties): JSX.Element {
  const constants = new Constant();

  const [height, setHeight] = useState<number>(data.person.heightIn ?? 0);
  const [weight, setWeight] = useState<number>(data.person.weightLbs ?? 0);
  const [bmi, setBmi] = useState<number>(0);
  const [calories, setCalories] = useState<number>(0);

  const [handleUpdateHeight] = useMutation(updateHeight);
  const [handleUpdateWeight] = useMutation(updateWeight);

  const onHeightChange = (height: string): void => {
    const rounded = Number(Number(height).toFixed(2));

    setHeight(rounded);
    handleUpdateHeight({
      variables: { height: rounded, id: constants.get(ENV_KEYS.MY_ID) },
    }).catch((error: Error) => {
      console.error(error);
    });
  };

  const onWeightChange = (weight: string): void => {
    const rounded = Number(Number(weight).toFixed(2));

    setWeight(rounded);
    handleUpdateWeight({
      variables: { id: constants.get(ENV_KEYS.MY_ID), weight: rounded },
    }).catch((error: Error) => {
      console.error(error);
    });
  };

  // Calculate BMI
  useEffect(() => {
    setBmi((weight / (height * height)) * 703);
  }, [height, weight]);

  // Calculate caloric intake
  useEffect(() => {
    const weightInKg = weight * 0.453_592;
    const heightInCm = height * 2.54;
    const age = ageFromBirthday(data.person.birthday);
    console.log(data.person.birthday);

    setCalories(10 * weightInKg + 6.25 * heightInCm - 5 * age + 5);
  }, [data.person.birthday, height, weight]);

  return (
    <Container>
      <HeadTag title="Profile" />
      <div>
        Name: {data.person.firstName} {data.person.lastName}
      </div>
      <div>
        <label htmlFor="height">
          Height (in):{' '}
          <input
            id="height"
            name="height"
            type="number"
            value={height}
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              onHeightChange(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="height">
          Weight (lbs):{' '}
          <input
            id="weight"
            name="weight"
            type="number"
            value={weight}
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              onWeightChange(event.target.value);
            }}
          />
        </label>
      </div>
      <div>BMI: {bmi.toFixed(2)} (Healthy: 18.5 - 24.9)</div>
      <div>Calories: {calories.toFixed(2)}</div>
    </Container>
  );
}

export default Profile;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<{
  props: { data: MyData };
}> {
  const constants = new Constant();
  console.log(constants.get(ENV_KEYS.MY_ID));

  const { data } = await apolloClient.client.query<MyData>({
    query: gql`
      query MyData($id: ID!) {
        person(id: $id) {
          firstName
          lastName
          birthday
          weightLbs
          heightIn
        }
      }
    `,
    variables: {
      id: constants.get(ENV_KEYS.MY_ID),
    },
  });

  console.log(data);

  return {
    props: { data },
  };
}
