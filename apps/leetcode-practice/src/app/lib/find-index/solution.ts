/**
 * 題目敘述：
 * 找出陣列中第一個符合條件的元素位置。
 * 可以指定從哪個位置開始找（預設從頭開始）。
 *
 * 範例：
 * findIndex([1,2,3], x => x > 2)    // 找到 3，回傳位置 2
 * findIndex([1,2,3], x => x > 5)    // 找不到，回傳 -1
 * findIndex([1,2,3], x => x > 1, 2) // 從位置 2 開始找，找到 3，回傳位置 2
 */
export function findIndex<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  fromIndex = 0
): number {
  let startAt = fromIndex;

  // 處理負數 index
  if (startAt < 0) {
    startAt = array.length + startAt;
  }

  if (startAt < 0) startAt = 0; // 如果 startAt 小於 0，則設為 0
  if (startAt >= array.length) return -1; // 如果 startAt 大於或等於 array.length，則回傳 -1

  // 從 startAt 開始尋找, 直到找到符合條件的元素
  for (let i = startAt; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  // 如果沒有找到符合條件的元素，則回傳 -1
  return -1;
}
