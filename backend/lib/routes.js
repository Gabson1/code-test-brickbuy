const pingRoute = require('./routes/ping');
const getEstatesRoute = require('./routes/getEstates');
const addEstateRoute = require('./routes/addEstate');

module.exports = [
  pingRoute,
  getEstatesRoute,
  addEstateRoute,
];
