import { Request, Response } from "express";
import { GetAllClientService } from "./getAllClientService";

export class GetAllClientsController {
  constructor(private getAllClientsService: GetAllClientService) {}

  handle(req: Request, res: Response): Response {
    const clients = this.getAllClientsService.excute();
    return res.send(clients);
  }
}
