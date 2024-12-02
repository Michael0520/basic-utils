import { findDifferentNumPosition, findDifferentNumPositionV1 } from '../src/app/lib/find-parity-outlier/solution';

describe('findDifferentNumPosition', () => {
  describe('正常案例', () => {
    it('應該要找到偶數中的奇數', () => {
      expect(findDifferentNumPosition('2 4 7 8 10')).toBe(2);
      expect(findDifferentNumPosition('10 9 8 6 4 2')).toBe(1);
    });

    it('應該要找到奇數中的偶數', () => {
      expect(findDifferentNumPosition('1 3 4 5 7')).toBe(2);
      expect(findDifferentNumPosition('7 9 1 6 3 5')).toBe(3);
    });
  });

  describe('錯誤處理', () => {
    it('空字串應該要拋出錯誤', () => {
      expect(() => findDifferentNumPosition('')).toThrow('empty input');
    });

    it('少於3個數字應該要拋出錯誤', () => {
      expect(() => findDifferentNumPosition('1 2')).toThrow('insufficient length');
    });

    it('包含0應該要拋出錯誤', () => {
      expect(() => findDifferentNumPosition('1 0 3')).toThrow('contains zero');
    });

    it('數字太大應該要拋出錯誤', () => {
      expect(() => findDifferentNumPosition('1 1000000000 3')).toThrow('number too large');
    });
  });
});

describe('findDifferentNumPositionV1', () => {
  describe('正常案例', () => {
    it('應該要找到偶數中的奇數', () => {
      expect(findDifferentNumPositionV1('2 4 7 8 10')).toBe(2);
      expect(findDifferentNumPositionV1('10 9 8 6 4 2')).toBe(1);
    });

    it('應該要找到奇數中的偶數', () => {
      expect(findDifferentNumPositionV1('1 3 4 5 7')).toBe(2);
      expect(findDifferentNumPositionV1('7 9 1 6 3 5')).toBe(3);
    });
  });

  describe('錯誤處理', () => {
    it('空字串應該要拋出錯誤', () => {
      expect(() => findDifferentNumPositionV1('')).toThrow('empty case');
    });

    it('少於3個數字應該要拋出錯誤', () => {
      expect(() => findDifferentNumPositionV1('1 2')).toThrow('least case');
    });
  });
});