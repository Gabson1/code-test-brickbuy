const controller = require('../controllers/estateController');

module.exports = {
  path: '/api/estate/new',
  method: 'POST',
  handler: controller.addEstate,
};
