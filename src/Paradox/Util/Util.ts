namespace Paradox.Util {
    /**
     * Shuffle an array of values using the Fisher-Yates shuffling algorithm.
     * @param arr 
     * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     */
    export function shuffle(arr: any[]) {
        for (let i = 0; i < arr.length - 2; i++) {
            let j = randomInt(i, arr.length + 1);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    /**
     * Get a random integer between min (inclusive) and max (exclusive)
     * @param min Minimum value for the result (inclusive).
     * @param max Maximum value for the result (exclusive).
     */
    export function randomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}