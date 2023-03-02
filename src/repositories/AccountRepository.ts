import { Account } from "../models/Account";

interface IDeposit {
  // contrato
  userId: string;
  accountNumber: string;
  value: number;
}

export class AccountRepository {
  private accounts: Account[];
  protected static INSTANCE: AccountRepository;

  constructor() {
    this.accounts = [];
  }

  public static getInstance(): AccountRepository {
    if (!this.INSTANCE) this.INSTANCE = new AccountRepository();
    return this.INSTANCE;
  }

  create({ number, agency, balance, userId }: Account): void {
    const account: Account = new Account(number, agency, balance, userId);
    this.accounts.push(account);
  }

  getAll(): Account[] {
    const account = this.accounts;
    if (!account) throw new Error("Empty account list!");
    return account;
  }

  deposit({ userId, accountNumber, value }: IDeposit): void {
    const account = this.validAccount(userId, accountNumber);
    account.balance += value;
  }

  withDraw(account: Account, value: number): void {
    account.balance -= value;
  }

  validAccount(userId: string, accountNumber: string): Account {
    const account = this.accounts.find((item) => item.number === accountNumber);
    if (!account) throw new Error("Account not found");
    if (account.userId !== userId)
      throw new Error("You cannot make this transaction on the account");

    return account;
  }
}
