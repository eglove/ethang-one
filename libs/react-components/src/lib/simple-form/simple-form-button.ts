import { toCapitalizedWords } from '@ethang/util-typescript';

type ButtonConfig = {
  buttonText?: string;
  name: string;
  properties?: JSX.IntrinsicElements['button'];
};

export const simpleFormButtons = (
  configs: ButtonConfig[]
): SimpleFormButton[] => {
  return configs.map(config => {
    return new SimpleFormButton(config);
  });
};

export class SimpleFormButton {
  public buttonText: string;
  public name: string;
  public properties?: JSX.IntrinsicElements['button'];

  constructor(config: ButtonConfig) {
    this.buttonText = config.buttonText ?? toCapitalizedWords(config.name);
    this.name = config.name;
    this.properties = config.properties;
  }
}
