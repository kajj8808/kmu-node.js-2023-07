import express from "express";
import dotenv from "dotenv";
import IndedRouter from "./routers/index";
import DustRouter from "./routers/dust";

dotenv.config();

const PORT = 8080;

const app = express();
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.get("/", IndedRouter);

app.get("/dust", DustRouter);

const handleListen = () =>
  console.log(`Server is Ready :http://localhost:${PORT}`);
app.listen(PORT, handleListen);
