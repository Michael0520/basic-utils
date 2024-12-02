/**
 * Drop Right While - 從陣列尾部開始移除元素
 *
 * @description
 * 建立一個新陣列，從尾部開始移除元素，直到 predicate 回傳 false 為止。
 *
 * 題目講解：
 * 1. 給定一個陣列和一個判斷函式 (predicate)
 * 2. 從陣列的右側開始，移除所有符合 predicate 條件的元素
 * 3. 一旦遇到不符合條件的元素就停止移除
 * 4. 回傳剩餘的元素陣列
 *
 * 題目目標：
 * 1. 不修改原始陣列（immutable）
 * 2. predicate 函式需接收三個參數：value, index, array
 * 3. 需要處理各種邊界情況（空陣列、全符合、全不符合）
 * 4. 支援泛型型別
 *
 * 解題流程：
 * 1. 使用 toReversed() 反轉陣列
 * 2. 使用 findIndex 找到第一個不符合條件的元素
 * 3. 根據找到的索引決定要保留多少原始陣列的元素
 *
 * 時間複雜度：O(n)，其中 n 是陣列長度
 * 空間複雜度：O(n)，需要建立反轉的陣列副本
 *
 * @param array - 要處理的陣列
 * @param predicate - 判斷函式，接收三個參數 (value, index, array)
 * @returns 回傳一個新陣列，包含未被移除的元素
 *
 * @example
 * dropRightWhile([1, 2, 3, 4, 5], x => x > 3) // [1, 2, 3]
 * dropRightWhile([1, 2, 3], x => x < 6) // []
 * dropRightWhile([1, 2, 3, 4, 5], x => x > 6) // [1, 2, 3, 4, 5]
 */

export function dropRightWhile<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] {
  // 使用 toReversed() 反轉陣列
  const reversed = array.toReversed();

  // 找到第一個不符合條件的元素索引
  // ! 用來反轉 predicate 的結果
  // 因為我們要找第一個「不符合」predicate 條件的元素
  // 所以當 predicate 回傳 true 時，代表要繼續移除該元素
  // 相反的，當 predicate 回傳 false 時，代表找到要保留的元素
  const firstValidIndex = reversed.findIndex((value, index) =>
    !predicate(array[array.length - 1 - index], array.length - 1 - index, array)
  );

  // 如果找不到不符合條件的元素，回傳空陣列
  // 否則回傳到該位置的切片
  return firstValidIndex === -1
    ? []
    : array.slice(0, array.length - firstValidIndex);
}
