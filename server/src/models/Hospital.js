const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    placeId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    isGovernment: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: "",
    },
    locations: {
      type: [String],
      default: [],
    },
    location: {
      lat: Number,
      lng: Number,
    },
    doctors: [
      {
        name: String,
        specialization: String,
        availability: [String],
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Hospital", hospitalSchema);
