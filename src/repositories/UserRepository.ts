import { IUserRepository, IUserCreate, IUser } from '../interfaces/UserInterface'


class UserPostgrePrismaRepo implements IUserRepository {

    constructor() { }

    public create(userValidatedData: IUserCreate) {
        userValidatedData
        return {} as IUser
    }
}

export { UserPostgrePrismaRepo }