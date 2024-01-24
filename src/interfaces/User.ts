import { UUID } from "crypto"

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
    create(): void;
    findOneByObejct(): IUser;
    findMany(): IUser[];
}


export { IUser, IUserRepository }