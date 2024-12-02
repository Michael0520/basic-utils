/**
 * 題目說明：
 * 實作一個 compact 函數，用於移除陣列中所有的 falsey 值
 * falsey 值包括：false、null、0、''（空字串）、undefined 和 NaN
 *
 * 解題目標：
 * 1. 接收任意型別的陣列作為輸入
 * 2. 返回只包含 truthy 值的新陣列
 * 3. 不修改原始陣列
 *
 * 解題流程：
 * 1. 接收輸入陣列
 * 2. 遍歷陣列中的每個元素
 * 3. 判斷元素是否為 falsey 值
 * 4. 保留所有 truthy 值
 * 5. 返回新陣列
 *
 * 暴力解：
 * function compact(array: any[]): any[] {
 *   const result: any[] = [];
 *   for (let i = 0; i < array.length; i++) {
 *     if (array[i]) {
 *       result.push(array[i]);
 *     }
 *   }
 *   return result;
 * }
 *
 * 最佳解：
 * 使用 Array.filter(Boolean) 一行解決
 * - 優點：程式碼簡潔、易讀、效能佳
 * - 原理：Boolean 函數自動將 falsey 值轉為 false，truthy 值轉為 true
 *
 * @param array - 輸入陣列
 * @returns 只包含 truthy 值的新陣列
 *
 * 時間複雜度：O(n) - 需遍歷整個陣列一次
 * 空間複雜度：O(n) - 需要存儲過濾後的新陣列
 */
export const compact = (array: any[]): any[] => array.filter(item => !!item);
