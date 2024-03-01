import { IUser, IUserCreate } from "../../../interfaces/UserInterface";
import { DBInstance } from "../DBInstance";
import { UserCreateDTO, UserDatabaseDTO, UserSearchQueryDTO, RequireAtLeastOne } from "../../../DTO/UserDTO"
import { UUIDModule } from '../../../modules/UUIDModule'
import { Prisma } from "@prisma/client";
import { DBQuerys } from "./DBQuerys";


class UserQuery extends DBQuerys {

    static async create(user: IUserCreate): Promise<UserDatabaseDTO> {

        let userID: string = await DBQuerys.generateNotAlreadyUsedID(this.findOneBy, "user_id")

        const userCreated = DBInstance.prisma.user.create({
            data: {
                user_id: userID,
                user_name: user.userName,
                first_name: user.firstName,
                last_name: user.lastName,
                email: user.email,
                birthdate: user.birthdate,
                password: user.password,
                created_at: new Date,
                updated_at: new Date,
            }
        }
        )
        console.log(userCreated)

        return userCreated

    }

    static async findOneBy(searchQueryObject: Prisma.userWhereUniqueInput | object): Promise<UserDatabaseDTO | null> {

        const result = await DBInstance.prisma.user.findUnique({ where: searchQueryObject as Prisma.userWhereUniqueInput })

        return result
    }
}

export { UserQuery }