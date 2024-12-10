/**
 * Fill 實作
 *
 * 題目敘述：
 * 實作一個 fill 函數，將陣列中指定範圍的元素填充為特定值。
 * - 需要修改原陣列（mutable）
 * - 支援負數索引（例如 -1 代表最後一個元素）
 * - 需要處理超出範圍的索引
 *
 * 題目目標：
 * 1. 實作 fill(array, value, start?, end?) 函數
 * 2. array: 要填充的陣列
 * 3. value: 要填入的值
 * 4. start: 起始位置，預設 0
 * 5. end: 結束位置（不含），預設為陣列長度
 *
 * 解題思路：
 * 1. 處理負數索引
 *    - 如果是負數，需要轉換成正數索引
 *    - 計算方式：array.length + 負數索引
 *    - 例如：
 *      array = [1,2,3,4,5], start = -2
 *      array.length = 5
 *      實際位置 = 5 + (-2) = 3
 *      所以會從索引 3 開始填充
 *
 * 2. 處理索引範圍
 *    a. 處理開始位置：
 *       - 如果小於 0，設為 0
 *       - 如果大於陣列長度，設為陣列長度
 *       - 使用 Math.max(0, Math.min(array.length, start))
 *
 *    b. 處理結束位置：
 *       - 如果小於 0，設為 0
 *       - 如果大於陣列長度，設為陣列長度
 *       - 使用 Math.max(0, Math.min(array.length, end))
 *
 * 3. 填充值
 *    - 使用 for 迴圈從 finalStart 到 finalEnd (不含)
 *    - 直接修改原陣列：array[i] = value
 *    - 不需要創建新陣列，因為是 mutable 操作
 *
 * 範例：
 * fill([1,2,3,4,5], '*', -2, -1)
 * 1. 處理負數：
 *    - start = -2 => 5 + (-2) = 3
 *    - end = -1 => 5 + (-1) = 4
 * 2. 確認範圍：
 *    - finalStart = 3
 *    - finalEnd = 4
 * 3. 填充：
 *    - [1,2,3,*,5]
 */

export function fill<T>(
  array: T[],
  value: T,
  start = 0,
  end = array.length
): T[] {

  const actualStart = start < 0 ? array.length + start : start;
  const actualEnd = end < 0 ? array.length + end : end;

  const finalStart = Math.max(0, Math.min(array.length, actualStart));
  const finalEnd = Math.max(0, Math.min(array.length, actualEnd));

  for (let i = finalStart; i < finalEnd; i++) {
    array[i] = value;
  }

  return array;
}


