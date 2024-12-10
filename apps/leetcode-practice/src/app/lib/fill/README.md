# Fill

Implement a function **`fill(array, value, [start=0], [end=array.length])`** that fills an array with values from **`start`** up to, but not including, **`end`**.

**Note**: This method mutates **`array`**

## **Arguments**

1. **`array`** *(Array)*: The array to fill.
2. **`value`** *(*)*: The value to fill **`array`** with.
3. **`[start=0]`** *(number)*: The start position.
4. **`[end=array.length]`** *(number)*: The end position.

## **Returns**

*(Array)*: Returns **`array`**.

## **Examples**

```typescript
fill([1, 2, 3], 'a'); // ['a', 'a', 'a']
fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]
fill([4, 6, 8, 10, 12], '*', -3, -1); // [4, 6, '*', '*', 12]
```

Make sure to handle negative indices and out of bound indices.

## **Resources**

- [**Lodash `_.fill`**](https://lodash.com/docs/#fill)
