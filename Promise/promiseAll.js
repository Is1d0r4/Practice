function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = new Array(promises.length);
    let count = 0;
    promises.forEach((p, index) => {
      p.then((data) => {
        result[index] = data;
        count++;
        if (count === promises.length) {
          resolve(result);
        }
      }).catch(reject);
    });
  });
}

function promiseOne(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
}

function promiseTwo(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}
function promiseTree(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 3000);
  });
}

promiseAll([promiseOne(true), promiseTwo(true), promiseTree(true)]).then(
  (data) => {
    console.log(data);
  }
);
