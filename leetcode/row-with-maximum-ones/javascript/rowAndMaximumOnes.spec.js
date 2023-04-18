const rowAndMaximumOnes = require('./rowAndMaximumOnes');
describe('Row and Max Ones test', () => {
    test('example 1', () => {
        let mat = [
            [0, 1],
            [1, 0],
        ];
        expect(rowAndMaximumOnes(mat)).toEqual([0, 1]);
    });
    test('example 2', () => {
        let mat = [
            [0, 0, 0],
            [0, 1, 1],
        ];
        expect(rowAndMaximumOnes(mat)).toEqual([1, 2]);
    });
    test('example 3', () => {
        let mat = [
            [0, 0],
            [1, 1],
            [0, 0],
        ];
        expect(rowAndMaximumOnes(mat)).toEqual([1, 2]);
    });
    test('example 4', () => {
        let mat = [[0], [0]];
        expect(rowAndMaximumOnes(mat)).toEqual([0, 0]);
    });
});
