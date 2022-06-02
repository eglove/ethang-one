import { Button } from '@ethang/react-components';
import { websocketCommand, websocketEvent } from '@ethang/types';

import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../../../context/global/global-context';
import { GlobalActionEnum } from '../../../context/global/global-reducer';

interface CommandButtonProperties {
  buttonText: string;
  command: keyof typeof websocketCommand;
}

export function CommandButton({
  buttonText,
  command,
}: CommandButtonProperties): JSX.Element {
  const state = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const handleSendCommand = (): void => {
    state.socket.on(websocketEvent.shellMessage, (data: string) => {
      dispatch({
        payload: data,
        type: GlobalActionEnum.addMessage,
      });
    });

    dispatch({
      payload: websocketCommand[command],
      type: GlobalActionEnum.runCommand,
    });
  };

  return (
    <div>
      <Button
        buttonProperties={{ onClick: handleSendCommand }}
        size="medium"
        text={buttonText}
      />
    </div>
  );
}
