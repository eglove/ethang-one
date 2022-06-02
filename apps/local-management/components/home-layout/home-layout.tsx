import { Container } from '@ethang/react-components';
import { websocketCommand } from '@ethang/types';
import { camelCaseToWordString } from '@ethang/util-typescript';

import { CommandViewLayout } from '../commands/command-view/command-view-layout';
import { CommandButton } from '../commands/update-windows/command-button';
import styles from './home-layout.module.css';

export function HomeLayout(): JSX.Element {
  const commands = Object.keys(websocketCommand);

  return (
    <Container containerProperties={{ className: styles.HomeContainer }}>
      <div>
        {commands.map((command: keyof typeof websocketCommand) => {
          return (
            <CommandButton
              buttonText={camelCaseToWordString(command)}
              command={command}
              key={command}
            />
          );
        })}
      </div>
      <CommandViewLayout />
    </Container>
  );
}
