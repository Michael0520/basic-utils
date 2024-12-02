import { functionLength, functionLengthV1, functionLengthV2 } from '../src/app/lib/FunctionLength/solution';

describe('Function Length', () => {
  // 基本測試案例
  describe('Basic Function Cases', () => {
    function noParams() { return undefined; }
    function oneParam(a: number) { return a; }
    function twoParams(a: number, b: string) { return `${a}${b}`; }
    
    test('should return correct parameter count for basic functions', () => {
      expect(functionLength(noParams)).toBe(0);
      expect(functionLength(oneParam)).toBe(1);
      expect(functionLength(twoParams)).toBe(2);
    });
  });

  // 箭頭函數測試
  describe('Arrow Function Cases', () => {
    const arrowNoParams = () => undefined;
    const arrowOneParam = (a: number) => a;
    const arrowTwoParams = (a: number, b: string) => a + b;

    test('should handle arrow functions correctly', () => {
      expect(functionLength(arrowNoParams)).toBe(0);
      expect(functionLength(arrowOneParam)).toBe(1);
      expect(functionLength(arrowTwoParams)).toBe(2);
    });
  });

  // 特殊情況測試
  describe('Special Cases', () => {
    function withDefaultParam(a: number, b = 10) { return a + b; }
    function withRestParams(a: number, ...rest: number[]) { return [a, ...rest]; }
    function withDestructuring({a, b}: {a: number, b: number}) { return a + b; }

    test('should handle special parameter cases', () => {
      expect(functionLength(withDefaultParam)).toBe(1);
      expect(functionLength(withRestParams)).toBe(1);
      expect(functionLength(withDestructuring)).toBe(1);
    });
  });

  // 比較 V1 和 V2 實作
  describe('Implementation Comparison', () => {
    function testFunc(a: number, b: string) { return `${a}${b}`; }

    test('both implementations should return same results', () => {
      expect(functionLengthV1(testFunc)).toBe(functionLengthV2(testFunc));
      expect(functionLengthV1(testFunc)).toBe(2);
    });
  });

  // 錯誤處理測試
  describe('Error Handling', () => {
    test('should handle invalid inputs gracefully', () => {
      expect(() => functionLength(null as never)).toThrow();
      expect(() => functionLength(undefined as never)).toThrow();
      expect(() => functionLength(123 as never)).toThrow();
      expect(() => functionLength({} as never)).toThrow();
      expect(() => functionLength([] as never)).toThrow();
      expect(() => functionLength('function' as never)).toThrow();
    });
  });

  // 複雜函數測試
  describe('Complex Function Cases', () => {
    class TestClass {
      method(a: number, b: string) { return `${a}${b}`; }
      static staticMethod(x: number) { return x * 2; }
    }

    const testClass = new TestClass();

    test('should handle class methods correctly', () => {
      expect(functionLength(testClass.method)).toBe(2);
      expect(functionLength(TestClass.staticMethod)).toBe(1);
    });

    test('should handle nested functions', () => {
      function outer(a: number) {
        function inner(b: string, c: number) { return `${b}${c}`; }
        return inner;
      }

      expect(functionLength(outer)).toBe(1);
      expect(functionLength(outer(1))).toBe(2);
    });
  });

  // 效能測試
  describe('Performance', () => {
    test('should execute within reasonable time', () => {
      const start = performance.now();
      for (let i = 0; i < 1000; i++) {
        functionLength((a: number, b: string) => `${a}${b}`);
      }
      const end = performance.now();
      
      expect(end - start).toBeLessThan(100);
    });
  });
}); 