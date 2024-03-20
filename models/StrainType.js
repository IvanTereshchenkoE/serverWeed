import mongoose from "mongoose";

const strainTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StrainType = mongoose.model("StrainType", strainTypeSchema);

export default StrainType;
