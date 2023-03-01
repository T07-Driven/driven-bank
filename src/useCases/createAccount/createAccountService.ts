import { AccountRepository } from "../../repositories/AccountRepository";
import { v4 as uuidV4 } from "uuid";

interface IRequest {
  agency: string;
  balance: number;
  userId: string;
}

export class CreateAccountService {
  constructor(private accountRepository: AccountRepository) {}

  execute({ agency, balance, userId }: IRequest): void {
    const number = uuidV4();
    // Pode fazer qualquer validação aqui.
    this.accountRepository.create({ number, agency, balance, userId });
  }
}
