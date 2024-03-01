import App from './app'
import moment from 'moment'
import { errorMiddleware } from './middleware/error'

class Server {
    private SERVER_PORT: number = Number(process.env.SERVER_PORT)
    private app = new App().app

    public async start() {
        try {
            this.app.use(errorMiddleware)
            this.app.listen(this.SERVER_PORT, () => {
                console.log(`✅ [${moment().format()}] Server Connection has been create successfully at port ${this.SERVER_PORT}`)
            })
        } catch (error) {
            console.log(`❌ [${moment().format()}] Failed to connect the database at port ${this.SERVER_PORT}`, error)
        }

    }
}

const server = new Server()
server.start()