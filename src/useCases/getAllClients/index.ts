
import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { GetAllClientsController } from "./getAllClientController";
import { GetAllClientService } from "./getAllClientService";

const clientRepository = ClientRepository.getInstance();
const getAllClientService = new GetAllClientService(clientRepository);
export const getAllClientController = new GetAllClientsController(
  getAllClientService
);
