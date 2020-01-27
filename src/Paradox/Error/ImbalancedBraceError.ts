export class ImbalancedBraceError extends Error {
    constructor(str: string, index?: number) {
        if (index) {
            super(`Imbalanced braces in string '${str}' near index ${index}.`);
        }
        else {
            super(`Imbalanced braces in string '${str}'.`);
        }
        this.name = "ImbalancedBraceError";
    }
}