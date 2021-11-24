import express from "express";
import "express-async-errors";
import { errorMidleware } from "./middlewares/errors";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(router);

app.use(express.json());

app.use(errorMidleware);

app.use(cors);

app.listen(3333, () => console.log("App is running"));
