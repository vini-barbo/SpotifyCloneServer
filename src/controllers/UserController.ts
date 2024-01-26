import { Request, Response } from "express";

import { IUserController, IUserCreate, IUserService } from "../interfaces/UserInterface";

class UserController implements IUserController {
    constructor(private readonly UserService: IUserService) { }

    public async create(request: Request, response: Response): Promise<Response> {
        const { userName, birthdate, email, firstName, lastName, password } = request.body;
        const dataUserCreate: IUserCreate = { userName, birthdate, email, firstName, lastName, password };
        const result = await this.UserService.create(dataUserCreate);
        return response.status(201).json(result);
    }
}

export { UserController };

