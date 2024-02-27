import { UUID } from "crypto"
import { Request, Response } from 'express';
import { ValidationReturn } from "../types/types"

interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    userName: string;
    email: string;
    password: UUID | string;
    status: number;
}

interface IUserRepository {
    create(User: IUserCreate): IUser;
}

interface IUserController {
    create(req: Request, res: Response): Promise<Response>;
}

interface IUserService {
    create(userDataCreate: IUserCreate): Promise<IUser>;
}

interface IUserCreate {
    firstName: string;
    lastName: string;
    birthdate: Date;
    userName: string;
    email: string;
    password: UUID | string;
}

interface IUserValidator {
    create(userToBeValidated: IUserCreate): ValidationReturn;
}

export { IUser, IUserRepository, IUserController, IUserService, IUserCreate, IUserValidator }