import { PrismaClient } from '@prisma/client';
import { IDBInstance } from '../../interfaces/modules/DataBaseConfigInterface';
import { TimeModule } from '../../modules/TimeModule';

class DBInstance implements IDBInstance {
    static DB_PORT: string = process.env.POSTGRES_PORT as string;
    static prisma: PrismaClient;

    static connect(): void {
        try {
            this.prisma = new PrismaClient();
            console.log(`✅ [${TimeModule.nowFormatedString()}] Database Connection has been created successfully at port ${this.DB_PORT}`);
        } catch (error) {
            console.log(`❌ [${TimeModule.nowFormatedString()}] Failed to connect to the database at port ${this.DB_PORT}`);
        }
    }
}

export { DBInstance };
