const CardSchema = require("../models/card.model");
const { cardsData } = require("../data/CardsData");

const getAllCardsData = async (req, res) => {
  try {
    const topUsers = await CardSchema.find()
      .populate({ path: "status", select: "_id value" })
      .populate({ path: "profile", select: "_id value" });

    if (topUsers) return res.status(200).json({ success: true, topUsers });
  } catch (err) {
    return res.status(400).json({ message: "Failed to add user" });
  }
};

const addNewCardsData = async (req, res) => {
  try {
    const { profile, status, notes, rate, clientName } = req.body;
    if (!profile || !status || !notes || !rate || !clientName) {
      return res.status(400).json({ message: "fill all fields" });
    }

    const addNewCard = new CardSchema({
      profile,
      status,
      notes,
      rate,
      clientName,
    });
    await addNewCard.save();
    if (addNewCard) {
      const topUsers = await CardSchema.find({ _id: addNewCard.id })
        .populate({ path: "status", select: "_id value" })
        .populate({ path: "profile", select: "_id value" });
      return res.status(200).json({ success: true, addNewCard: topUsers });
    }
  } catch (err) {
    return res.status(400).json({ message: "Failed to add user" });
  }
};
const updateCardsData = async (req, res) => {
  try {
    const { id, profile, status, notes, rate, clientName } = req.body;
    if (!id) {
      return res.status(400).json({ message: "fill all fields" });
    }
    const updatedData = {};
    if (profile) {
      updatedData.profile = profile;
    }
    if (status) {
      updatedData.status = status;
    }
    if (notes) {
      updatedData.notes = notes;
    }
    if (rate) {
      updatedData.rate = rate;
    }
    if (clientName) {
      updatedData.clientName = clientName;
    }

    const updatedCard = await CardSchema.findByIdAndUpdate(
      id,
      { ...updatedData },
      { new: true, runValidators: true }
    );
    if (!updatedCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    const topUsers = await CardSchema.find({ _id: updatedCard.id })
      .populate({ path: "status", select: "_id value" })
      .populate({ path: "profile", select: "_id value" });
    return res.status(200).json({ success: true, updatedCard: topUsers });
  } catch (err) {
    return res.status(400).json({ message: "something is wrong" });
  }
};

module.exports = { getAllCardsData, addNewCardsData, updateCardsData };
