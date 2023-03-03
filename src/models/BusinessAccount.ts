import { Account } from "./Account";

export class BusinessAccount extends Account {
  public cnpj: string;

  constructor(
    number: string,
    agency: string,
    balance: number,
    userId: string,
    cnpj: string
  ) {
    super(number, agency, balance, userId);
    this.cnpj = cnpj;
  }
}
