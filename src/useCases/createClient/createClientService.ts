import { v4 as uuidV4 } from "uuid";
import { AbstractClientRepository } from "../../repositories/AbstractClientRepository";

interface IRequestDTO {
  name: string;
  age: string;
}

export class CreateClientService {
  constructor(private clientRepository: AbstractClientRepository<number>) {}

  execute({ name, age }: IRequestDTO): void {
    /*     const clientNameExist = this.clientRepository
      .getAll()
      .find((item) => item.name === name);

    if (clientNameExist) throw new Error("Client already exists"); */
    
    this.clientRepository.create({ name, age });
  }
}
