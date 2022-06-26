import {
  InputType,
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { useSWRConfig } from 'swr';

import formStyles from '../../../../styles/form.module.css';
import { API_ROOT } from '../../pages/_app';

interface CommentFormProperties {
  blogId: number;
  httpMethod?: string;
  initialState?: {
    Body: string;
    Commenter: string;
  };
  postUrl: string;
}

export type RailsComment = {
  body: string;
  commenter: string;
  created_at: string;
  id: number;
  updated_at: string;
};

export function CommentForm({
  blogId,
  httpMethod = 'POST',
  postUrl,
  initialState = { Body: '', Commenter: '' },
}: CommentFormProperties): JSX.Element {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    const response = await fetch(postUrl, {
      body: JSON.stringify({
        blog_id: blogId,
        body: formState.Body,
        commenter: formState.Commenter,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: httpMethod,
    });

    setFormState({
      Body: '',
      Commenter: '',
    });

    await response.json();
    await mutate(`${API_ROOT}/blogs/${String(blogId)}/comments`);
  };

  const inputs = [
    new SimpleFormInput({
      inputProperties: { required: true },
      label: 'Username',
      name: 'Commenter',
    }),
    new SimpleFormInput({
      inputProperties: { required: true },
      inputType: InputType.textarea,
      label: 'Comment',
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
