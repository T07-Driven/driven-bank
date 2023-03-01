import { AccountRepository } from "../../repositories/AccountRepository";
import { DepositController } from "./depositController";
import { DepositService } from "./depositService";

const accountRepository = AccountRepository.getInstance();
const depositService = new DepositService(accountRepository);
export const depositController = new DepositController(depositService);
