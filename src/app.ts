import express, { Application, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes()
    }


    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("welcome home")
        })
    }
}

export default App