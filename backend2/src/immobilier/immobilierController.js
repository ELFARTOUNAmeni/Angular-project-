const immobilierservice = require('./immobilierService');
const mongoose = require('mongoose');
const ajouterRealtyControllerFn = async (req, res) => {
  try {
    const { address, price, bedrooms, bathrooms, imageUrl } = req.body;
    const realtyData = { address, price, bedrooms, bathrooms, imageUrl };
    const savedRealty = await immobilierservice.ajouterRealtyServiceFn(realtyData);
    res.status(201).json(savedRealty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const updateRealtyControllerFn = async (req, res) => {
  try {
    const realtyId = req.params.id;

    // Check if realtyId is a valid ObjectId before making the update request
    if (!mongoose.Types.ObjectId.isValid(realtyId)) {
      return res.status(400).json({ success: false, message: 'Invalid realtyId format' });
    }

    const updatedData = req.body;
    const updatedRealty = await immobilierservice.updateRealtyServiceFn(realtyId, updatedData);
    res.status(200).json(updatedRealty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};



const deleteRealtyControllerFn = async (req, res) => {
  try {
    const realtyId = req.params.id;
    const deletedRealty = await immobilierservice.deleteRealtyServiceFn(realtyId);
    res.status(200).json(deletedRealty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const getAllRealtiesControllerFn = async (req, res) => {
  try {
    const realties = await immobilierservice.getAllRealtiesServiceFn();
    res.status(200).json(realties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = {
  ajouterRealtyControllerFn,
  updateRealtyControllerFn,
  deleteRealtyControllerFn,
  getAllRealtiesControllerFn
};
