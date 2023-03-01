import { AccountRepository } from "../../repositories/AccountRepository";

interface IRequest {
  number: string;
  agency: string;
  balance: number;
  userId: string;
}

export class GetAllAccountService {
  constructor(private accountRepository: AccountRepository) {}

  execute(): IRequest[] {
    return this.accountRepository.getAll();
  }
}
