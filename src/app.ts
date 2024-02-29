import express, { Application } from "express";
import { appRoutes } from "./routes";
import { DBInstance } from "./DB/main/DBInstance";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.expressConfig();
        this.routesConfig();
        DBInstance.connect()
    }

    private expressConfig(): void {
        this.app.use(express.json());
    }

    private routesConfig(): void {
        this.app.use(appRoutes)
    }
}

export default App