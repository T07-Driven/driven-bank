import { Request, Response } from "express";
import { GetAllBusinessAccountService } from "./getAllBusinessAccountService";

export class GetAllBusinessAccountController {
  constructor(
    private getAllBusinessAccountService: GetAllBusinessAccountService
  ) {}

  handle(req: Request, res: Response): Response {
    const accounts = this.getAllBusinessAccountService.execute();

    return res.send(accounts);
  }
}
