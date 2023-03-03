import { v4 as uuidV4 } from "uuid";
import { BusinessAccountRepository } from "../../repositories/BusinessAccountRepository";

interface IRequest {
  agency: string;
  balance: number;
  userId: string;
  cnpj: string;
}

export class CreateBusinessAccountService {
  constructor(private businessAccountRepository: BusinessAccountRepository) {}

  execute({ agency, balance, userId, cnpj }: IRequest): void {
    const number = uuidV4();
    // Pode fazer qualquer validação aqui.
    this.businessAccountRepository.create({
      number,
      agency,
      balance,
      userId,
      cnpj,
    });
  }
}
