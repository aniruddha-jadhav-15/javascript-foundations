/*
Topic: setTimeout and the Macrotask Queue

setTimeout callbacks are handled by Web APIs and then
placed into the macrotask queue.
*/

// Problem 1

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

/*
Output:
1
3
2
*/

// Problem 2

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");

/*
Output:
A
C
B (after ~1 second)
*/

// Problem 3

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 0);

console.log("4");

/*
Output:
1
4
2
3
*/

// Problem 4

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

console.log("Middle");

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

/*
Output:
Start
Middle
End
Timeout 1
Timeout 2
*/

// Problem 5

console.log("1");

setTimeout(() => {
  console.log("2");

  setTimeout(() => {
    console.log("3");
  }, 0);
}, 0);

console.log("4");

/*
Output:
1
4
2
3
*/
