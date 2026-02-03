import Donation from "../models/donation.js";
import Campaign from "../models/campaign.js";

export const createDonation = async (req, res) => {
  const { name, email, phone, amount, campaignId } = req.body;

  const donation = await Donation.create({
    name, email, phone, amount, campaign: campaignId
  });

  await Campaign.findByIdAndUpdate(campaignId, {
    $inc: { raised: amount, donors: 1 }
  });

  res.status(201).json(donation);
};
