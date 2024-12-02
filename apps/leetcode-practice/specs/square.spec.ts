import '../src/app/lib/square/solution';

describe('Array.prototype.square', () => {
  // 基本功能測試
  test('should square all numbers in array', () => {
    const arr1 = [-2];
    const arr2 = [1, 2, 3, 4];
    expect(arr1.square()).toEqual([4]);
    expect(arr2.square()).toEqual([1, 4, 9, 16]);
  });

  // 空陣列測試
  test('should handle empty array', () => {
    const arr: number[] = [];
    expect(arr.square()).toEqual([]);
  });

  // 零和負數測試
  test('should handle zero and negative numbers', () => {
    const arr = [0, -1, -2, 2];
    expect(arr.square()).toEqual([0, 1, 4, 4]);
  });

  // 型別檢查測試
  test('should throw TypeError for non-number elements', () => {
    const invalidArr1 = ['1'];
    const invalidArr2 = [null];
    expect(() => (invalidArr1 as unknown[]).square()).toThrow(TypeError);
    expect(() => (invalidArr2 as unknown[]).square()).toThrow(TypeError);
  });

  // 確保原陣列不被修改
  test('should not mutate original array', () => {
    const arr = [1, 2, 3];
    arr.square();
    expect(arr).toEqual([1, 2, 3]);
  });
});