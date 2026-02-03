import Campaign from "../models/campaign.js";


export const getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
};
