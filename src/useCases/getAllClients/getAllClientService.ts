import { Client } from "../../models/Clients";
import { AbstractClientRepository, IClientDTO } from "../../repositories/AbstractClientRepository";

export class GetAllClientService {
  constructor(private clientRpository: AbstractClientRepository<number>) {}

  async excute(): Promise<IClientDTO<number>[]> {
    return await this.clientRpository.getAll();
  }
}
