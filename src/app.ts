import express, { Application } from "express";
import { appRoutes } from "./routes";
import { PrismaClient } from '@prisma/client'
import moment from 'moment'

class App {
    public app: Application;
    private DB_PORT = process.env.POSTGRES_PORT

    constructor() {
        this.app = express();
        this.expressConfig()
        this.routesConfig()
        this.prismaConfig()
    }

    private expressConfig(): void {
        this.app.use(express.json());
    }

    private routesConfig(): void {
        this.app.use(appRoutes)
    }

    private prismaConfig(): void {
        try {
            const prisma = new PrismaClient()
            console.log(`✅ [${moment().format()}] Database Connection has been create successfully at port ${this.DB_PORT}`)
        } catch (error) {
            console.log(`❌ [${moment().format()}] Failed to connect the database at port ${this.DB_PORT}`, error)
        }

    }
}

export default App