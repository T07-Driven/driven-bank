import { BusinessAccount } from "../models/BusinessAccount";
import { AccountRepository } from "./AccountRepository";

export class BusinessAccountRepository extends AccountRepository {
  private businessAccounts: BusinessAccount[];
  protected static INSTANCE: BusinessAccountRepository;

  constructor() {
    super();
    this.businessAccounts = [];
  }

  public static getInstance(): BusinessAccountRepository {
    if (!this.INSTANCE) this.INSTANCE = new BusinessAccountRepository();
    return this.INSTANCE;
  }

  create({ number, agency, balance, userId, cnpj }: BusinessAccount): void {
    const account: BusinessAccount = new BusinessAccount(
      number,
      agency,
      balance,
      userId,
      cnpj
    );
    this.businessAccounts.push(account);
  }

  getAll(): BusinessAccount[] {
    const account = this.businessAccounts;
    if (!account) throw new Error("Empty account list!");
    return account;
  }

  validAccount(userId: string, accountNumber: string): BusinessAccount {
    const account = this.businessAccounts.find(
      (item) => item.number === accountNumber
    );
    if (!account) throw new Error("Account not found");
    if (account.userId !== userId)
      throw new Error("You cannot make this transaction on the account");

    return account;
  }
}
