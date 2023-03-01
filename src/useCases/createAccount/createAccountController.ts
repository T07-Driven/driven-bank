import { Request, Response } from "express";
import { CreateAccountService } from "./createAccountService";

export class CreateAccountController {
  constructor(private createAccountService: CreateAccountService) {}

  handle(req: Request, res: Response): Response {
    const { agency, balance, userId } = req.body;

    this.createAccountService.execute({ agency, balance, userId });

    return res.sendStatus(201);
  }
}
