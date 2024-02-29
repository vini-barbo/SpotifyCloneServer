import { IUser, IUserCreate } from "../../../interfaces/UserInterface";
import { DBInstance } from "../DBInstance";
import { UserCreateDTO, UserDatabaseDTO, UserSearchQueryDTO } from "../../../DTO/UserDTO"


class DBQuery {
    static async createUser(user: IUserCreate): Promise<UserDatabaseDTO> {

        DBInstance.prisma.user.create({
            data: {
                user_name: user.userName,
                first_name: user.firstName,
                last_name: user.lastName,
                email: user.email,
                birthdate: user.birthdate,
                password: user.password,
            }
        }
        )
    }

    static async findUserOneUserBy(searchQueryObject: UserSearchQueryDTO) {
        DBInstance.prisma.user.findUnique({ where: searchQueryObject })
    }
}