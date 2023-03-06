import { Client } from "../../models/Clients";
import { AbstractClientRepository } from "../AbstractClientRepository";

export class ClientRepositoryPg extends AbstractClientRepository<number> {
    
    create({ id, name, age }: Client<number>): void {
        throw new Error("Method not implemented.");
    }
    getAll(): Client<number>[] {
        throw new Error("Method not implemented.");
    }
    
}