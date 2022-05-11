import { ChangeEvent, SelectHTMLAttributes, useState } from 'react';

import { Icon } from '../icon-component/icon';
import { SelectOption } from '../simple-form/simple-form-input';
import styles from './select.module.css';

interface SelectProperties {
  selectOptions?: SelectOption[];
  selectProperties?: SelectHTMLAttributes<HTMLSelectElement>;
}

export function Select({
  selectOptions,
  selectProperties,
}: SelectProperties): JSX.Element {
  const [displayValue, setDisplayValue] = useState(selectProperties?.value);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    if (typeof selectProperties?.onChange !== 'undefined') {
      selectProperties?.onChange(event);
    }

    setDisplayValue(event.target.value);
  };

  return (
    <div className={styles.SelectContainer}>
      <select
        className={styles.Select}
        title={selectProperties?.title ?? 'Select'}
        {...selectProperties}
        onChange={handleChange}
      >
        {selectOptions?.map(selectOption => {
          return (
            <option key={selectOption.label} {...selectOption.optionProperties}>
              {selectOption.label}
            </option>
          );
        })}
      </select>
      <div className={styles.PresentationalSelect}>
        {displayValue} <Icon id="chevron-down" size={24} />
      </div>
    </div>
  );
}
