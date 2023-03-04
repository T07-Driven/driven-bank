import { v4 as uuidV4 } from "uuid";
import { AccountRepository } from "../../repositories/implementations/AccountRepository";

interface IRequest { // DTO
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
