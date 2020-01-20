import Prando from "prando";

/**
 * Shuffle an array of values using the Fisher-Yates shuffling algorithm.
 * @param arr Array to shuffle.
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 */
export function shuffle(arr: any[], rand?: Prando): void {
    if (rand == undefined) {
        rand = new Prando();
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let j = rand.nextInt(i, arr.length - 1);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

/**
 * Get a random element from an array.
 * @param arr Array to get a random element from.
 */
export function randomElement<T>(arr: T[], rand?: Prando): T {
    if (rand == undefined) {
        rand = new Prando();
    }

    return rand.nextArrayItem(arr);
}