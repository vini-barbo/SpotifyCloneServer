

type ErrorObject = { message: string, path: string[] };
type ValidationResult = { error: { errors: ErrorObject[] } };


interface ValidationErrorHandler {
    handleMissingRequiredFields(validationResult: ValidationResult): string
}


class ValidationErrorHandler implements ValidationErrorHandler {
    public handleMissingRequiredFields(validationResult: ValidationResult): string {
        const errorMessages: string[] = [];

        for (const error of validationResult.error.errors) {
            if (error.message === "Required") {
                errorMessages.push(`${error.path[0]}'s field is required`);
            } else {
                errorMessages.push(error.message);
            }
        }

        return errorMessages.join("\n")
        // Assuming ValidationError is defined somewhere
        //throw new ValidationError(errorMessages.join("\n"));
    }
}

export { ValidationErrorHandler }