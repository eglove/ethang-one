import { nrwlWorker } from '@ethang/nrwl-utils';
import { Pnpm } from '@ethang/util-cli';

import { startCli } from '../../start-cli';
import { getChoice, stringArrayToChoices } from '../../util/commands';

export const addPlugin = async (): Promise<void> => {
  const nrwl = await nrwlWorker();

  const coreCommunity = {
    community: 'Community Plugins',
    core: 'Core Plugins',
  };

  const pluginCategory = await getChoice({
    choices: coreCommunity,
    message: 'Choose a Category',
  });

  let pluginChoices: string[] = [];
  if (pluginCategory === coreCommunity.community) {
    const communityPlugins = await nrwl.communityPlugins();
    pluginChoices = communityPlugins.map(plugin => {
      return plugin.name;
    });
  } else if (pluginCategory === coreCommunity.core) {
    pluginChoices = nrwl.corePlugins().map(plugin => {
      return plugin.name;
    });
  }

  pluginChoices.push('Go Back');

  const pluginChoice = await getChoice({
    choices: stringArrayToChoices(pluginChoices),
    message: 'Choose a Plugin',
  });

  await (pluginChoice === 'Go Back'
    ? addPlugin()
    : Pnpm.dependencyCommand({
        callbacks: {
          onCode: startCli,
        },
        dependencies: pluginChoice,
        type: 'install',
      }));
};
