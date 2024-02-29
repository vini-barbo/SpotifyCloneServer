import { z, ZodRawShape } from "zod";
import { IUserCreate, IUserService, IUser } from "../../interfaces/UserInterface";
import { Validator } from "../Validator";


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