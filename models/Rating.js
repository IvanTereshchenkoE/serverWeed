import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;
