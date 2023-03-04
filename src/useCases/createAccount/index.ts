import { AccountRepository } from "../../repositories/implementations/AccountRepository";
import { CreateAccountController } from "./createAccountController";
import { CreateAccountService } from "./createAccountService";

const accountRepository = AccountRepository.getInstance();
const createAccountService = new CreateAccountService(accountRepository);
export const createAccountController = new CreateAccountController(
  createAccountService
);
