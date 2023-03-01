import express, { json } from "express";
import cors from "cors";
import clientRouter from "./routers/client.routes";

const app = express();
app.use(cors());
app.use(json());
app.use(clientRouter);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running in port: ${port}`));
