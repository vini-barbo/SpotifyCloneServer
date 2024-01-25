import App from './app'
import moment from 'moment'

class Server {
    private SERVER_PORT: number = Number(process.env.SERVER_PORT)
    private app = new App().app

    public async start() {
        this.app.listen(this.SERVER_PORT, () => {
            console.log(`✅ [${moment().format()}] Server Connection has been create successfully at port ${this.SERVER_PORT}`)
        })
    }
}

const server = new Server()
server.start()