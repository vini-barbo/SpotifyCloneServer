import { IUserRepository, IUserCreate, IUser } from '../interfaces/UserInterface'
import { UserQuery } from '../DB/main/DBQuerys/UserQuerys'

class UserPostgrePrismaRepo implements IUserRepository {

    constructor() { }

    public async create(userValidatedData: IUserCreate) {


        const result = await UserQuery.create(userValidatedData)

        return result
    }
}

export { UserPostgrePrismaRepo }