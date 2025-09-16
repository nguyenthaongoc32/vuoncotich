import mongoose from "mongoose";

import Bracelet from "../model/braceletModel.js";


export const getBracelets = async (req, res) => {
  try {
    const bracelets = await Bracelet.find();
    res.status(200).json(bracelets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getBracelet = async (req, res) => {
  try {
    const bracelet = await Bracelet.findById(req.params.id);
    if (!bracelet) {
      return res.status(404).json({ message: "Bracelet not found" });
    }
    res.status(200).json(bracelet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
