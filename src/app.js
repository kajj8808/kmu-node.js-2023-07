import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = 8080;

const app = express();
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");
app.set("");

app.get("/", (_, res) => {
  res.render("index");
});

app.get("/dust", async (_, res) => {
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

const handleListen = () =>
  console.log(`Server is Ready :http://localhost:${PORT}`);
app.listen(PORT, handleListen);
