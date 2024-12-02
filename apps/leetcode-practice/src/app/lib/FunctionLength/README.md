# Function Length

Implement a function **`clamp(number, lower, upper)`** to restrict a number within the inclusive **`lower`** and **`upper`** bounds.

Implement a function **`functionLength`**, to return the number of parameters a function expects. Note that this is a static value defined by the function, not the number of arguments the function is called with (which is determined by **`arguments.length`**)

P.S. Practically, there's no need for this function since it is a simple wrapper. However, it is useful to know how to determine the number of parameters a function expects, which is useful for questions like [**Curry II**](https://www.greatfrontend.com/zh-CN/questions/javascript/curry-ii).

```jsx
function foo() {}
function bar(a) {}
function baz(a, b) {}

functionLength(foo); // 0
functionLength(bar); // 1
functionLength(baz); // 2
```

## **Resources**

- [**Function: length | MDN**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)