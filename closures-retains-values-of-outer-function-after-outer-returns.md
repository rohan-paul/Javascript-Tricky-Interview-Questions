Lets look at this function

```js
function outer() {
  var b = 10
  function inner() {
    var a = 20
    console.log(a + b)
  }
  return inner
}

/*
Here we have two functions:

an outer function outer which has a variable b, and returns the inner function
an inner function inner which has its variable called a, and accesses an outer variable b, within its function body
The scope of variable b is limited to the outer function, and the scope of variable a is limited to the inner function.

Let us now invoke the outer() function, and store the result of the outer() function in a variable X
 */

var X = outer()
```

Since the variables X is functions, we can **execute** them. In JavaScript, a function can be executed by adding **()** after the function name, such as **X()**.

When we execute X(), we are essentially executing the `inner` function.

If I run < console.log(X()) > the output will be below

30
undefined

So the closure function **inner**() is getting the value of **b = 10** from its enclosing **outer()** function ever after **outer()** function has returned.
