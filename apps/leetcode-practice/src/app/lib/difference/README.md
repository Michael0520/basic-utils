# Difference

Implement a function **`difference(array, values)`** that creates an array of **`array`** values not included in the other given arrays using [**`SameValueZero`**](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.

## **Arguments**

1. **`array`** *(Array)*: The array to inspect.
2. **`values`** *(Array)*: The values to exclude.

## **Returns**

*(Array)*: Returns the new array of filtered values.

## **Examples**

```jsx
difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3]
```

## **Resources**

- [**Lodash `_.difference`**](https://lodash.com/docs/#difference)

---
