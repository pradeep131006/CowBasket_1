import express from "express";
import cors from "cors";

import campaignRoutes from "./routes/campaign.routes.js";
import donationRoutes from "./routes/donation.routes.js";
import adoptionRoutes from "./routes/adoption.routes.js";
import volunteerRoutes from "./routes/volunteer.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🐄 Cowbasket API is running");
});

app.use("/api/campaigns", campaignRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/adoptions", adoptionRoutes);
app.use("/api/volunteers", volunteerRoutes);

export default app;
