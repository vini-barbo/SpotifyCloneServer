import express , { Application , Request, Response } from "express";

class App {
    public app: Application;

    constructor(){
        this.app = express()
    }

    protected routes():void{
        this.app.route('/').get((req:Request, res:Response) => {
            res.send("welcome home")
        })
    }
}

const port: number = Number(process.env.PORT)

const app = new App().app

console.log('running?')

app.listen(port, () => {
    console.log('server running')
})