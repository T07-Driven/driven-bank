import { AccountRepository } from "../../repositories/AccountRepository";

interface IRequest {
  userId: string;
  accountNumber: string;
  value: number;
}

export class DepositService {
  constructor(private accountRepostory: AccountRepository) {}

  execute({ userId, accountNumber, value }: IRequest) {
    this.accountRepostory.deposit({ userId, accountNumber, value });
  }
}
