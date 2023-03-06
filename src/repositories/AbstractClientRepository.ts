import { Client } from "../models/Clients";

export interface IClientDTO<T> {
  id?: T;
  name: string;
  age: string;
}

export abstract class AbstractClientRepository<T> {
  abstract create({ id, name, age }: Client<T>): void;
  abstract getAll(): Promise<Client<T>[]>;
}
