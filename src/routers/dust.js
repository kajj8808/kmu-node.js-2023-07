import express from "express";
const router = express.Router();

router.get("/dust", async (_, res) => {
  const params = {
    serviceKey: process.env.API_KEY ?? "",
    returnType: "json",
    numOfRows: 10,
    pageNo: 1,
    sidoName: "대구",
    ver: "1.0",
  };

  const query = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  const url =
    "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?" +
    query;

  const json = await (await fetch(url)).json();
  const {
    response: { body },
  } = json;

  res.render("dust", { context: body.items });
});

export default router;
