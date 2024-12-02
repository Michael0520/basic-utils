/**
 * 我會分享兩個版本的實作，從簡單到優化的思考過程:
 * 
 * 第一版: 直觀解法
 * - 直接使用 Math.max 和 Math.min
 * - 程式碼簡單易懂
 * - 適合快速解決問題
 */
export const clampV1 = (value: number, lower: number, upper: number): number => {
    const notTooSmall = Math.max(value, lower);
    return Math.min(notTooSmall, upper);
};

/**
 * 第二版: 函數式編程優化
 * - 使用 Functional Programming 概念
 * - 將邏輯拆分成可重用的小函數
 * - 使用 pipe pattern 提高可讀性和擴展性
 */
type NumberRange = {
    lower: number;
    upper: number;
};

const createRangeValidator = ({ lower, upper }: NumberRange) => {
    const pipe = (...fns: Array<(x: number) => number>) => 
        (x: number) => fns.reduce((v, f) => f(v), x);

    return pipe(
        (n: number) => Math.max(n, lower),
        (n: number) => Math.min(n, upper)
    );
};

export const clamp = (value: number, lower: number, upper: number): number => {
    const validator = createRangeValidator({ lower, upper });
    return validator(value);
};