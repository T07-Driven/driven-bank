import { Request, Response } from "express";
import { GetAllClientService } from "./getAllClientService";

export class GetAllClientsController {
  constructor(private getAllClientsService: GetAllClientService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const clients = await this.getAllClientsService.excute();
    return res.send(clients);
  }
}
