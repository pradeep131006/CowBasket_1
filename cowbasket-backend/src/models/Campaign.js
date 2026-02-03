import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  title: String,
  titleEn: String,
  description: String,
  goal: Number,
  raised: { type: Number, default: 0 },
  donors: { type: Number, default: 0 },
  sevaId: String,
  image: String
}, { timestamps: true });

export default mongoose.model("Campaign", campaignSchema);
