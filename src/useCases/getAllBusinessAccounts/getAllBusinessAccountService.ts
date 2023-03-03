import { BusinessAccountRepository } from "../../repositories/BusinessAccountRepository";

interface IRequest {
  number: string;
  agency: string;
  balance: number;
  userId: string;
}

export class GetAllBusinessAccountService {
  constructor(private businessAccountRepository: BusinessAccountRepository) {}

  execute(): IRequest[] {
    return this.businessAccountRepository.getAll();
  }
}
