import { Dispatch, SetStateAction } from 'react';

import { ButtonRow } from '../button-row/button-row';
import { CharacterOption } from '../character-editor-layout/character-editor-layout-util';
import { ToggleButton } from '../toggle-button/toggle-button';
import styles from './control-pane.module.css';

type ControlPaneProperties = {
  currentOption: number | string;
  handleSelectOption: Dispatch<SetStateAction<string | number>>;
  options: CharacterOption[];
  title: string;
};

export function ControlPane(properties: ControlPaneProperties): JSX.Element {
  return (
    <div className={styles.ControlPane}>
      <h2 className={styles.Title}>
        {properties.title}{' '}
        <span className={styles.Metadata}>
          {properties.options.length} options
        </span>
      </h2>
      <ButtonRow>
        {properties.options.map(({ id, label, color, children }) => {
          return (
            <ToggleButton
              color={color}
              isSelected={properties.currentOption === id}
              key={id}
              label={label}
              delegated={{
                onClick(): void {
                  properties.handleSelectOption(id);
                },
              }}
            >
              <span>{children}</span>
            </ToggleButton>
          );
        })}
      </ButtonRow>
    </div>
  );
}
