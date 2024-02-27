import { IUserRepository, IUserCreate, IUser } from '../interfaces/UserInterface'
import { Prisma } from '@prisma/client'

class UserPostgrePrismaRepo implements IUserRepository {

    constructor() { }

    public create(userValidatedData: IUserCreate) {

        return {} as IUser
    }
}

export { UserPostgrePrismaRepo }