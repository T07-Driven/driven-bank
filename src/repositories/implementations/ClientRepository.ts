import { Client } from "../../models/Clients";
import { AbstractClientRepository } from "../AbstractClientRepository";
import { v4 as uuidV4 } from "uuid";

export class ClientRepository extends AbstractClientRepository<string> {
  private clients: Client<string>[];
  private static INSTANCE: ClientRepository;

  private constructor() {
    super();
    this.clients = [];
  }

  public static getInstance(): ClientRepository {
    if (!this.INSTANCE) this.INSTANCE = new ClientRepository();
    return this.INSTANCE;
  }

  create({ id, name, age }: Client<string>): void {
    const newId = uuidV4();
    const newClient: Client<string> = new Client<string>(id = newId, name, age);
    this.clients.push(newClient);
  }

  getAll(): Client<string>[] {
    const clients = this.clients;
    if (!clients) throw new Error("Empty client list!");
    return clients;
  }
}
