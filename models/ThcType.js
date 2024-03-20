import mongoose from "mongoose";

const ThcTypeSchema = new mongoose.Schema(
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

const ThcType = mongoose.model("ThcType", ThcTypeSchema);

export default ThcType;
