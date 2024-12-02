/**
 * Difference 函數實現
 *
 * 題目描述：
 * 實現一個函數，該函數創建一個新陣列，包含存在於第一個陣列但不存在於第二個陣列中的值
 *
 * 題目目標：
 * 1. 使用 SameValueZero 進行相等性比較
 * 2. 保持原始陣列的順序
 * 3. 正確處理特殊值（undefined, null）
 */

/**
 * 解法一：暴力解（Brute Force）
 * 時間複雜度：O(n * m)，其中 n 是 array 長度，m 是 values 長度
 * 空間複雜度：O(n)，用於存儲結果陣列
 *
 * 解題思路：
 * 1. 直接使用雙重迴圈比較每個元素
 * 2. 使用 includes() 方法進行值的比較
 */
export const differenceV1 = (array: unknown[], values: unknown[]): unknown[] => {

    if (!array || array.length === 0) return [];
    if (!values || values.length === 0) return array;

    const result = array.filter((item)=> !values.includes(item))

  return result
}

/**
 * 解法二：優化解（使用 Set）
 * 時間複雜度：O(n + m)，其中 n 是 array 長度，m 是 values 長度
 * 空間複雜度：O(m)，用於存儲 Set
 *
 * 解題思路：
 * 1. 將 values 轉換為 Set 以優化查找效率
 * 2. 使用 Set.has() 方法進行 O(1) 時間複雜度的查找
 * 3. 利用 Set 內建的 SameValueZero 比較機制
 */
export function differenceV2(array: any[], values: any[]): any[] {
  // 處理邊界情況
  if (!array || array.length === 0) return [];
  if (!values || values.length === 0) return array;

  // 將 values 轉換為 Set
  const excludeSet = new Set(values);

  // 使用 Set.has() 進行高效查找
  return array.filter(item => !excludeSet.has(item));
}
