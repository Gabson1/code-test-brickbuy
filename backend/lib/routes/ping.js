const handler = (request, h) => {
  console.log('Received ping request from ip address %s', request.info.remoteAddress);
  return h.response('everything ok').code(200);
};

module.exports = {
  path: '/ping',
  method: 'GET',
  handler,
};
