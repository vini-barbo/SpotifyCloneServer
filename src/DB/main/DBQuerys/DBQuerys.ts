import { UUIDModule } from "../../../modules/UUIDModule";

interface IDBQuerys {
    generateNotAlreadyUsedID(searchIDFunction: searchID, keyName: string): Promise<string>;
}

type searchID = (searchQueryObject: { [key: string]: string }) => Promise<any>;

type uuid = string;

class DBQuerys {
    static async generateNotAlreadyUsedID(searchIDFunction: searchID, keyName: string): Promise<string> {
        let newID: string = await UUIDModule.generateRandomUUID();


        let searchQueryObject = { [keyName]: newID };

        let doesIdAlreadyExist = await searchIDFunction(searchQueryObject);

        while (doesIdAlreadyExist) {
            newID = await UUIDModule.generateRandomUUID();
            console.log(newID)
            searchQueryObject = { [keyName]: newID };
            doesIdAlreadyExist = await searchIDFunction(searchQueryObject);
        }

        return newID;
    }
}

export { DBQuerys };
