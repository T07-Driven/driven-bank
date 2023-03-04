import { Client } from "../models/Clients";

export abstract class AbstractClientRepository {
  abstract create({ id, name, age }: Client): void;
  abstract getAll(): Client[];
  teste(): void {
    console.log("oi");
  }
}
