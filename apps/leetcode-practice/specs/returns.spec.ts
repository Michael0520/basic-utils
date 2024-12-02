import { mean, meanBruteForce } from '../src/app/lib/returns/solution';

describe('Mean Function Tests', () => {
    // 測試兩種實作方法
    const implementations = [
        { name: 'Optimized mean', fn: mean },
        { name: 'Brute force mean', fn: meanBruteForce }
    ];

    implementations.forEach(({ name, fn }) => {
        describe(name, () => {
            // 測試基本案例
            it('should calculate mean of positive numbers correctly', () => {
                expect(fn([4, 2, 8, 6])).toBe(5);
                expect(fn([1, 2, 3, 4])).toBe(2.5);
            });

            // 測試小數結果
            it('should handle decimal results correctly', () => {
                expect(fn([1, 2, 2])).toBeCloseTo(1.6666666666666667);
            });

            // 測試單一元素陣列
            it('should handle array with single element', () => {
                expect(fn([5])).toBe(5);
            });

            // 測試負數
            it('should handle negative numbers', () => {
                expect(fn([-1, -2, -3, -4])).toBe(-2.5);
                expect(fn([-2, 2])).toBe(0);
            });

            // 測試零
            it('should handle array with zeros', () => {
                expect(fn([0, 0, 0])).toBe(0);
                expect(fn([1, 0, -1])).toBe(0);
            });

            // 測試空陣列
            it('should return NaN for empty array', () => {
                expect(fn([])).toBeNaN();
            });

            // 測試大數字
            it('should handle large numbers', () => {
                expect(fn([1000000, 2000000, 3000000])).toBe(2000000);
            });
        });
    });
}); 