type GenericFunction = (...args: any[]) => any;

/**
 * V1: 暴力解 - 使用字串解析
 */
export function functionLengthV1(fn: GenericFunction): number {
  if (typeof fn !== 'function') {
    throw new Error('Input must be a function');
  }
  const fnStr = fn.toString();
  const paramStr = fnStr.slice(
    fnStr.indexOf('(') + 1,
    fnStr.indexOf(')')
  );
  return paramStr.trim() ? paramStr.split(',').length : 0;
}

/**
 * V2: 優化解 - 使用內建屬性
 */
export function functionLengthV2(fn: GenericFunction): number {
  if (typeof fn !== 'function') {
    throw new Error('Input must be a function');
  }
  return fn.length;
}

// 使用優化解作為主要實作
export const functionLength = functionLengthV2;

// 測試案例
// function foo() {}
// function bar(a) {}
// function baz(a, b) {}
// function qux(a, b, c) {}
// function quux(a, b, c, d) {}
// function quuz(a, b, c, d, e) {}

// console.log(functionLength(foo));   // 0
// console.log(functionLength(bar));   // 1
// console.log(functionLength(baz));   // 2
// console.log(functionLength(qux));   // 3
// console.log(functionLength(quux));  // 4
// console.log(functionLength(quuz));  // 5
