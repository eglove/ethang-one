import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';

type HandleInputChangeProperties<StateType> = {
  event: ChangeEvent;
  onChange?: (event: ChangeEvent) => void;
  setFormState: Dispatch<SetStateAction<StateType>>;
};

export const handleInputChange = <StateType>(
  properties: HandleInputChangeProperties<StateType>
): void => {
  const eventTarget = properties.event.target as unknown as {
    checked?: boolean;
    files: File[];
    name: string;
    type: string;
    value: string | boolean | number | File;
  };

  let { value } = eventTarget;
  const { checked, name, type, files } = eventTarget;

  if (type === 'checkbox') {
    value = checked ?? false;
  }

  if (type === 'number' && typeof value === 'string') {
    value = Number.parseFloat(value.replaceAll(',', ''));
  }

  if (type === 'file') {
    [value] = files;
  }

  properties.setFormState(formState_ => {
    return {
      ...formState_,
      [name]: value,
    };
  });

  properties?.onChange?.(properties.event);
};

export type UseFormProperties = {
  formActionAfterSubmit?: 'clear' | 'reset';
  onChange?: (event: ChangeEvent) => unknown;
  onError?: (error: unknown) => unknown;
  onSubmit?: (...arguments_: unknown[]) => unknown;
};

type FieldError<StateType> =
  | Record<keyof StateType, string[] | undefined>
  | undefined;

export type UseFormReturn<StateType> = {
  clearFieldErrors: () => void;
  clearForm: () => void;
  fieldErrors: FieldError<StateType>;
  formError: string | undefined;
  formState: StateType;
  handleInputChange: (event: ChangeEvent) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
  setFieldErrors: Dispatch<SetStateAction<FieldError<StateType>>>;
  setFormError: Dispatch<SetStateAction<string | undefined>>;
  setFormState: Dispatch<SetStateAction<StateType>>;
};

export const useForm = <StateType>(
  initialState: StateType,
  properties?: UseFormProperties
): UseFormReturn<StateType> => {
  const [formState, setFormState] = useState(initialState);
  const [formError, setFormError] = useState<string>();
  const [fieldErrors, setFieldErrors] =
    useState<Record<keyof StateType, string[] | undefined>>();

  const clearFieldErrors = (): void => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    setFieldErrors(undefined);
  };

  const handleChange = (event: ChangeEvent): void => {
    handleInputChange({
      event,
      onChange: properties?.onChange,
      setFormState,
    });
  };

  const clearForm = (): void => {
    const blankState = Object.fromEntries(
      Object.entries(formState).map(([key]) => {
        return [key, undefined];
      })
    ) as unknown as StateType;

    setFormState(blankState);
  };

  const resetForm = (): void => {
    setFormState(initialState);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    if (properties?.formActionAfterSubmit === 'clear') {
      clearForm();
    } else if (properties?.formActionAfterSubmit === 'reset') {
      resetForm();
    }

    if (typeof properties?.onSubmit !== 'undefined') {
      try {
        properties.onSubmit();
        clearFieldErrors();
        setFormError('');
      } catch (error: unknown) {
        properties?.onError?.(error);

        if (error instanceof Error) {
          setFormError(error.message);
        }
      }
    }
  };

  return {
    clearFieldErrors,
    clearForm,
    fieldErrors,
    formError,
    formState,
    handleInputChange: handleChange,
    handleSubmit,
    resetForm,
    setFieldErrors,
    setFormError,
    setFormState,
  };
};
