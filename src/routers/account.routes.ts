import { Router } from "express";
import { createAccountController } from "../useCases/createAccount";
import { getAllAccountController } from "../useCases/getAllAccounts";

const accountRouter = Router();

accountRouter.post("/accounts", (req, res) =>
  createAccountController.handle(req, res)
);

accountRouter.get("/accounts", (req, res) => {
  getAllAccountController.handle(req, res);
});

export default accountRouter;
