import { Request, Response } from "express";

import { IUserController, IUserCreate, IUserService } from "../interfaces/UserInterface";

class UserController implements IUserController {
    constructor(private readonly UserService: IUserService) { }

    public async create(request: Request, response: Response): Promise<Response> {
        // const { userName, birthdate, email, firstName, lastName, password } = request.body;
        // const dataUserCreate: IUserCreate = { userName, birthdate, email, firstName, lastName, password };
        // const result = await this.UserService.create(dataUserCreate);

        // console.log('params ', request.params)
        // console.log('body ', request.body)
        // console.log('headers ', request.headers)
        // console.log('query ', request.query)

        console.log(request)
        return response.status(201).send('its ok ');
    }
}

export { UserController };

