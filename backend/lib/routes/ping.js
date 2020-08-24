const handler = (request, h) => {
  console.log('ping received request from ip address %s', request.info.remoteAddress);
  return h.response('pong').code(200);
};

module.exports = {
  path: '/api/ping',
  method: 'GET',
  handler,
};
