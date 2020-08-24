const controller = require('../controllers/estateController');

module.exports = {
  path: '/estate/all',
  method: 'GET',
  handler: controller.getAllEstates,
};
