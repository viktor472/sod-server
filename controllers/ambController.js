const amb = require("../models/Ambmodel");

const getAllAmbs = async (req, res) => {
  try {
    res.json(await amb.find());
  } catch (error) {
    console.log({ message: error });
  }
};

const getAmb = async (req, res) => {
  try {
    res.json(await amb.findById());
  } catch (error) {
    console.log({ message: error });
  }
};

const postAmb = async (req, res) => {
  try {
    const createAmb = new amb({
      regnumber: req.body.regnumber,
    });
    res.json(await createAmb.save());
  } catch (error) {
    console.log({ message: error });
  }
};

const deleteAmb = async (req, res) => {
  try {
    res.json(await amb.deleteOne({ _id: req.params.ambId }));
  } catch (error) {
    res.json({ message: error });
  }
};

const updateAmb = async (req, res) => {
  try {
    res.json(
      await amb.updateOne(
        { _id: req.params.ambId },
        {
          $set: {
            ambnumber: req.body.ambnumber,
            regnumber: req.body.regnumber,
          },
        }
      )
    );
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getAllAmbs,
  postAmb,
  getAmb,
  deleteAmb,
  updateAmb,
};
