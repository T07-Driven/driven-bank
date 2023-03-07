import { Client } from "../models/Clients";

export abstract class AbstractClientRepository<T> {
  abstract create({ id, name, age }: Client<T>): void;
  abstract getAll(): Promise<Client<T>[]>;
}
