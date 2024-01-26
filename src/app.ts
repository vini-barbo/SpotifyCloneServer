import express, { Application, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.routes()
        this.databaseSync()
    }

    protected async databaseSync() {
        console.log('Criando corno')

        // const pessoa1 = await
        //     prisma.user.create({
        //         data: {
        //             birthdate: new Date,
        //             email: 'teste@hotmail.com',
        //             first_name: 'jose',
        //             last_name: 'teste',
        //             password: 'Teste123213',
        //             user_name: 'testeDoTeste'
        //         }
        //     })

        // console.log(await prisma.user.findFirst())
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("welcome home")
        })
    }
}

export default App