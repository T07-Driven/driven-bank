import { AccountRepository } from "../../repositories/implementations/AccountRepository";
import { WithDrawController } from "./withDrawController";
import { WithDrawService } from "./withDrawService";

const accountRepository = AccountRepository.getInstance();
const withDrawService = new WithDrawService(accountRepository);
export const withDrawController = new WithDrawController(withDrawService);
