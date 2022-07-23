import { ErrorMessage, Fieldset, Form } from '@trussworks/react-uswds';
import { OptionalFormProps } from '@trussworks/react-uswds/lib/components/forms/Form/Form';
import React, { FieldsetHTMLAttributes, FormEvent, ReactNode } from 'react';

type FieldsetProperties = {
  className?: string;
  legend?: ReactNode;
  legendStyle?: 'default' | 'large' | 'srOnly';
};

type TrussFormProperties = {
  children: ReactNode;
  errorMessage?: string;
  fieldSetProperties?: FieldsetProperties &
    FieldsetHTMLAttributes<HTMLFieldSetElement>;
  formProperties?: OptionalFormProps;
  isDisabled?: boolean;
  legend?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function TrussForm({
  onSubmit,
  formProperties,
  fieldSetProperties,
  errorMessage,
  children,
  isDisabled,
  legend,
}: TrussFormProperties): JSX.Element {
  return (
    <Form onSubmit={onSubmit} {...formProperties}>
      <Fieldset
        aria-disabled={isDisabled}
        disabled={isDisabled}
        legend={legend}
        legendStyle="large"
        {...fieldSetProperties}
      >
        {typeof errorMessage !== 'undefined' && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
        {children}
      </Fieldset>
    </Form>
  );
}
