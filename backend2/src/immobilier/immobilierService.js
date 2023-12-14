const Realty = require('./immobilierModel');
const mongoose = require('mongoose');
const ajouterRealtyServiceFn = async (realtyData) => {
  try {
    const realty = new Realty(realtyData);
    const savedRealty = await realty.save();

    const response = {
      success: true,
      message: 'Realty added successfully',
      realty: {
        address: savedRealty.address,
        price: savedRealty.price,
        bedrooms: savedRealty.bedrooms,
        bathrooms: savedRealty.bathrooms,
        imageUrl: savedRealty.imageUrl,
      }
    };

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

const updateRealtyServiceFn = async (realtyId, updatedData) => {
  try {
    // Ensure realtyId is a valid ObjectId before attempting to update
    if (!mongoose.Types.ObjectId.isValid(realtyId)) {
      throw new Error('Invalid realtyId format');
    }

    const updatedRealty = await Realty.findByIdAndUpdate(
      realtyId,
      { $set: updatedData },
      { new: true }
    );

    if (!updatedRealty) {
      throw new Error('Realty not found');
    }

    return updatedRealty;
  } catch (error) {
    throw error; // Propagate the error to the controller
  }
};


const deleteRealtyServiceFn = async (realtyId) => {
  try {
    const deletedRealty = await Realty.findByIdAndDelete(realtyId);

    if (!deletedRealty) {
      throw new Error('Realty not found');
    }

    return {
      success: true,
      message: 'Realty deleted successfully',
      realty: deletedRealty,
    };
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

const getAllRealtiesServiceFn = async () => {
  try {
    const allRealties = await Realty.find();
    return allRealties;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  ajouterRealtyServiceFn,
  updateRealtyServiceFn,
  deleteRealtyServiceFn,
  getAllRealtiesServiceFn,
};
