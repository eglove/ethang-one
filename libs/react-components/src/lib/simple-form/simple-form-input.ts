import { toCapitalizedWords } from '@ethang/util-typescript';

import { InputType } from './types';

type SelectOption = {
  label: string;
  optionProperties: JSX.IntrinsicElements['option'];
};

type FormInputConfig = {
  hideLabel?: boolean;
  id?: string;
  inputProperties?: Record<string, unknown>;
  inputType?: InputType;
  name: string;
  label?: string;
  labelProperties?: JSX.IntrinsicElements['label'];
  labelTextProperties?: JSX.IntrinsicElements['span'];
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
  public labelProperties?: JSX.IntrinsicElements['label'];
  public labelTextProperties?: JSX.IntrinsicElements['span'];
  public inputProperties?: Record<string, unknown>;
  public inputType?: InputType;
  public name: string;
  public selectOptions?: SelectOption[];

  constructor(config: FormInputConfig) {
    this.hideLabel = config.hideLabel ?? false;
    this.id =
      // eslint-disable-next-line @typescript-eslint/dot-notation
      typeof config.inputProperties?.['id'] === 'string'
        ? // eslint-disable-next-line @typescript-eslint/dot-notation
          config.inputProperties['id']
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
