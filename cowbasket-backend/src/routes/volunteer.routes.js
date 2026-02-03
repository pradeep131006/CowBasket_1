import express from "express";

const router = express.Router();

// example test route
router.get("/", (req, res) => {
  res.json({ message: "Volunteer route working" });
});

export default router;
