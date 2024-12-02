/**
 * 解題思路：
 * 1. 這是一道考察閉包(Closure)的題目
 * 2. 需要一個函數能夠記住上一次的狀態
 * 3. 使用閉包特性，讓內部函數能夠訪問並修改外部函數的變量
 */

// Solution 1: 基本實現
// 優點：邏輯清晰，容易理解
// 缺點：程式碼較長
export const makeCounter = (initialValue = 0) => {
    // 使用閉包特性，保存計數器的狀態
    let count = initialValue;

    // 返回一個箭頭函數，每次調用時：
    // 1. 返回當前值
    // 2. 將計數器加1
    return () => {
        const currentCount = count;
        count += 1;
        return currentCount;
    }
}

// Solution 2: 簡潔實現
// 優點：代碼簡潔，使用後綴運算符
// 缺點：可能需要解釋後綴運算符的運作方式
export const makeCounter2 = (initialValue = 0) => {
    let currentValue = initialValue;

    // 使用箭頭函數使代碼更簡潔
    return () => currentValue++;
}
