import { AbstractClientRepository } from "../../repositories/AbstractClientRepository";

interface IRequest {
  id: string;
  name: string;
  age: string;
}

export class GetAllClientService {
  constructor(private clientRpository: AbstractClientRepository<string>) {}

  excute(): IRequest[] {
    return this.clientRpository.getAll();
  }
}
