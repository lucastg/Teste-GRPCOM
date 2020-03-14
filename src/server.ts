import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

// import IndexRouter from "./routes/IndexRouter"
import ApiRouter from "./routes/ApiRouter"

const app = express();

// https://github.com/expressjs/morgan#dev
// :method :url :status :response-time ms - :res[content-length]
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", ApiRouter);

if (typeof jest === "undefined") {
  app.listen(3000, () => {
    console.log(Date(), "Functions server is up and running");
  });
}

export default app;
