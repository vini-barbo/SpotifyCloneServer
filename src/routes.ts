import { Router } from "express";
import { userRoutes } from "./routes/UserRoutes";

class AppRoutes {
    public routes = Router()

    constructor() {
        this.routes.use('/users', userRoutes)
    }
}

const appRoutes = new AppRoutes().routes

export { appRoutes }