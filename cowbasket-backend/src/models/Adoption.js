import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  cowName: String,
  monthlySupport: Number,
  status: { type: String, default: "Available" },
  adoptedBy: String
});

export default mongoose.model("Adoption", adoptionSchema);
