const Hapi = require('@hapi/hapi');
const laabr = require('laabr'); // Event logging
const dbConnect = require('./db');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 4000,
    host: '0.0.0.0',
    routes: {
      cors: { origin: ['*'] }, // Enable cors for all routes
    },
  });

  await server.register({
    plugin: laabr,
    options: {},
  });

  server.route(routes);

  await dbConnect('pleaseInsertMongoUriHere');

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
