const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1 Success");
    reject("P1 Failed");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 Success");
    reject("P2 Failed");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3 Success");
    reject("P3 Failed");
  }, 2000);
});

const promiseSettled = Promise.allSettled([p1, p2, p3]); // Array of objects [{status,value/reason}]
const promiseRace = Promise.race([p1, p2, p3]); // First success/fail;
const promiseAll = Promise.all([p1, p2, p3]); // PASS: Array of all pass promises value; FAIL: 1st Fail
const promiseAnySuccess = Promise.any([p1, p2, p3]); // PASS: First success ; ALL FAIL: AggregateError: All promises were rejected

promiseAnySuccess
  .finally(() => {
    console.log("Promise Settled");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// fetch(" https://api.github.com/users/webdevwasim")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// TODO: Async/Await

async function getUser() {
  const data = await fetch(" https://api.github.com/users/webdevwasim");
  console.log(data);
  console.log("data");
  const res = await data.json();
  console.log(res);
  console.log("res");
}
// getUser();
