# **Drop While**

Implement a function **`dropWhile(array, predicate)`** that creates a slice of **`array`** excluding elements dropped from the beginning. Elements are dropped until **`predicate`** returns falsey. Your function should not modify the original array.

## Arguments

1. **`array`** *(Array)*: The array to query.
2. **`predicate`** *(Function)*: The function invoked per iteration. The function is invoked with three arguments: *(value, index, array)*.

### **Returns**

*(Array)*: Returns the slice of **`array`**.

## **Examples**

```jsx
dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
dropWhile([1, 2, 3], (value) => value < 6); // => []
```

Note that Lodash's **`dropWhile`** utility also allows you to pass an optional **`thisArg`** parameter to bind **`this`** inside the predicate function, but for this exercise, you can ignore that parameter.

## **Resources**

- [**Lodash `_.dropWhile`**](https://lodash.com/docs/#dropWhile)
