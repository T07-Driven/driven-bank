import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { ClientRepositoryPg } from "../../repositories/implementationsPg/ClienteRepositoryPg";
import { GetAllClientsController } from "./getAllClientController";
import { GetAllClientService } from "./getAllClientService";

const clientRepository = new ClientRepositoryPg();
const getAllClientService = new GetAllClientService(clientRepository);
export const getAllClientController = new GetAllClientsController(
  getAllClientService
);
