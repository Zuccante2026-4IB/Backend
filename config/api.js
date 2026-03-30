module.exports = {
  rest: {
    prefix: '/api',
  },
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    apolloServer: {
      DEFAULT_PLUGINS: [
        'usageReporting',
        'cacheControl',
        'apolloserver:supportsSubscriptions',
      ],
    },
  },
};
