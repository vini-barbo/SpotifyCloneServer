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
    create(User: IUser): void;
    findOneByObejct(): IUser;
    findMany(): IUser[];
}

interface IUserController {
    create(req: Request, res: Response): Promise<Response>;
}

interface IUserCreate {
    firstName: string;
    lastName: string;
    birthdate: Date;
    userName: string;
    email: string;
    password: UUID | string;
}

interface IUserServices {
    create(userDataCreate: IUserCreate): Promise<IUser>;
}


export { IUser, IUserRepository, IUserController, IUserServices, IUserCreate }