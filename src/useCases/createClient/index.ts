import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { ClientRepositoryPg } from "../../repositories/implementationsPg/ClienteRepositoryPg";
import { CreateClientController } from "./createClientController";
import { CreateClientService } from "./createClientService";

const clientRepository = new ClientRepositoryPg();
const createClientService = new CreateClientService(clientRepository);
export const createClientController = new CreateClientController(
  createClientService
);
