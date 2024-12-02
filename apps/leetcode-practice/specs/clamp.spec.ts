import { clamp } from '../src/app/lib/clamp/solution';

describe('clamp', () => {
    // 基本功能測試
    describe('basic functionality', () => {
        it('should return the same value when within bounds', () => {
            expect(clamp(3, 0, 5)).toBe(3);
            expect(clamp(0, -1, 1)).toBe(0);
        });

        it('should return lower bound when value is too small', () => {
            expect(clamp(-10, -3, 5)).toBe(-3);
            expect(clamp(-100, 0, 10)).toBe(0);
        });

        it('should return upper bound when value is too large', () => {
            expect(clamp(10, -5, 5)).toBe(5);
            expect(clamp(1000, 0, 100)).toBe(100);
        });
    });

    // 邊界值測試
    describe('edge cases', () => {
        it('should handle equal bounds', () => {
            expect(clamp(5, 1, 1)).toBe(1);
            expect(clamp(-1, 1, 1)).toBe(1);
            expect(clamp(2, 1, 1)).toBe(1);
        });

        it('should handle value equal to bounds', () => {
            expect(clamp(1, 1, 5)).toBe(1);  // equal to lower bound
            expect(clamp(5, 1, 5)).toBe(5);  // equal to upper bound
        });

        it('should handle zero bounds', () => {
            expect(clamp(1, 0, 0)).toBe(0);
            expect(clamp(-1, 0, 0)).toBe(0);
        });
    });

    // 特殊數值測試
    describe('special numbers', () => {
        it('should handle negative numbers', () => {
            expect(clamp(-5, -10, -1)).toBe(-5);
            expect(clamp(-15, -10, -1)).toBe(-10);
            expect(clamp(0, -10, -1)).toBe(-1);
        });

        it('should handle decimal numbers', () => {
            expect(clamp(1.5, 1, 2)).toBe(1.5);
            expect(clamp(0.5, 1, 2)).toBe(1);
            expect(clamp(2.5, 1, 2)).toBe(2);
        });
    });

    // 極端值測試
    describe('extreme values', () => {
        it('should handle Number.MAX_VALUE', () => {
            expect(clamp(Number.MAX_VALUE, 0, 100)).toBe(100);
        });

        it('should handle Number.MIN_VALUE', () => {
            expect(clamp(Number.MIN_VALUE, 1, 100)).toBe(1);
        });

        it('should handle Infinity', () => {
            expect(clamp(Infinity, -100, 100)).toBe(100);
            expect(clamp(-Infinity, -100, 100)).toBe(-100);
        });
    });
});
