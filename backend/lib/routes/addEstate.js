const controller = require('../controllers/estateController');

module.exports = {
  path: '/estate/new',
  method: 'POST',
  handler: controller.addEstate,
};
