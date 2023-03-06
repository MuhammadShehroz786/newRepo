import mongoose from "mongoose";

const Reviews = new mongoose.Schema(
  {
    name: { type: String },
    review: { type: String },
    rate: { type: Number ,
    default: 5
    },
    date: {
        type: Date,
        default: Date.now
    },
  }
);

export default mongoose.model("Reviews", Reviews);
