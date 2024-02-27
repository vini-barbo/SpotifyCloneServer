import { PrismaClient } from '@prisma/client'
import { IDataBaseConfig } from '../../interfaces/DataBaseInterface'

class DataBaseConfig implements IDataBaseConfig {

    public connect(): void { }
}