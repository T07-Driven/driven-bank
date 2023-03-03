export class Account {
  public number: string;
  public agency: string;
  public balance: number;
  public userId: string;

  constructor(
    number: string,
    agency: string,
    balance: number = 0,
    userId: string
  ) {
    this.number = number;
    this.agency = agency;
    this.balance = balance;
    this.userId = userId;
  }
}