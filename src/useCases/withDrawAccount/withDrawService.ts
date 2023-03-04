import { AccountRepository } from "../../repositories/implementations/AccountRepository";

interface IRequest {
  userId: string;
  accountNumber: string;
  value: number;
}

export class WithDrawService {
  constructor(private accountRepostory: AccountRepository) {}

  execute({ userId, accountNumber, value }: IRequest) {
    const account = this.accountRepostory.validAccount(userId, accountNumber);
    if (account.balance < value) throw new Error("Insufficient bank balance!");

    this.accountRepostory.withDraw(account, value);
  }
}
