const plugins = {
  cypress: '@nrwl/cypress',
  nest: '@nrwl/nest',
  next: '@nrwl/next',
  node: '@nrwl/node',
};

export const NEW_APP_OPTIONS = ['application', 'library'];

export const projectPlugins: Record<string, string> = {
  'car-value': plugins.nest,
  'ethang-cli': plugins.node,
  'graphql-gateway': plugins.nest,
  website: plugins.next,
  'website-e2e': plugins.cypress,
};
