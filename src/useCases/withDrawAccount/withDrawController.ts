import { Request, Response } from "express";
import { WithDrawService } from "./withDrawService";

export class WithDrawController {
  constructor(private withDrawService: WithDrawService) {}

  handle(req: Request, res: Response): Response {
    const { userId, accountNumber, value } = req.body;

    this.withDrawService.execute({ userId, accountNumber, value });

    return res.sendStatus(200);
  }
}
