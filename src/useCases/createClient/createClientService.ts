import { v4 as uuidV4 } from "uuid";
import { AbstractClientRepository } from "../../repositories/AbstractClientRepository";

interface IRequest {
  name: string;
  age: string;
}

export class CreateClientService {
  constructor(private clientRepository: AbstractClientRepository<string>) {}

  execute({ name, age }: IRequest) {
    const id = uuidV4();

    const clientNameExist = this.clientRepository
      .getAll()
      .find((item) => item.name === name);

    if (clientNameExist) throw new Error("Client already exists");

    if (!id || !name || !age) throw new Error("Error model Client");

    this.clientRepository.create({ id, name, age });
  }
}
