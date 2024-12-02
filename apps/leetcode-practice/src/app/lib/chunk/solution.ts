// 1. 題目理解：
// 我們需要實現一個函數 `chunk`，將一個數組分割成指定大小的組。
// 如果數組不能被均勻分割，最後一組將包含剩餘的元素。
// 該函數應返回一個新的數組，包含這些分組，且不應修改原始數組。

// 2. 目標：
// 創建一個函數 `chunk(array, [size=1])`，返回一個數組的數組（分組）。

// 3. 暴力解法（使用 ES6 語法和 reduce）：
// - 使用 `reduce` 方法來遍歷輸入數組。
// - 在每次迭代中，根據當前索引計算當前元素應該放入的分組。
// - 如果當前分組不存在，則創建一個新的分組。
// - 將當前元素推入對應的分組。

export const chunk = <T>(array: T[], size = 1): T[][] => {
    return array.reduce((result: T[][], item, index) => {
        const chunkIndex = Math.floor(index / size);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }
        result[chunkIndex].push(item);
        return result;
    }, []);
};

// 4. 優化解法（使用 ES6 和函數式編程）：
// - 使用 `Array.from` 創建一個分組的數組。
// - 使用 `Math.ceil(array.length / size)` 計算所需的分組數。
// - 使用 `Array.prototype.slice` 創建每個分組。

export const chunkOptimized = <T>(array: T[], size = 1): T[][] =>
    Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
        array.slice(i * size, i * size + size)
    );
