import { BusinessAccountRepository } from "../../repositories/BusinessAccountRepository";
import { GetAllBusinessAccountController } from "./getAllBusinessAccountController";
import { GetAllBusinessAccountService } from "./getAllBusinessAccountService";

const businessAccountRepository = BusinessAccountRepository.getInstance();
const getAllAccountService = new GetAllBusinessAccountService(
  businessAccountRepository
);
export const getAllBusinessAccountController = new GetAllBusinessAccountController(
  getAllAccountService
);
