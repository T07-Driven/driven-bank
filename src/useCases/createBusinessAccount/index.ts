import { BusinessAccountRepository } from "../../repositories/implementations/BusinessAccountRepository";
import { CreateBusinessAccountController } from "./createBusinessAccountController";
import { CreateBusinessAccountService } from "./createBusinessAccountService";

const businessAccountRepository = BusinessAccountRepository.getInstance();
const createBusinessAccountService = new CreateBusinessAccountService(
  businessAccountRepository
);
export const createBusinessAccountController =
  new CreateBusinessAccountController(createBusinessAccountService);
