import { Router, Request, Response } from "express";
import { UserPostgrePrismaRepo } from '../repositories/UserRepository'
import { UserService } from '../services/UserService'
import { UserController } from "../controllers/UserController";


const userRepository = new UserPostgrePrismaRepo()
const userServices = new UserService(userRepository)
const userController = new UserController(userServices)


class UserRoutes {
    public routes = Router()

    constructor() {
        this.routes.get('/findAll', (req: Request, res: Response) => {
            res.send('A pica do vovo não sobe mais')
        })

        this.routes.post('/create', userController.create.bind(userController))
    }
}

const userRoutes = new UserRoutes().routes

export { userRoutes }