module.exports = {
  apps: [
    {
      env: {
        "PORT": 80,
      },
      name: 'graphql-gateway',
      script: './dist/apps/graphql-gateway/main.js'
    }
  ]
}
