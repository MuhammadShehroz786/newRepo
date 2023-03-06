import mongoose from "mongoose";
import BookingModel from "../models/ReviewModel.js";
import Booking from "../models/ReviewModel.js";

const AddBooking = async (req, res, next) => {
  try {
    const { name, review, rate } = req.body;
    const data = await BookingModel.create({ name, review, rate });
    return res.status(201).json({ message: "Review added successfully", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getALLBookings = async (req, res) => {
  try {
    const data = await BookingModel.find();
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const deletedReview = await BookingModel.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    return res.json({ message: "Review deleted successfully", data: deletedReview });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { getALLBookings, AddBooking, deleteBooking };
