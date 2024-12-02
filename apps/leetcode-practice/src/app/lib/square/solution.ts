declare global {
  interface Array<T> {
    square(): number[];
  }
}

const square = (x: number): number => x ** 2;

const squareArray = (arr: number[]): number[] => {
  const isNumberArray = Array.isArray(arr) && arr.every(x => typeof x === 'number');
  if (!isNumberArray) {
    throw new TypeError('Array must contain only numbers');
  }
  return Array.from(arr).map(square);
};

Object.defineProperty(Array.prototype, 'square', {
  value: function() { return squareArray(this); }
});

// 這行 export {} 是必要的
// 因為 TypeScript 會把沒有任何 import/export 的檔案視為 script 而不是 module
// 加上空的 export 可以讓 TypeScript 把這個檔案當作 module 處理
// 這樣才能正確擴充全域的 Array interface
export {};
