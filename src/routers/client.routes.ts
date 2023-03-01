import { Router } from "express";
import { createClientController } from "../useCases/createClient";
import { getAllClientController } from "../useCases/getAllClients";

const clientRouter = Router();

clientRouter.post("/clients", (req, res) =>
  createClientController.handle(req, res)
);

clientRouter.get("/clients", (req, res) =>
  getAllClientController.handle(req, res)
);

export default clientRouter;
