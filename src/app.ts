
import express, { Application, Request, Response } from "express";
import { dataBase } from "./config/Database";
import { UserEntity } from "./entities/UserEntity";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes()
        this.databaseSync()

    }

    protected databaseSync(): void {
        dataBase.start()
        console.log(dataBase.dataSource)
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("welcome home")
        })
    }
}

export default App