import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';

import { FormInput } from './form-input';
import { InputType } from './types';

interface FormProperties<StateType> {
  cancelButtonFunction?: () => void;
  cancelButtonText?: string;
  cancelButtonProperties?: JSX.IntrinsicElements['button'];
  clearFormAfterSubmit?: boolean;
  fieldsetProperties?: JSX.IntrinsicElements['fieldset'];
  formProperties?: JSX.IntrinsicElements['form'];
  hideCancelButton?: boolean;
  hideSubmitButton?: boolean;
  inputObjects?: FormInput[];
  inputState: StateType;
  onChangeFunction?: (event: ChangeEvent) => unknown;
  postSubmitFunction?: (...arguments_: unknown[]) => unknown;
  submitButtonProperties?: JSX.IntrinsicElements['button'];
  setInputState: Dispatch<SetStateAction<StateType>>;
  submitButtonText?: string;
}

export function Form<StateType extends Record<string, unknown>>(
  formProperties: FormProperties<StateType>
): JSX.Element {
  const handleChange = (event: ChangeEvent): void => {
    let { value, name, type, files } = event.target as unknown as {
      files: File[];
      name: string;
      type: string;
      value: string | number | File;
    };

    if (type === 'number' && typeof value === 'string') {
      value = Number.parseFloat(value);
    }

    if (type === 'file') {
      [value] = files;
    }

    formProperties.setInputState({
      ...formProperties.inputState,
      [name]: value,
    });

    if (typeof formProperties.onChangeFunction !== 'undefined') {
      formProperties.onChangeFunction(event);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (typeof formProperties.postSubmitFunction !== 'undefined') {
      const blankState = Object.fromEntries(
        Object.entries(formProperties.inputState).map(([key]) => {
          return [key, ''];
        })
      ) as unknown as StateType;

      if (formProperties.clearFormAfterSubmit === true) {
        formProperties.setInputState(blankState);
      }

      formProperties.postSubmitFunction();
    }
  };

  const getInputElement = (formInput: FormInput): JSX.Element => {
    const value = formProperties.inputState[formInput.name] as
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

    switch (formInput.type) {
      case InputType.textarea: {
        return <textarea {...defaultProperties} />;
      }

      case InputType.select: {
        return (
          <select {...defaultProperties}>
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
        return <input type={formInput.type} {...defaultProperties} />;
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
        {formProperties.inputObjects?.map((formInput: FormInput) => {
          return (
            <div key={formInput.id} {...formInput.labelWrapperProperties}>
              {formInput.hideLabel ? (
                getInputElement(formInput)
              ) : (
                <label htmlFor={formInput.name} {...formInput.labelProperties}>
                  <span {...formInput.labelTextProperties}>
                    {formInput.label}
                  </span>
                  {getInputElement(formInput)}
                </label>
              )}
            </div>
          );
        })}
        {formProperties.hideSubmitButton !== true && (
          <button type="submit" {...formProperties.submitButtonProperties}>
            {formProperties.submitButtonText ?? 'Submit'}
          </button>
        )}
        {formProperties.cancelButtonFunction &&
          formProperties.hideCancelButton !== true && (
            <button type="button" {...formProperties.cancelButtonProperties}>
              {formProperties.cancelButtonText}
            </button>
          )}
      </fieldset>
    </form>
  );
}
