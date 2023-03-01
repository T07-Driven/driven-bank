import { ClientRepository } from "../../repositories/ClientRepository";

interface IRequest {
  id: string;
  name: string;
  age: string;
}

export class GetAllClientService {
  constructor(private clientRpository: ClientRepository) {}

  excute(): IRequest[] {
    return this.clientRpository.getAll();
  }
}
