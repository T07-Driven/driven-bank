import { ClientRepository } from "../../repositories/ClientRepository";
import { CreateClientController } from "./createClientController";
import { CreateClientService } from "./createClientService";

const clientRepository = ClientRepository.getInstance();
const createClientService = new CreateClientService(clientRepository);
export const createClientController = new CreateClientController(createClientService);