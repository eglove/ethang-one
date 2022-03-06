/* eslint-disable @typescript-eslint/dot-notation */
import { toCapitalizedWords } from '@ethang/util-typescript';

import { InputType } from './types';

type SelectOption = {
  label: string;
  optionProperties: JSX.IntrinsicElements['option'];
};

type FormInputConfig = {
  hideLabel?: boolean;
  inputProperties?: Record<string, unknown>;
  label?: string;
  labelProperties?: JSX.IntrinsicElements['label'];
  labelTextProperties?: JSX.IntrinsicElements['span'];
  labelWrapperProperties?: JSX.IntrinsicElements['div'];
  selectOptions?: SelectOption[];
  type?: string;
};

export class FormInput {
  public hideLabel = false;
  public id?: string;
  public inputProperties?: Record<string, unknown>;
  public label: string;
  public labelProperties?: JSX.IntrinsicElements['label'];
  public labelTextProperties?: JSX.IntrinsicElements['span'];
  public labelWrapperProperties?: JSX.IntrinsicElements['div'];

  public name: string;
  public selectOptions?: SelectOption[];

  public type: string;

  constructor(name: string, config: FormInputConfig) {
    this.hideLabel = config.hideLabel ?? false;
    this.id =
      typeof config.inputProperties?.['id'] === 'string'
        ? config.inputProperties['id']
        : name;
    this.inputProperties = config.inputProperties;
    this.label = config.label ?? toCapitalizedWords(name);
    this.labelProperties = config.labelProperties;
    this.labelTextProperties = config.labelTextProperties;
    this.labelWrapperProperties = config.labelWrapperProperties;
    this.name = name;
    this.selectOptions = config.selectOptions;
    this.type = config.type ?? InputType.text;
  }
}
