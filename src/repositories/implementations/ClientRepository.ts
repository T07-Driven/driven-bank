import { Client } from "../../models/Clients";
import { AbstractClientRepository } from "../AbstractClientRepository";

export class ClientRepository extends AbstractClientRepository {
  private clients: Client[];
  private static INSTANCE: ClientRepository;

  private constructor() {
    super();
    this.clients = [];
  }

  public static getInstance(): ClientRepository {
    if (!this.INSTANCE) this.INSTANCE = new ClientRepository();
    return this.INSTANCE;
  }

  create({ id, name, age }: Client): void {
    const newClient: Client = new Client(id, name, age);
    this.clients.push(newClient);
  }

  getAll(): Client[] {
    const clients = this.clients;
    if (!clients) throw new Error("Empty client list!");
    return clients;
  }
}
