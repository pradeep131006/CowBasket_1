import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  amount: Number,
  campaign: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaign"
  }
}, { timestamps: true });

export default mongoose.model("Donation", donationSchema);
