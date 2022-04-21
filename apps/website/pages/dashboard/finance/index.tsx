import { useMutation, useQuery } from '@apollo/client';
import {
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { addDays, eightBaseFormatTime } from '@ethang/util-typescript';
import { useState } from 'react';

import { Container } from '../../../components/common/container/container';
import { HeadTag } from '../../../components/common/head-tag/head-tag';
import { updateFinanceRecords } from '../../../components/dashboard/graphql/mutations';
import {
  financeData,
  FinanceStatuses,
  financeStatuses,
} from '../../../components/dashboard/graphql/queries';
import commonStyles from '../../../styles/common.module.css';

export const Account = {
  CHASE_CC: 'ChaseCreditCard',
  E_TORO: 'eToro',
  LENDING_CLUB: 'LendingClub',
  LIGHTSTREAM: 'LightStream',
  MY_MERCY: 'MyMercy',
  USAA_CHECKING: 'UsaaChecking',
  USAA_SAVINGS: 'UsaaSavings',
};

function Finance(): JSX.Element {
  const [formState, setFormState] = useState({});
  const [updateRecords, { loading }] = useMutation(updateFinanceRecords);

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
    new SimpleFormInput({ name: Account.MY_MERCY }),
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

  useQuery<FinanceStatuses>(financeStatuses, {
    fetchPolicy: 'cache-and-network',
    onCompleted(data) {
      setFormState(formState_ => {
        return {
          ...formState_,
          [Account.USAA_CHECKING]:
            data.UsaaChecking.items[0]?.currentValue ?? 0,
          [Account.USAA_SAVINGS]: data.UsaaSavings.items[0]?.currentValue ?? 0,
          [Account.MY_MERCY]: data.MyMercy.items[0]?.currentValue ?? 0,
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
        recordedDate: eightBaseFormatTime(),
      },
      {
        accountName: Account.USAA_SAVINGS,
        currentValue: Number(formState[Account.USAA_SAVINGS]),
        recordedDate: eightBaseFormatTime(),
      },
      {
        accountName: Account.CHASE_CC,
        currentValue: Number(formState[Account.CHASE_CC]),
        recordedDate: eightBaseFormatTime(),
      },
      {
        accountName: Account.MY_MERCY,
        currentValue: Number(formState[Account.MY_MERCY]),
        recordedDate: eightBaseFormatTime(),
      },
      {
        accountName: Account.LIGHTSTREAM,
        currentValue: Number(formState[Account.LIGHTSTREAM]),
        recordedDate: eightBaseFormatTime(),
      },
      {
        accountName: Account.E_TORO,
        currentValue: Number(formState[Account.E_TORO]),
        recordedDate: eightBaseFormatTime(),
      },
      {
        accountName: Account.LENDING_CLUB,
        currentValue: Number(formState[Account.LENDING_CLUB]),
        recordedDate: eightBaseFormatTime(),
      },
    ];

    updateRecords({
      refetchQueries: [
        {
          query: financeData,
          variables: {
            oneMonthAgo: eightBaseFormatTime(addDays(new Date(), -30)),
            today: eightBaseFormatTime(),
          },
        },
      ],
      variables: {
        data: dataVariable,
      },
    }).catch((error: Error) => {
      console.error(error);
    });
  };

  return (
    <Container>
      <HeadTag title="Finance Update" />
      <div>Update Accounts</div>
      <SimpleForm
        buttons={buttons}
        formProperties={{ className: commonStyles.Form }}
        formState={formState}
        inputs={formInputs}
        postSubmitFunction={handleSubmit}
        setFormState={setFormState}
      />
    </Container>
  );
}

export default Finance;
