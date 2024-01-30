import { IUserService, IUserCreate, IUser, IUserRepository } from '../interfaces/UserInterface'

class UserService implements IUserService {

    constructor(private readonly UserRepository: IUserRepository) { }

    public create(userCreateData: IUserCreate): IUser {
        return userCreateData as IUser
    }
}

export { UserService }