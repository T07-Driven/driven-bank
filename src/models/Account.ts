export class Account {
  constructor(
    public number: string,
    public agency: string,
    public balance: number = 0,
    public userId: string
  ) {}
}
