import express from "express";
import tensorflow from "@tensorflow/tfjs";

const router = express.Router();

router.get("/regression1", function (req, res) {
  res.render("tfjs/regression1");
});
router.get("/regression2", function (req, res) {
  res.render("tfjs/regression2");
});
router.post("/regression2", async function (req, res) {
  let model = await tensorflow.loadLayersModel(
    "https://raw.githubusercontent.com/oralcoder/2023_nodejs/main/reg_model.json"
  );
  model.summary();
  const data = req.body.data;
  let testX = data.split(",").map(function (x) {
    return parseInt(x);
  });
  testX = tensorflow.tensor(testX, [testX.length]);
  const preds = model.predict(testX).arraySync();
  res.send(preds);
});

//inference #1
router.get("/inference1", async function (req, res) {
  res.render("tfjs/inference1");
});
//inference #2
router.get("/inference2", async function (req, res) {
  res.render("tfjs/inference2");
});
//inference #3
router.get("/inference3", async function (req, res) {
  res.render("tfjs/inference3");
});
//inference #4
router.get("/inference4", async function (req, res) {
  res.render("tfjs/inference4");
});

// transfer #1
router.get("/transfer1", async function (req, res) {
  res.render("tfjs/transfer1");
});

// transfer #2
router.get("/transfer2", async function (req, res) {
  res.render("tfjs/transfer2");
});

export default router;
