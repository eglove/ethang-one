import { toCapitalizedWords } from '@ethang/util-typescript';
import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
} from 'react';

import { InputType } from './types';

export type SelectOption = {
  label: string;
  optionProperties?: OptionHTMLAttributes<HTMLOptionElement>;
};

type FormInputConfig = {
  hideLabel?: boolean;
  id?: string;
  inputProperties?: InputHTMLAttributes<HTMLInputElement>;
  inputType?: InputType;
  name: string;
  label?: string;
  labelProperties?: LabelHTMLAttributes<HTMLLabelElement>;
  labelTextProperties?: HTMLAttributes<HTMLSpanElement>;
  selectOptions?: SelectOption[];
};

export const simpleFormInputs = (
  configs: FormInputConfig[]
): SimpleFormInput[] => {
  return configs.map(config => {
    return new SimpleFormInput(config);
  });
};

export class SimpleFormInput {
  public hideLabel: boolean;
  public id?: string;
  public label: string;
  public labelProperties?: LabelHTMLAttributes<HTMLLabelElement>;
  public labelTextProperties?: HTMLAttributes<HTMLSpanElement>;
  public inputProperties?: InputHTMLAttributes<HTMLInputElement>;
  public inputType?: InputType;
  public name: string;
  public selectOptions?: SelectOption[];

  constructor(config: FormInputConfig) {
    this.hideLabel = config.hideLabel ?? false;
    this.id =
      typeof config.inputProperties?.['id'] === 'string'
        ? config.inputProperties['id']
        : config.name;
    this.label = config.label ?? toCapitalizedWords(config.name);
    this.labelProperties = config.labelProperties;
    this.labelTextProperties = config.labelTextProperties;
    this.inputProperties = config.inputProperties;
    this.inputType = config.inputType ?? InputType.text;
    this.name = config.name;
    this.selectOptions = config.selectOptions;
  }
}
