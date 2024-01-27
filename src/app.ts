import express, { Application } from "express";
import { appRoutes } from "./routes";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes()
    }


    private routes(): void {
        this.app.use(appRoutes)
    }
}

export default App