import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { WebsocketMessage } from '../../lib/gateway';
import { SocketContext } from '../../store/socket-store';
import styles from './terminal-layout.module.css';

export const TerminalLayout = observer((): JSX.Element => {
  const { query } = useRouter();
  const socketStore = useContext(SocketContext);

  const [terminalMessages, setTerminalMessages] = useState<WebsocketMessage[]>(
    []
  );

  useEffect(() => {
    if (socketStore.socket) {
      socketStore.socket.on('terminal', (message: WebsocketMessage) => {
        setTerminalMessages(terminalMessages_ => {
          return [...new Set([...terminalMessages_, message])];
        });
      });

      if (typeof query.command === 'string') {
        socketStore.socket.emit('terminal', query.command);
      }

      if (typeof query.script === 'string') {
        socketStore.socket.emit('script', query.script);
      }
    }
  }, [query.command, query.script, socketStore.socket]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [terminalMessages.length]);

  return (
    <div className={styles.TerminalContainer}>
      {terminalMessages.map(message => {
        return <div key={message.id}>{message.message}</div>;
      })}
    </div>
  );
});
