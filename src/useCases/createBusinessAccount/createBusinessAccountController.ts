import { Request, Response } from "express";
import { CreateBusinessAccountService } from "./createBusinessAccountService";

export class CreateBusinessAccountController {
  constructor(
    private createBusinessAccountService: CreateBusinessAccountService
  ) {}

  handle(req: Request, res: Response): Response {
    const { agency, balance, userId, cnpj } = req.body;

    this.createBusinessAccountService.execute({
      agency,
      balance,
      userId,
      cnpj,
    });

    return res.sendStatus(201);
  }
}
