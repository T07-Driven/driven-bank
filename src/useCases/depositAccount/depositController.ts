import { Request, Response } from "express";
import { DepositService } from "./depositService";

export class DepositController {
  constructor(private depositService: DepositService) {}

  handle(req: Request, res: Response): Response {
    const { userId, accountNumber, value } = req.body;

    this.depositService.execute({ userId, accountNumber, value });

    return res.sendStatus(200);
  }
}
