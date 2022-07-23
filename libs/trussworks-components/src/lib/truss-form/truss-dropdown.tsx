import {
  Dropdown,
  ErrorMessage,
  FormGroup,
  Label,
} from '@trussworks/react-uswds';
import React, { ChangeEvent } from 'react';

type TrussDropdownProperties = {
  children: JSX.Element | JSX.Element[];
  errorMessage?: string;
  formGroupClassName?: string;
  isRequired?: boolean;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
};

export function TrussDropdown({
  children,
  errorMessage,
  formGroupClassName,
  label,
  name,
  onChange,
  isRequired,
  value,
}: TrussDropdownProperties): JSX.Element {
  return (
    <FormGroup
      className={formGroupClassName}
      error={typeof errorMessage !== 'undefined' && errorMessage !== ''}
    >
      <Label htmlFor={name}>{label}</Label>
      {typeof errorMessage !== 'undefined' && errorMessage !== '' && (
        <ErrorMessage id={`${name}-message`}>{errorMessage}</ErrorMessage>
      )}
      <Dropdown
        aria-required={isRequired}
        id={name}
        name={name}
        required={isRequired}
        value={value}
        onChange={onChange}
      >
        {children}
      </Dropdown>
    </FormGroup>
  );
}
