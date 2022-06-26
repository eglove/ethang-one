import {
  InputType,
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import formStyles from '../../../../styles/form.module.css';
import { RailsBlog } from './blogs-layout';

interface BlogFormProperties {
  httpMethod?: string;
  initialState?: {
    Body: string;
    Title: string;
  };
  postUrl: string;
}

export function BlogForm({
  httpMethod = 'POST',
  postUrl,
  initialState = { Body: '', Title: '' },
}: BlogFormProperties): JSX.Element {
  const router = useRouter();

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    const response = await fetch(postUrl, {
      body: JSON.stringify({
        body: formState.Body,
        title: formState.Title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: httpMethod,
    });
    const data = (await response.json()) as RailsBlog;

    await router.push(`/blog/${data.id}`);
  };

  const inputs = [
    new SimpleFormInput({ inputProperties: { required: true }, name: 'Title' }),
    new SimpleFormInput({
      inputProperties: { required: true },
      inputType: InputType.textarea,
      name: 'Body',
    }),
  ];

  const buttons = [
    new SimpleFormButton({ name: 'Submit', properties: { type: 'submit' } }),
  ];

  return (
    <SimpleForm
      buttons={buttons}
      formState={formState}
      inputs={inputs}
      setFormState={setFormState}
      formProperties={{
        className: formStyles.Form,
        onSubmit: handleSubmit,
      }}
    />
  );
}
