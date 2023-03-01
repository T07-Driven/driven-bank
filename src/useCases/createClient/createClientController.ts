import { Request, Response } from "express";
import { CreateClientService } from "./createClientService";

export class CreateClientController {
  constructor(private createClientService: CreateClientService) {}

  handle(req: Request, res: Response): Response {
    const { name, age } = req.body;

    this.createClientService.execute({ name, age });

    return res.sendStatus(201);
  }
}
