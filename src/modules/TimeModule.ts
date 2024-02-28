import moment from "moment";
import { ITimeModule } from '../interfaces/modules/TimeInterface'

class TimeModule implements ITimeModule {

    public static nowFormatedString(): string {
        return moment().format()
    }

}

export { TimeModule }