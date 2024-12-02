import { dropRightWhile } from '../src/app/lib/drop-right-while/solution';

describe('dropRightWhile', () => {
  // 基本功能測試
  it('應該從右側移除符合條件的元素', () => {
    const input = [1, 2, 3, 4, 5];
    const result = dropRightWhile(input, x => x > 3);
    expect(result).toEqual([1, 2, 3]);
  });

  // 邊界情況測試
  it('當所有元素都符合條件時應該回傳空陣列', () => {
    const input = [1, 2, 3];
    const result = dropRightWhile(input, x => x < 6);
    expect(result).toEqual([]);
  });

  it('當沒有元素符合條件時應該回傳原陣列', () => {
    const input = [1, 2, 3, 4, 5];
    const result = dropRightWhile(input, x => x > 6);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  // 特殊情況測試
  it('應該處理空陣列', () => {
    const input: number[] = [];
    const result = dropRightWhile(input, x => x > 3);
    expect(result).toEqual([]);
  });

  it('應該處理只有一個元素的陣列', () => {
    const input = [1];
    const result = dropRightWhile(input, x => x > 0);
    expect(result).toEqual([]);
  });

  // 測試不同型別
  it('應該能處理字串陣列', () => {
    const input = ['a', 'b', 'c', 'd'];
    const result = dropRightWhile(input, x => x > 'b');
    expect(result).toEqual(['a', 'b']);
  });

  // 測試 predicate 函數的參數
  it('predicate 應該收到正確的參數', () => {
    const input = [1, 2, 3];
    const mockPredicate = jest.fn(() => true);

    dropRightWhile(input, mockPredicate);

    // 只檢查呼叫順序和參數
    expect(mockPredicate.mock.calls).toEqual([
      [3, 2, input],
      [2, 1, input],
      [1, 0, input]
    ]);
  });

  // 測試原陣列不被修改
  it('不應該修改原始陣列', () => {
    const input = [1, 2, 3, 4, 5];
    const original = [...input];
    dropRightWhile(input, x => x > 3);
    expect(input).toEqual(original);
  });
});
