import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  console.log(req.session);
  res.render("mask");
});

export default router;
