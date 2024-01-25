
import { DataSource } from "typeorm";
import { UserEntity as User } from '../entities/UserEntity'
import moment, { Moment } from "moment";

class Database {
    public dataSource: DataSource | undefined

    private POSTGRES_DB = process.env.POSTGRES_DB as string
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string
    private POSTGRES_PORT = Number(process.env.POSTGRES_PORT) as number
    private POSTGRES_USER = process.env.POSTGRES_USER as string
    private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string

    private async connectToPostgreSQL() {
        this.dataSource = new DataSource({
            type: this.POSTGRES_DB as 'postgres',
            host: this.POSTGRES_HOST,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            port: this.POSTGRES_PORT,
            synchronize: true,
            entities: [User]
        })
    }

    public start() {
        this.connectToPostgreSQL()
        this.dataSource?.initialize().
            then(() => {
                console.log(`✅ [${moment().format()}] PostgreSQL Connection has been established successfully `)
            })
            .catch((error: string) => {
                console.log(`❌ [${moment().format()}] Unable to connect to the PostgreSQL database`, error)
            })
    }

}

const dataBase = new Database();

export { dataBase }