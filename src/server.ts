import express, { Application, Request, Response } from "express";
import Database from "./config/database";
class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes()
        this.databaseSync()
    }

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync()
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("welcome home")
        })
    }
}

const port: number = Number(process.env.SERVER_PORT)

const app = new App().app


app.listen(port, () => {
    console.log('✅ Server Connection has been create successfully at port', port)
})