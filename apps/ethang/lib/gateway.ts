import {
  chocoUpgrade,
  clearDocker,
  commandSplitter,
  financeLinks,
  morningLinks,
  powershellModuleUpdate,
  ubuntuUpdate,
  WebsocketKey,
  windowsUpdate,
} from './commands';

export type WebsocketMessage = { id: string; message: string };

const runTerminal = (command: string): void => {
  window.open(`/terminal?command=${command}`, '_blank', 'height=400,width=600');
};

const sendCommand = (
  parameters: Array<{ type: string; message: string }>
): void => {
  const url = new URL(`${location.origin}/terminal`);

  for (const parameter of parameters) {
    url.searchParams.append(parameter.type, parameter.message);
  }

  window.open(url, '_blank', 'height=400,width=600');
};

export const gateway = (key: WebsocketKey): void => {
  switch (key) {
    case WebsocketKey.clearDocker: {
      runTerminal(clearDocker.join(commandSplitter));
      break;
    }

    case WebsocketKey.openLinks: {
      let linksToOpen = morningLinks;
      if (new Date().getDay() === 6) {
        linksToOpen = [...morningLinks, ...financeLinks];
      }

      for (const link of linksToOpen) {
        window.open(link, '_blank');
      }

      break;
    }

    case WebsocketKey.padRepo: {
      sendCommand([{ message: WebsocketKey.padRepo, type: 'script' }]);
      break;
    }

    case WebsocketKey.powershellModuleUpdate: {
      runTerminal(powershellModuleUpdate.join(commandSplitter));
      break;
    }

    case WebsocketKey.ubuntuUpdate: {
      runTerminal(ubuntuUpdate.join(commandSplitter));
      break;
    }

    case WebsocketKey.updateSoftware: {
      runTerminal(chocoUpgrade.join(commandSplitter));
      break;
    }

    case WebsocketKey.windowsUpdate: {
      runTerminal(windowsUpdate.join(commandSplitter));
      break;
    }

    default: {
      throw new Error(`Key must be of type WebsocketKey.`);
    }
  }
};
