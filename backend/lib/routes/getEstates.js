const controller = require('../controllers/estateController');

module.exports = {
  path: '/api/estate/all',
  method: 'GET',
  handler: controller.getAllEstates,
};
