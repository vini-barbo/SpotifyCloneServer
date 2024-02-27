import { z, ZodRawShape } from "zod";
import { ValidationErrorHandler } from "./ValidationErrorHandler";

class Validator {

    private validationErrorHandler: ValidationErrorHandler = new ValidationErrorHandler

    public validateData(dataShape: ZodRawShape, dataValidation: object): object | never | undefined {

        const schema = z.object(dataShape);

        const result = schema.safeParse(dataValidation)
        if (result.success) {
            return result
        }
        else {
            console.log(this.validationErrorHandler.handleMissingRequiredFields(result as any))
        }
    }
}

export { Validator }

