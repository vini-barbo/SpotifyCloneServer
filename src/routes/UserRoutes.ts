import { Router, Request, Response } from "express";


class UserRoutes {
    public routes = Router()

    constructor() {
        this.routes.post('/create', (req: Request, res: Response) => {
            console.log('teste')
        })
    }
}

const userRoutes = new UserRoutes().routes

export { userRoutes }