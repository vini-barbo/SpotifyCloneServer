import { IUserService, IUserCreate, IUser, IUserRepository } from '../interfaces/UserInterface'

class UserService implements IUserService {

    constructor(private readonly UserRepository: IUserRepository) { }

    public create(userCreateData: IUserCreate): IUser {

        console.log(this.UserRepository)

        const teste = {}
        return teste as IUser
    }
}