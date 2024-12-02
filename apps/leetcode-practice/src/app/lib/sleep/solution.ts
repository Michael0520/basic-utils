/**
 * 基本版本：簡單的 Promise 包裝
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 增強版本：支援傳遞值
 */
export const sleepWithValue = <T = void>(ms: number, value?: T): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(value as T), ms));
};

/**
 * 可取消版本：支援取消操作
 * 使用 AbortController 實現更優雅的取消機制
 */
export interface CancellableSleep {
  promise: Promise<void>;
  cancel: () => void;
}

export const cancellableSleep = (ms: number): CancellableSleep => {
  const abortController = new AbortController();
  const { signal } = abortController;

  const promise = new Promise<void>((resolve, reject) => {
    signal.addEventListener('abort', () => {
      reject(new Error('Sleep cancelled'));
    });

    setTimeout(() => {
      if (!signal.aborted) {
        resolve();
      }
    }, ms);
  });

  return {
    promise,
    cancel: () => abortController.abort()
  };
};