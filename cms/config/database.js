module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 13306),
        database: env('DATABASE_NAME', 'cms'),
        username: env('DATABASE_USERNAME', 'mysql'),
        password: env('DATABASE_PASSWORD', 'mysql'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
