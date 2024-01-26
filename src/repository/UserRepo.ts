import { Prisma } from "@prisma/client";
import { IUserRepository, IUserCreate, IUser } from '../interfaces/UserInterface'


class UserPostgrePrismaRepo implements IUserRepository {

    public create(UserValidatedData: IUserCreate) {
        return {} as IUser
    }
}