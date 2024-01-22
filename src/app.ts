
import express, { Application, Request, Response } from "express";
import Database from "./config/Database";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes()
        this.databaseSync()
    }

    protected databaseSync(): void {
        const db = new Database();
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("welcome home")
        })
    }
}

export default App