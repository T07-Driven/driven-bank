import { AccountRepository } from "../../repositories/AccountRepository";
import { CreateAccountController } from "./createAccountController";
import { CreateAccountService } from "./createAccountService";

const accountRepository = AccountRepository.getInstance();
const createAccountService = new CreateAccountService(accountRepository);
export const createAccountController = new CreateAccountController(
  createAccountService
);
