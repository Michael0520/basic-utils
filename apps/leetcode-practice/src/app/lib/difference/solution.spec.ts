import { differenceV1, differenceV2 } from './solution';

describe('Difference', () => {
  const testCases = [
    {
      name: '基本案例：從 [1, 2, 3] 中排除 [2, 3]',
      array: [1, 2, 3],
      values: [2, 3],
      expected: [1],
    },
    {
      name: '多個值排除：從 [1, 2, 3, 4] 中排除 [2, 3, 1]',
      array: [1, 2, 3, 4],
      values: [2, 3, 1],
      expected: [4],
    },
    {
      name: '完全排除：從 [1, 2, 3] 中排除 [2, 3, 1, 4]',
      array: [1, 2, 3],
      values: [2, 3, 1, 4],
      expected: [],
    },
    {
      name: '處理特殊值：包含 undefined',
      array: [1, undefined, 3],
      values: [1],
      expected: [undefined, 3],
    },
    {
      name: '邊界情況：空陣列',
      array: [],
      values: [1, 2, 3],
      expected: [],
    },
    {
      name: '邊界情況：空的排除陣列',
      array: [1, 2, 3],
      values: [],
      expected: [1, 2, 3],
    },
  ];

  describe('暴力解（Brute Force）', () => {
    testCases.forEach(({ name, array, values, expected }) => {
      it(name, () => {
        expect(differenceV1(array, values)).toEqual(expected);
      });
    });
  });

  describe('優化解（使用 Set）', () => {
    testCases.forEach(({ name, array, values, expected }) => {
      it(name, () => {
        expect(differenceV2(array, values)).toEqual(expected);
      });
    });
  });
});
