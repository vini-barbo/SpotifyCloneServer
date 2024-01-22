import App from './app'

const port: number = Number(process.env.SERVER_PORT)

const app = new App().app

app.listen(port, () => {
    console.log('✅  Server Connection has been create successfully at port', port)
})