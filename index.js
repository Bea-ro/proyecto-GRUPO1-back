const express = require("express");
const { connectDB } = require("./src/utils/connectDB");
require("dotenv").config();
const mainRouter = require("./src/api/routes/index.routes");
const { configCloudinary } = require("./src/api/middlewares/uploadImg");

const cors = require("cors");
const rateLimit = require("express-rate-limit");

const server = express(); //podría ser tb const server = express()
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

configCloudinary();
connectDB();

server.use(cors());

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 50,
  standardHeaders: false,
  legacyHeaders: false,
});

server.use(limiter);

server.use((req, res, next) => {
  //define métodos y tipo de contenidos aceptados como requests
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-type");
  next();
});
server.disable("x-powered-by"); //Quita de los header info con que está hecha la api (Express)

server.use("/api", mainRouter);

server.use("*", (req, res, next) => {
  res.status(404).json({ data: "Not found" });
});

server.use((error, req, res, next) => {
  res.status(500).json({ data: "Internal Server Error" });
});

server.listen(3001, () => {
  console.log(
    `la aplicación está corriendo en el puerto http:localhost:${process.env.PORT}`
  );
});
