
import { v4 as uuidv4 } from 'uuid'

class UUIDModule {
    static async generateRandomUUID(): Promise<string> {
        return uuidv4()
    }
}

export { UUIDModule }