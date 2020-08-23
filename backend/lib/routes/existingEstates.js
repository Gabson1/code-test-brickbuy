/*
const data = [
  {
    id: 1,
    address: 'someRandomAddress',
    size: 69,
  },
  {
    id: 2,
    address: 'someOtherAddress',
    size: 96,
  },
];
*/

const data = {
  id: 1,
  address: 'someAddress',
  size: 420,
};

const handler = (request, h) => {
  console.log('Received fetch request from ip address %s', request.info.remoteAddress);
  return h.response(data).code(201);
};

module.exports = {
  path: '/estate/existing',
  method: 'GET',
  config: { handler },
};
