import { IUserService, IUserCreate, IUser, IUserRepository } from '../interfaces/UserInterface'
import { UserValidator } from "../validation/validations/UserValidator"
class UserService implements IUserService {

    private userValidator = new UserValidator()

    constructor(private readonly UserRepository: IUserRepository) { }

    public async create(userCreateData: IUserCreate): Promise<IUser> {


        const userDataValidated = await this.userValidator.create(userCreateData)
        this.UserRepository.create(userDataValidated)


        return userCreateData as IUser
    }
}

export { UserService }