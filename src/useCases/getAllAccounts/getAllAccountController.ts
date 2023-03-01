import { Request, Response } from "express";
import { GetAllAccountService } from "./getAllAccountService";

export class GetAllAccountController {
  constructor(private getAllAccountService: GetAllAccountService) {}

  handle(req: Request, res: Response): Response {
    const accounts = this.getAllAccountService.execute();

    return res.send(accounts);
  }
}
