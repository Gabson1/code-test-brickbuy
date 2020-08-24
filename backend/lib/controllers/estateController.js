const Estates = require('../models/estateModel');

exports.getAllEstates = async (req, h) => {
  try {
    const estate = await Estates.find({}).exec();
    return { estates: estate };
  } catch (err) {
    return err;
  }
};

exports.addEstate = async (req, h) => {
  const estateData = {
    address: req.payload.address,
    size: req.payload.size,
  };

  console.log('.----------------------------->', estateData);
  try {
    const newEstate = await Estates.create(estateData);
    return { message: 'Estate created successfully', estate: newEstate };
  } catch (err) {
    return err;
  }
}