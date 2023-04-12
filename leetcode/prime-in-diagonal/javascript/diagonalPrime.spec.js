const { diagonalPrime, isPrime } = require('./diagonalPrime');

describe('Test diagonalPrime', () => {
    test('Example 1', () => {
        let nums = [
            [1, 2, 3],
            [5, 6, 7],
            [9, 10, 11],
        ];
        expect(diagonalPrime(nums)).toBe(11);
    });
    test('Example 2', () => {
        let nums = [
            [788, 645, 309, 559],
            [624, 160, 435, 724],
            [770, 483, 95, 695],
            [510, 779, 984, 238],
        ];
        expect(diagonalPrime(nums)).toBe(0);
    });
});

describe('Test isPrime', () => {
    test('Return false for non-primes', () => {
        expect(isPrime(0)).toBe(false);
        expect(isPrime(1)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(95)).toBe(false);
    });
    test('Return true for primes', () => {
        expect(isPrime(3)).toBe(true);
        expect(isPrime(11)).toBe(true);
        expect(isPrime(73)).toBe(true);
    });
});
