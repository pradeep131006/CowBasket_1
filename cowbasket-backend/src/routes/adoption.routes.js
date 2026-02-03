import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Adoption route working" });
});

export default router;
 