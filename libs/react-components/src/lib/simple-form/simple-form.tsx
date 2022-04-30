import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { SimpleFormButton } from './simple-form-button';
import { SimpleFormInput } from './simple-form-input';
import { InputType } from './types';

interface FormProperties<StateType> {
  buttons?: SimpleFormButton[];
  clearFormAfterSubmit?: boolean;
  fieldsetProperties?: JSX.IntrinsicElements['fieldset'];
  formProperties?: JSX.IntrinsicElements['form'];
  formState: StateType;
  inputs?: SimpleFormInput[];
  onChangeFunction?: (event: ChangeEvent) => unknown;
  postSubmitFunction?: (...arguments_: unknown[]) => unknown;
  setFormState: Dispatch<SetStateAction<StateType>>;
}

export function SimpleForm<StateType extends Record<string, unknown>>(
  formProperties: FormProperties<StateType>
): JSX.Element {
  const [reversedButtons, setReversedButtons] = useState<SimpleFormButton[]>();

  useEffect(() => {
    if (Array.isArray(formProperties?.buttons)) {
      setReversedButtons([...formProperties.buttons].reverse());
    }
  }, [formProperties.buttons]);

  const handleChange = (event: ChangeEvent): void => {
    let { value, name, type, files } = event.target as unknown as {
      files: File[];
      name: string;
      type: string;
      value: string | number | File;
    };

    if (type === 'number' && typeof value === 'string') {
      value = Number.parseFloat(value.replaceAll(',', ''));
    }

    if (type === 'file') {
      [value] = files;
    }

    formProperties.setFormState(formState => {
      return {
        ...formState,
        [name]: value,
      };
    });

    if (typeof formProperties.onChangeFunction !== 'undefined') {
      formProperties.onChangeFunction(event);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (formProperties.clearFormAfterSubmit === true) {
      const blankState = Object.fromEntries(
        Object.entries(formProperties.formState).map(([key]) => {
          return [key, ''];
        })
      ) as unknown as StateType;

      formProperties.setFormState(blankState);
    }

    if (typeof formProperties.postSubmitFunction !== 'undefined') {
      formProperties.postSubmitFunction();
    }
  };

  const getInputElement = (formInput: SimpleFormInput): JSX.Element => {
    const value = formProperties.formState[formInput.name] as
      | string
      | number
      | readonly string[]
      | undefined;

    const defaultProperties = {
      id: formInput.id,
      name: formInput.name,
      onChange: handleChange,
      value,
      ...formInput.inputProperties,
    };

    switch (formInput.inputType) {
      case InputType.textarea: {
        return (
          <textarea
            {...(defaultProperties as unknown as JSX.IntrinsicElements['textarea'])}
          />
        );
      }

      case InputType.select: {
        return (
          <select
            {...(defaultProperties as unknown as JSX.IntrinsicElements['select'])}
          >
            {formInput.selectOptions?.map(selectOption => {
              return (
                <option
                  key={selectOption.label}
                  {...selectOption.optionProperties}
                >
                  {selectOption.label}
                </option>
              );
            })}
          </select>
        );
      }

      default: {
        return (
          <input
            type={formInput.inputType}
            {...(defaultProperties as unknown as JSX.IntrinsicElements['input'])}
          />
        );
      }
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      {...formProperties.formProperties}
    >
      <fieldset {...formProperties.fieldsetProperties}>
        {formProperties.inputs?.map((formInput: SimpleFormInput) => {
          return formInput.hideLabel ? (
            getInputElement(formInput)
          ) : (
            <label
              htmlFor={formInput.name}
              key={formInput.name}
              {...formInput.labelProperties}
            >
              <span {...formInput.labelTextProperties}>{formInput.label}</span>
              {getInputElement(formInput)}
            </label>
          );
        })}
        {reversedButtons?.map(button => {
          return (
            <button key={button.name} type="button" {...button.properties}>
              {button.buttonText}
            </button>
          );
        })}
      </fieldset>
    </form>
  );
}
