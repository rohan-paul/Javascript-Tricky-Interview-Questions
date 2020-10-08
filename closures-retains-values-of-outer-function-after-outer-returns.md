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

#### Let’s see step-by-step what happens when the outer() function is first invoked:

- 1. Variable b is created, its scope is limited to the outer() function, and its value is set to 10.
- 2. The next line is a function declaration, so nothing to execute.
- 3. On the last line, return inner looks for a variable called inner, finds that this variable inner is actually a function, and so returns the entire body of the function inner.
- 4. Note that the return statement does not execute the inner function — a function is executed only when followed by () — , but rather the return statement returns the entire body of the function.
- 5. The contents returned by the return statement are stored in X.

Thus, X will store the following:

function inner() {
var a=20;
console.log(a+b);
}

This can be easily verified by adding the following to the JavaScript code:

```js
console.log(typeof X) //X is of type function
```

- 6. Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.
- 7. This last part is important to understand. Once a function completes its execution, any variables that were defined inside the function scope cease to exist.

The lifespan of a variable defined inside of a function is the lifespan of the function execution.

What this means is that in **console.log(a+b)**, the variable **b** exists only during the execution of the the **outer()** function. Once the outer function has finished execution, the variable b no longer exists.

This is the most important point to realize. The variables inside the functions only come into existence when the function is running, and cease to exist once the functions completes execution.

##### Now see the main point of this exercise - that how a closure function retains its enclosing function's variable values, even after the enclosing function has returned.

- A. When we execute X(), we are essentially executing the `inner` function.

- B. If I run < console.log(X()) > the output will be below

```
30
undefined
```

- C. So the closure function **inner**() is getting the value of **b = 10** from its enclosing **outer()** function ever after **outer()** function has returned.
