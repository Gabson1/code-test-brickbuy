// A controller handles incoming HTTP requests and sends a response back to the caller.
const Estates = require('../models/estateModel');

// getAllEstates sends a request to the /estate/all route to retrieve an array of estates
exports.getAllEstates = async () => {
  try {
    const estate = await Estates.find({}).exec();
    return { estates: estate };
  } catch (err) {
    return err;
  }
};

// addEstate sends a request to the /estate/new route to add a new estate to the DB
exports.addEstate = async (req) => {
  const { address, size } = req.payload.newEstateData;
  try {
    const estateData = { address, size };

    const newEstate = await Estates.create(estateData);
    return { message: 'Estate created successfully', estate: newEstate };
  } catch (err) {
    return err;
  }
};

// Usually I'd make a request to a service that handles my db stuff...
// A this is a very small task I just wrote everything in my controller.
