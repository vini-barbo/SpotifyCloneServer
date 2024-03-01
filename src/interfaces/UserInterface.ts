import { Request, Response } from 'express';
import { ValidationReturn } from "../types/types"
import { UserDatabaseDTO } from '../DTO/UserDTO'


interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    userName: string;
    email: string;
    password: string;
    status: number;
}

interface IUserCreate {
    firstName: string;
    lastName: string;
    birthdate: Date;
    userName: string;
    email: string;
    password: string;
}

interface IUserRepository {
    create(user: IUserCreate): Promise<UserDatabaseDTO>;
}

interface IUserController {
    create(req: Request, res: Response): Promise<Response>;
}

interface IUserService {
    create(userDataCreate: IUserCreate): Promise<IUser>;
}



interface IUserValidator {
    create(userToBeValidated: IUserCreate): ValidationReturn;
}

export { IUser, IUserRepository, IUserController, IUserService, IUserCreate, IUserValidator }