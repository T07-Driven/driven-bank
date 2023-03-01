import { AccountRepository } from "../../repositories/AccountRepository";

interface IRequest {
  userId: string;
  accountNumber: string;
  value: number;
}

export class WithDrawService {
  constructor(private accountRepostory: AccountRepository) {}

  execute({ userId, accountNumber, value }: IRequest) {
    this.accountRepostory.withDraw({ userId, accountNumber, value });
  }
}
