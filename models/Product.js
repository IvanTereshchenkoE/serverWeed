import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    img: [
      {
        type: String,
        required: true,
      },
    ],
    strainType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StrainType",
      required: true,
    },
    thcTy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ThcType",
      default: null, // Значение по умолчанию
    },
    weightType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WeightType",
      default: null, // Значение по умолчанию
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
        default: null, // Значение по умолчанию
      },
    ],
    stock: {
      type: String,
      required: true,
      default: null, // Значение по умолчанию
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
