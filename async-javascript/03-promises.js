/*
Topic: Promises and the Microtask Queue

Promise callbacks are executed in the microtask queue.
Microtasks always run before macrotasks.
*/

// Problem 1

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Output:
Start
End
Promise
*/

// Problem 2

console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

/*
Output:
1
4
2
3
*/

// Problem 3

console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("P1");
  })
  .then(() => {
    console.log("P2");
  });

console.log("End");

/*
Output:
Start
End
P1
P2
*/

// Problem 4

console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

console.log("3");

Promise.resolve().then(() => {
  console.log("4");
});

/*
Output:
1
3
2
4
*/

// Problem 5

console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("A");
    return Promise.resolve();
  })
  .then(() => {
    console.log("B");
  });

console.log("End");

/*
Output:
Start
End
A
B
*/
