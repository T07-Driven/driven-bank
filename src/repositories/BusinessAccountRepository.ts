import { Account } from "../models/Account";
import { AccountRepository } from "./AccountRepository";

export class BusinessAccountRepository extends AccountRepository {
  private businessAccounts: Account[];
  protected static INSTANCE: BusinessAccountRepository;

  constructor() {
    super();
    this.businessAccounts = [];
  }

  public static getInstance(): BusinessAccountRepository {
    if (!this.INSTANCE) this.INSTANCE = new BusinessAccountRepository();
    return this.INSTANCE;
  }

}
