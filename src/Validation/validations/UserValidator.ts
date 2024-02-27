import { z, ZodRawShape } from "zod";
import { IUserCreate, IUserValidator, IUserService, IUser } from "../../interfaces/UserInterface";
import { Validator } from "../Validator";
import { ValidationReturn } from '../../types/types';


class UserValidator extends Validator implements IUserService {

    public async create(userToBeValidated: IUserCreate): Promise<IUser> {
        const dataShape: ZodRawShape = {
            firstName: z.string(),
            lastName: z.string(),
            birthdate: z.string(),
            userName: z.string(),
            email: z.string().email(),
            password: z.string()
        }

        const dataValidated = this.validateData(dataShape, userToBeValidated)

        return dataValidated as Promise<IUser>
    }
}



export { UserValidator }