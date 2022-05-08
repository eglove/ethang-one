import { Container } from '../../../components/common/container/container';
import { HeadTag } from '../../../components/common/head-tag/head-tag';

export const Account = {
  CHASE_CC: 'ChaseCreditCard',
  E_TORO: 'eToro',
  LENDING_CLUB: 'LendingClub',
  LIGHTSTREAM: 'LightStream',
  USAA_CHECKING: 'UsaaChecking',
  USAA_SAVINGS: 'UsaaSavings',
};

function Finance(): JSX.Element {
  // const [formState, setFormState] = useState({
  //   [Account.USAA_CHECKING]: 0,
  //   [Account.USAA_SAVINGS]: 0,
  //   [Account.CHASE_CC]: 0,
  //   [Account.LIGHTSTREAM]: 0,
  //   [Account.E_TORO]: 0,
  //   [Account.LENDING_CLUB]: 0,
  // });
  // const [loading, setLoading] = useState(false);

  // const buttons = [
  //   new SimpleFormButton({
  //     buttonText: loading ? 'Saving' : 'Save',
  //     name: 'Submit',
  //     properties: { type: 'submit' },
  //   }),
  // ];
  //
  // const formInputs = [
  //   new SimpleFormInput({
  //     label: 'USAA Checking',
  //     name: Account.USAA_CHECKING,
  //   }),
  //   new SimpleFormInput({ label: 'USAA Savings', name: Account.USAA_SAVINGS }),
  //   new SimpleFormInput({ name: Account.CHASE_CC }),
  //   new SimpleFormInput({
  //     label: Account.LIGHTSTREAM,
  //     name: Account.LIGHTSTREAM,
  //   }),
  //   new SimpleFormInput({ label: Account.E_TORO, name: Account.E_TORO }),
  //   new SimpleFormInput({
  //     label: Account.LENDING_CLUB,
  //     name: Account.LENDING_CLUB,
  //   }),
  // ];

  // const handleSubmit = async (): Promise<void> => {
  //   setLoading(true);
  //   const formStateKeys = Object.keys(formState);
  //
  //   const postArray = [];
  //   for (const key of formStateKeys) {
  //     if (Number.isNaN(Number(formState[key]))) {
  //       throw new TypeError(`Invalid number for ${key}.`);
  //     }
  //
  //     postArray.push({
  //       accountName: key,
  //       currentValue: Number(formState[key]),
  //       recordedDate: Date.now(),
  //     });
  //   }
  //
  //   await fetch('/api/finance-records', {
  //     body: JSON.stringify(postArray),
  //     headers: JSON_HEADER,
  //     method: 'POST',
  //   });
  //   setLoading(false);
  // };

  return (
    <Container>
      <HeadTag title="Finance Update" />
      <div>Update Accounts</div>
      {/* <SimpleForm */}
      {/*  buttons={buttons} */}
      {/*  formProperties={{ className: commonStyles.Form }} */}
      {/*  formState={formState} */}
      {/*  inputs={formInputs} */}
      {/*  postSubmitFunction={handleSubmit} */}
      {/*  setFormState={setFormState} */}
      {/* /> */}
    </Container>
  );
}

export default Finance;
