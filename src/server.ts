import App from './app'

class Server {
    private SERVER_PORT: number = Number(process.env.SERVER_PORT)
    private app = new App().app

    public async start() {
        this.app.listen(this.SERVER_PORT, () => {
            console.log('✅  Server Connection has been create successfully at port', this.SERVER_PORT)
        })
    }
}

const server = new Server()
server.start()