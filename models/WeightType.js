import mongoose from "mongoose";

const WeightTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const WeightType = mongoose.model("WeightType", WeightTypeSchema);

export default WeightType;
