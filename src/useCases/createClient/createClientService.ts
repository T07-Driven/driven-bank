import { ClientRepository } from "../../repositories/ClientRepository";
import { v4 as uuidV4 } from "uuid";

interface IRequest {
  name: string;
  age: string;
}

export class CreateClientService {
  constructor(private clientRepository: ClientRepository) {}

  execute({ name, age }: IRequest) {
    const id = uuidV4();
    
    const clientNameExist = this.clientRepository
      .getAll()
      .find((item) => item.name === name);

    if (clientNameExist) throw new Error("Client already exists");
    
    this.clientRepository.create({ id, name, age });
  }
}
