import mongoose from "mongoose";

const menSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    trim: true,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image_url: { type: String, default: "" },
});

const MensRAnking = new mongoose.model("MenRanking", menSchema);

export default MensRAnking;
