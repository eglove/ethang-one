import { useMutation } from '@apollo/client';
import {
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { isValidUrl } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import styles from '../../../../../../styles/form.module.css';
import { tokenDataVariable } from '../../../page-wrapper/reactive-variables';
import { TO_READ_LINKS } from '../to-read-links/to-read-links-graphql';
import {
  ADD_READING_LINK,
  AddReadingLinkReturn,
} from './add-reading-link-graphql';

export function AddReadingLink(): JSX.Element {
  const [addReadingLink, { loading, error }] =
    useMutation<AddReadingLinkReturn>(ADD_READING_LINK, {
      refetchQueries: [TO_READ_LINKS],
    });
  const [formState, setFormState] = useState({
    Title: '',
    Url: '',
  });

  useEffect(() => {
    if (typeof error !== 'undefined') {
      toast.error(error.message);
    }
  }, [error]);

  const handleSubmit = async (): Promise<void> => {
    if (!isValidUrl(formState.Url)) {
      toast.error('Must be valid URL.');
      return;
    }

    await addReadingLink({
      variables: {
        email: tokenDataVariable().userEmail,
        title: formState.Title,
        url: formState.Url,
      },
    });
  };

  const inputs = [
    new SimpleFormInput({
      inputProperties: { required: true },
      name: 'Title',
    }),
    new SimpleFormInput({
      inputProperties: { required: true },
      label: 'URL',
      name: 'Url',
    }),
  ];

  const buttons = [
    new SimpleFormButton({
      buttonText: 'Save Link',
      name: 'Submit',
      properties: {
        type: 'submit',
      },
    }),
  ];

  return (
    <div className={styles['container']}>
      <SimpleForm
        buttons={buttons}
        fieldsetProperties={{ disabled: loading }}
        formProperties={{ className: styles.Form }}
        formState={formState}
        inputs={inputs}
        postSubmitFunction={handleSubmit}
        setFormState={setFormState}
      />
    </div>
  );
}

export default AddReadingLink;
