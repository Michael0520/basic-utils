import { sleep, sleepWithValue, cancellableSleep } from '../src/app/lib/sleep/solution';

describe('Sleep Function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Basic sleep', () => {
    it('should wait for the specified time', async () => {
      const promise = sleep(1000);
      jest.runAllTimers();
      await promise;
    });

    it('should work with zero delay', async () => {
      const promise = sleep(0);
      jest.runAllTimers();
      await expect(promise).resolves.toBeUndefined();
    });

    it('should handle negative delay', async () => {
      const promise = sleep(-100);
      jest.runAllTimers();
      await expect(promise).resolves.toBeUndefined();
    });
  });

  describe('Sleep with value', () => {
    it('should return the provided value after delay', async () => {
      const value = 'test';
      const promise = sleepWithValue(1000, value);
      jest.runAllTimers();
      const result = await promise;
      expect(result).toBe(value);
    });

    it('should return undefined when no value provided', async () => {
      const promise = sleepWithValue(1000);
      jest.runAllTimers();
      const result = await promise;
      expect(result).toBeUndefined();
    });

    it('should work with different value types', async () => {
      const promises = [
        sleepWithValue(1000, 42),
        sleepWithValue(1000, { key: 'value' }),
        sleepWithValue(1000, [1, 2, 3])
      ];
      
      jest.runAllTimers();
      
      const [num, obj, arr] = await Promise.all(promises);
      expect(num).toBe(42);
      expect(obj).toEqual({ key: 'value' });
      expect(arr).toEqual([1, 2, 3]);
    });
  });

  describe('Cancellable sleep', () => {
    it('should resolve if not cancelled', async () => {
      const { promise } = cancellableSleep(1000);
      jest.advanceTimersByTime(1000);
      await expect(promise).resolves.toBeUndefined();
    });

    it('should reject immediately when cancelled', async () => {
      const sleeper = cancellableSleep(1000);
      
      // 創建一個 Promise 來處理取消操作
      const cancelPromise = Promise.resolve().then(() => {
        sleeper.cancel();
      });

      // 等待取消操作完成
      await cancelPromise;
      
      await expect(sleeper.promise).rejects.toThrow('Sleep cancelled');
    });

    it('should reject when cancelled during sleep', async () => {
      const sleeper = cancellableSleep(1000);
      
      // 在 500ms 後取消
      setTimeout(() => {
        sleeper.cancel();
      }, 500);

      jest.advanceTimersByTime(500);
      
      await expect(sleeper.promise).rejects.toThrow('Sleep cancelled');
    });

    it('should handle multiple cancellations gracefully', async () => {
      const sleeper = cancellableSleep(1000);
      
      sleeper.cancel();
      sleeper.cancel(); // 第二次取消不應該拋出錯誤
      
      await expect(sleeper.promise).rejects.toThrow('Sleep cancelled');
    });
  });
});
