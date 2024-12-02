/**
 * 思考過程:
 * 1. 計算平均值的公式是: 所有數字的總和 / 數字的個數
 * 2. 需要處理空陣列的情況，返回 NaN
 * 3. 可以用兩種方式解決:
 *    - 暴力解: 使用 for 迴圈手動加總
 *    - 優化解: 使用 reduce 方法一次完成加總
 */

// 暴力解 - 使用傳統 for 迴圈
export const meanBruteForce = (array: number[]): number => {
    // 處理空陣列的情況
    if (array.length === 0) {
        return NaN;
    }

    // 使用 for 迴圈手動計算總和
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    // 返回平均值
    return sum / array.length;
}

// 優化解 - 使用 reduce 方法
export const mean = (array: number[]): number => {
    const propsLength = array.length;

    if (propsLength === 0) {
        return NaN;
    }

    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const average = sum / propsLength;

    return average;
}
