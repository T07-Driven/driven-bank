import { Router } from "express";
import { createAccountController } from "../useCases/createAccount";
import { createBusinessAccountController } from "../useCases/createBusinessAccount";
import { depositController } from "../useCases/depositAccount";
import { getAllAccountController } from "../useCases/getAllAccounts";
import { getAllBusinessAccountController } from "../useCases/getAllBusinessAccounts";
import { withDrawController } from "../useCases/withDrawAccount";

const accountRouter = Router();

accountRouter.post("/accounts", (req, res) =>
  createAccountController.handle(req, res)
);

accountRouter.get("/accounts", (req, res) => {
  getAllAccountController.handle(req, res);
});

accountRouter.post("/accounts/deposit", (req, res) =>
  depositController.handle(req, res)
);

accountRouter.post("/accounts/with-draw", (req, res) =>
  withDrawController.handle(req, res)
);

// Business Accounts

accountRouter.post("/accounts/business", (req, res) =>
  createBusinessAccountController.handle(req, res)
);

accountRouter.get("/accounts/business", (req, res) => {
  getAllBusinessAccountController.handle(req, res);
});

export default accountRouter;
