const arr = [10, 20, 30, 40]

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log("Index: " + i + ", element : " + arr[i])
  }, 1000)
}

/* output -

Index: 4, element : undefined
Index: 4, element : undefined
Index: 4, element : undefined
Index: 4, element : undefined

*/
