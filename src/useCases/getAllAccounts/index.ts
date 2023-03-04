import { AccountRepository } from "../../repositories/implementations/AccountRepository";
import { GetAllAccountController } from "./getAllAccountController";
import { GetAllAccountService } from "./getAllAccountService";

const accountRepository = AccountRepository.getInstance();
const getAllAccountService = new GetAllAccountService(accountRepository);
export const getAllAccountController = new GetAllAccountController(
  getAllAccountService
);
