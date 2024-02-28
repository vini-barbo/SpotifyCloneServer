import express, { Application } from "express";
import { appRoutes } from "./routes";
import { DataBaseConfig } from "./DB/main/DBConfig";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.expressConfig();
        this.routesConfig();
        DataBaseConfig.connect()
    }

    private expressConfig(): void {
        this.app.use(express.json());
    }

    private routesConfig(): void {
        this.app.use(appRoutes)
    }
}

export default App