import express, { json } from "express";
import cors from "cors";
import clientRouter from "./routers/client.routes";
import accountRouter from "./routers/account.routes";

const app = express();
app.use(cors());
app.use(json());
app.use(clientRouter);
app.use(accountRouter);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running in port: ${port}`));
