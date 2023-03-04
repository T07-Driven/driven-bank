import { v4 as uuidV4 } from "uuid";
import { AbstractClientRepository } from "../../repositories/AbstractClientRepository";

interface IRequest {
  name: string;
  age: string;
}

export class CreateClientService {
  constructor(private clientRepository: AbstractClientRepository) {}

  execute({ name, age }: IRequest) {
    const id = uuidV4();

    const clientNameExist = this.clientRepository
      .getAll()
      .find((item) => item.name === name);

    if (clientNameExist) throw new Error("Client already exists");

    this.clientRepository.create({ id, name, age });
  }
}
