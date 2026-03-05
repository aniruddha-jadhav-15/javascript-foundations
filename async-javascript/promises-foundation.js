// Promises – Core Foundation

// Basic Promise Example

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});

// Practice 1

console.log("Start");

const promise2 = new Promise((resolve) => {
  console.log("Inside Promise");
  resolve("Success");
});

promise2.then((data) => {
  console.log(data);
});

console.log("End");

// Practice 2

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("API Done");
  }, 1000);
});

console.log("Request sent");

promise3.then((data) => {
  console.log(data);
});

console.log("Continue running");
