import { compact } from './solution';

describe('compact', () => {
  it('應該移除所有 falsey 值', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    const expected = [1, 2, 3];
    expect(compact(input)).toEqual(expected);
  });

  it('應該保留所有 truthy 值', () => {
    const input = ['hello', 123, [], {}, () => { /* empty */ }];
    expect(compact(input)).toEqual(input);
  });

  it('應該處理空陣列', () => {
    expect(compact([])).toEqual([]);
  });

  it('應該處理只包含 falsey 值的陣列', () => {
    const input = [false, null, 0, '', undefined, NaN];
    expect(compact(input)).toEqual([]);
  });

  it('應該處理包含特殊數值的陣列', () => {
    const input = [-1, 0, 1, -Infinity, Infinity];
    const expected = [-1, 1, -Infinity, Infinity];
    expect(compact(input)).toEqual(expected);
  });

  it('不應修改原始陣列', () => {
    const input = [0, 1, false, 2];
    const original = [...input];
    compact(input);
    expect(input).toEqual(original);
  });
});
