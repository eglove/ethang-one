import { useMutation, useQuery } from '@apollo/client';
import { Form, FormInput } from '@ethang/react-components';
import { useState } from 'react';

import { Container } from '../../../components/common/container/container';
import { updateFinanceRecords } from '../../../components/dashboard/graphql/mutations';
import {
  FinanceStatuses,
  financeStatuses,
} from '../../../components/dashboard/graphql/queries';
import commonStyles from '../../../styles/common.module.css';

export const Account = {
  CHASE_CC: 'ChaseCreditCard',
  E_TORO: 'eToro',
  LENDING_CLUB: 'LendingClub',
  LIGHTSTREAM: 'LightStream',
  USAA_CHECKING: 'UsaaChecking',
  USAA_SAVINGS: 'UsaaSavings',
};

function Finance(): JSX.Element {
  const [formState, setFormState] = useState({});
  const [updateRecords] = useMutation(updateFinanceRecords);

  const formInputs = [
    new FormInput(Account.USAA_CHECKING, { label: 'USAA Checking' }),
    new FormInput(Account.USAA_SAVINGS, { label: 'USAA Savings' }),
    new FormInput(Account.CHASE_CC, {}),
    new FormInput(Account.LIGHTSTREAM, { label: Account.LIGHTSTREAM }),
    new FormInput(Account.E_TORO, { label: Account.E_TORO }),
    new FormInput(Account.LENDING_CLUB, { label: Account.LENDING_CLUB }),
  ];

  useQuery<FinanceStatuses>(financeStatuses, {
    fetchPolicy: 'cache-and-network',
    onCompleted(data) {
      setFormState(formState_ => {
        return {
          ...formState_,
          [Account.USAA_CHECKING]:
            data.UsaaChecking.items[0]?.currentValue ?? 0,
          [Account.USAA_SAVINGS]: data.UsaaSavings.items[0]?.currentValue ?? 0,
          [Account.CHASE_CC]: data.ChaseCreditCard.items[0]?.currentValue ?? 0,
          [Account.LIGHTSTREAM]: data.LightStream.items[0]?.currentValue ?? 0,
          [Account.E_TORO]: data.eToro.items[0]?.currentValue ?? 0,
          [Account.LENDING_CLUB]: data.LendingClub.items[0]?.currentValue ?? 0,
        };
      });
    },
  });

  const handleSubmit = (): void => {
    const dataVariable: Array<{
      accountName: string;
      currentValue: number;
      recordedDate: string;
    }> = [
      {
        accountName: Account.USAA_CHECKING,
        currentValue: Number(formState[Account.USAA_CHECKING]),
        recordedDate: new Date().toISOString().split('T')[0],
      },
      {
        accountName: Account.USAA_SAVINGS,
        currentValue: Number(formState[Account.USAA_SAVINGS]),
        recordedDate: new Date().toISOString().split('T')[0],
      },
      {
        accountName: Account.CHASE_CC,
        currentValue: Number(formState[Account.CHASE_CC]),
        recordedDate: new Date().toISOString().split('T')[0],
      },
      {
        accountName: Account.LIGHTSTREAM,
        currentValue: Number(formState[Account.LIGHTSTREAM]),
        recordedDate: new Date().toISOString().split('T')[0],
      },
      {
        accountName: Account.E_TORO,
        currentValue: Number(formState[Account.E_TORO]),
        recordedDate: new Date().toISOString().split('T')[0],
      },
      {
        accountName: Account.LENDING_CLUB,
        currentValue: Number(formState[Account.LENDING_CLUB]),
        recordedDate: new Date().toISOString().split('T')[0],
      },
    ];

    updateRecords({
      variables: {
        data: dataVariable,
      },
    }).catch((error: Error) => {
      console.error(error);
    });
  };

  return (
    <Container>
      <div>Update Accounts</div>
      <Form
        formProperties={{ className: commonStyles.Form }}
        inputObjects={formInputs}
        inputState={formState}
        setInputState={setFormState}
        submitButtonText="Save"
        postSubmitFunction={handleSubmit}
      />
    </Container>
  );
}

export default Finance;
