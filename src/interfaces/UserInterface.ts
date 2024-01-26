import { UUID } from "crypto"
import { Request, Response } from 'express';

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
    create(userDataCreate: IUserCreate): IUser;
}

interface IUserCreate {
    firstName: string;
    lastName: string;
    birthdate: Date;
    userName: string;
    email: string;
    password: UUID | string;
}



export { IUser, IUserRepository, IUserController, IUserService, IUserCreate }