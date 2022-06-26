import { useMutation } from '@apollo/client';
import { FinanceRecordCreateManyInput } from '@ethang/prisma-nestjs-graphql';
import {
  Container,
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { isBrowser } from '@ethang/util-typescript';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

import formStyles from '../../../../../styles/form.module.css';
import { HeadTag } from '../../../components/common/head-tag/head-tag';
import { CREATE_FINANCE_RECORDS } from '../../../components/dashboard/graphql/queries/dashboard-mutations';
import { DashboardContext } from '../index';

export const Account = {
  CHASE_CC: 'ChaseCreditCard',
  E_TORO: 'eToro',
  LENDING_CLUB: 'LendingClub',
  LIGHTSTREAM: 'LightStream',
  USAA_CHECKING: 'UsaaChecking',
  USAA_SAVINGS: 'UsaaSavings',
};

function Finance(): JSX.Element {
  const dashboardState = useContext(DashboardContext);
  const router = useRouter();

  const [createFinanceRecords, { loading }] = useMutation(
    CREATE_FINANCE_RECORDS
  );

  const [formState, setFormState] = useState({
    [Account.USAA_CHECKING]: 0,
    [Account.USAA_SAVINGS]: 0,
    [Account.CHASE_CC]: 0,
    [Account.LIGHTSTREAM]: 0,
    [Account.E_TORO]: 0,
    [Account.LENDING_CLUB]: 0,
  });

  const buttons = [
    new SimpleFormButton({
      buttonText: loading ? 'Saving' : 'Save',
      name: 'Submit',
      properties: { type: 'submit' },
    }),
  ];

  const formInputs = [
    new SimpleFormInput({
      label: 'USAA Checking',
      name: Account.USAA_CHECKING,
    }),
    new SimpleFormInput({ label: 'USAA Savings', name: Account.USAA_SAVINGS }),
    new SimpleFormInput({ name: Account.CHASE_CC }),
    new SimpleFormInput({
      label: Account.LIGHTSTREAM,
      name: Account.LIGHTSTREAM,
    }),
    new SimpleFormInput({ label: Account.E_TORO, name: Account.E_TORO }),
    new SimpleFormInput({
      label: Account.LENDING_CLUB,
      name: Account.LENDING_CLUB,
    }),
  ];

  const handleSubmit = async (): Promise<void> => {
    const formStateKeys = Object.keys(formState);

    const postArray: FinanceRecordCreateManyInput[] = [];
    for (const key of formStateKeys) {
      if (Number.isNaN(Number(formState[key]))) {
        throw new TypeError(`Invalid number for ${key}.`);
      }

      postArray.push({
        accountName: key,
        currentValue: Number(formState[key]),
        recordedDate: new Date(),
      });
    }

    await createFinanceRecords({
      variables: {
        data: postArray,
      },
    });
  };

  if (!dashboardState.isLoggedIn && isBrowser) {
    router.push('/dashboard').catch((error: Error) => {
      console.error(error);
    });
  } else {
    return (
      <Container>
        <HeadTag title="Finance Update" />
        <div>Update Accounts</div>
        <SimpleForm
          buttons={buttons}
          formProperties={{ className: formStyles.Form }}
          formState={formState}
          inputs={formInputs}
          postSubmitFunction={handleSubmit}
          setFormState={setFormState}
        />
      </Container>
    );
  }
}

export default Finance;
