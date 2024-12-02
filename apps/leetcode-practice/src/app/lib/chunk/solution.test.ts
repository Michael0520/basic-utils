import { chunk, chunkOptimized } from './solution';

describe('chunk function', () => {
    it('should split array into chunks of size 1 by default', () => {
        expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
    });

    it('should split array into chunks of specified size', () => {
        expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
        expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    });

    it('should handle empty array', () => {
        expect(chunk([], 2)).toEqual([]);
    });

    it('should handle size larger than array length', () => {
        expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });
});

describe('chunkOptimized function', () => {
    it('should split array into chunks of size 1 by default', () => {
        expect(chunkOptimized(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
    });

    it('should split array into chunks of specified size', () => {
        expect(chunkOptimized([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
        expect(chunkOptimized([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    });

    it('should handle empty array', () => {
        expect(chunkOptimized([], 2)).toEqual([]);
    });

    it('should handle size larger than array length', () => {
        expect(chunkOptimized([1, 2], 5)).toEqual([[1, 2]]);
    });
}); 