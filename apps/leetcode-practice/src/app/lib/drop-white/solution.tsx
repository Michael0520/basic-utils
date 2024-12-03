/**
 * Drop While
 *
 * 實作一個 dropWhile 函數，該函數從陣列開頭開始移除元素，直到 predicate 回傳 false 為止。
 * 函數不應該修改原始陣列。
 *
 * 解題思路:
 * 1. 使用 findIndex 找出第一個不符合 predicate 條件的元素索引
 * 2. 如果找不到任何元素不符合條件(findIndex 回傳 -1)，則回傳空陣列
 * 3. 否則從該索引處切割陣列並回傳
 *
 * 時間複雜度: O(n) - 最差情況需要遍歷整個陣列
 * 空間複雜度: O(n) - 需要建立新的陣列來存放結果
 *
 * @param array - 要處理的陣列
 * @param predicate - 每次迭代呼叫的函數，接收三個參數：(value, index, array)
 * @returns 回傳處理後的新陣列，包含從第一個不符合 predicate 條件的元素到陣列結尾的所有元素
 * @throws {TypeError} 當輸入不是陣列或 predicate 不是函數時拋出錯誤
 *
 * @example
 * dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
 * dropWhile([1, 2, 3], (value) => value < 6); // => []
 */

type PredicateFunction<T> = (value: T, index: number, array: T[]) => boolean;

export const dropWhile = <T,>(array: T[], predicate: PredicateFunction<T>): T[] => {
  const dropIndex = array.findIndex((value, index, arr) => {
    return !predicate(value, index, arr);
  });
  return dropIndex === -1 ? [] : array.slice(dropIndex);
};
