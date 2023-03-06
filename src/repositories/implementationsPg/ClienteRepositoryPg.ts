import prisma from "../../database/db";
import { Client } from "../../models/Clients";
import { AbstractClientRepository } from "../AbstractClientRepository";

export class ClientRepositoryPg extends AbstractClientRepository<number> {
  constructor() {
    super();
  }

  async create({ name, age }: Client<number>): Promise<void> {
    await prisma.clients.create({
      data: {
        name,
        age,
      },
    });
  }
  async getAll(): Promise<Client<number>[]> {
    return await prisma.clients.findMany();
  }
}
