/**
 * Thought Process:
 * 
 * 1. Problem Analysis
 *    - Input is a string of integers separated by spaces
 *    - Need to find position (index) of number with different parity
 *    - All numbers except one have same parity (odd/even)
 *
 * 2. Edge Cases
 *    - Input string cannot be empty
 *    - Must have at least 3 numbers
 *
 * 3. Core Algorithm
 *    a. Determine majority parity
 *       - Only need to check first 3 numbers to determine if majority is odd/even
 *       - If 2 or more of first 3 numbers are even, majority is even
 *
 *    b. Find outlier
 *       - Use findIndex to locate first number with different parity
 *
 * 思考流程:
 *
 * 1. 問題分析
 *    - 輸入是一串以空格分隔的整數字串
 *    - 要找出不同奇偶性的數字位置(index)
 *    - 除了一個數字外，其他數字都是相同的奇偶性
 *
 * 2. 邊界條件處理
 *    - 輸入字串不能為空
 *    - 至少要有3個數字
 *
 * 3. 核心演算法
 *    a. 判斷多數的奇偶性
 *       - 只需檢查前3個數字就能確定多數是奇數還是偶數
 *       - 如果前3個數中有2個以上是偶數，則多數為偶數
 *
 *    b. 尋找異常值
 *       - 用 findIndex 找出第一個與多數奇偶性不同的數字位置
 */

export const findDifferentNumPositionV1 = (inputString: string): number => {
  // Constants
  const MIN_ELEMENTS = 3;
  const FIRST_N_ELEMENTS = 3;
  const MAJORITY_THRESHOLD = 2;

  // Error handling
  const validateInput = (nums: number[] | string) => {
    // 1. 檢查 null/undefined
    if (!nums) {
      throw new Error('empty case');
    }

    // 2. 檢查字串類型的輸入
    if (typeof nums === 'string') {
      if (nums.trim().length === 0) {
        throw new Error('empty case');
      }
      return; // 如果是字串類型，到這裡就返回
    }

    // 3. 檢查陣列類型的輸入
    if (nums.length === 0) {
      throw new Error('empty case');
    }
    if (nums.length < MIN_ELEMENTS) {
      throw new Error('least case');
    }
  };

  const isMajorityEven = (nums: number[]): boolean => {
    const firstThree = nums.slice(0, FIRST_N_ELEMENTS);
    const evenCount = firstThree.filter(num => num % 2 === 0).length;
    return evenCount >= MAJORITY_THRESHOLD;
  };

  const findOutlierPosition = (nums: number[], isEvenMajority: boolean): number => {
    return nums.findIndex(num => (num % 2 === 0) !== isEvenMajority);
  };

  // Main logic
  if (inputString.trim().length === 0) {
    throw new Error('empty case');
  }
  
  const nums = inputString.split(' ').map(Number);
  validateInput(nums);
  const isEvenMajority = isMajorityEven(nums);
  return findOutlierPosition(nums, isEvenMajority);
};

import { Either, ErrorMessage, Numbers } from './types';

// Constants
const MAX_NUMBER = 1e9;
const MIN_LENGTH = 3;

// Utility functions
// Left 代表錯誤的情況，E 是 Error 的縮寫，e 是錯誤訊息的值
// 例如: left('empty input') 會回傳 { _tag: 'Left', left: 'empty input' }
// never 代表不會有正確的值
const left = <E>(e: E): Either<E, never> => ({ _tag: 'Left', left: e });

// Right 代表正確的情況，A 是 Answer 的縮寫，a 是正確的值
// 例如: right(42) 會回傳 { _tag: 'Right', right: 42 }
// never 代表不會有錯誤訊息
const right = <A>(a: A): Either<never, A> => ({ _tag: 'Right', right: a });

// Pure functions for validation
const isNotEmpty = (input: string): Either<ErrorMessage, string> =>
  input?.trim() ? right(input.trim()) : left('empty input');

const parseNumbers = (input: string): Either<ErrorMessage, Numbers> => {
  try {
    const nums = input.split(/\s+/).map(Number);
    return nums.every(Number.isInteger)
      ? right(nums)
      : left('invalid number format');
  } catch {
    return left('invalid number format');
  }
};

const validateLength = (nums: Numbers): Either<ErrorMessage, Numbers> =>
  nums.length >= MIN_LENGTH ? right(nums) : left('insufficient length');

const validateRange = (nums: Numbers): Either<ErrorMessage, Numbers> => {
  if (nums.some((n) => n === 0)) return left('contains zero');
  if (nums.some((n) => n >= MAX_NUMBER)) return left('number too large');
  return right(nums);
};

// Core business logic
const determineParityMajority = (nums: Numbers): boolean => {
  const firstThree = nums.slice(0, 3);
  const evenCount = firstThree.filter((num) => num % 2 === 0).length;
  return evenCount >= 2;
};

const findOutlierIndex = (nums: Numbers, isEvenMajority: boolean): number =>
  nums.findIndex((num) => (num % 2 === 0) !== isEvenMajority);

// Function composition helper
const pipe =
  <A, B, C>(
    f: (a: A) => Either<ErrorMessage, B>,
    g: (b: B) => Either<ErrorMessage, C>
  ) =>
  (a: A): Either<ErrorMessage, C> => {
    const result = f(a);
    return result._tag === 'Left' ? result : g(result.right);
  };

// Main function
const findDifferentNumPosition = (input: string): number => {
  const validateInput = pipe(
    pipe(isNotEmpty, parseNumbers),
    pipe(validateLength, validateRange)
  );

  const result = validateInput(input);

  if (result._tag === 'Left') {
    throw new Error(result.left);
  }

  const nums = result.right;
  const isEvenMajority = determineParityMajority(nums);
  return findOutlierIndex(nums, isEvenMajority);
};

export { findDifferentNumPosition };
