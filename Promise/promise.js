class MyPromise {
  //constructor accepts a callback funtion and calls it imidietly with resolve and reject methods as parameters
  constructor(executor) {
    //u can change private fileds to # intead of _
    this._state = "pending";
    this._value = undefined;
    this._reason = undefined;
    this._onFulfilledCallbacks = [];
    this._onRejectedCallbacks = [];

    executor(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value) {
    //if the status is not pending it means it's already fufilled or rejected and we return undefiend and exit the function
    if (this._state !== "pending") {
      return;
    }
    this._state = "fulfilled";
    this._value = value;
    //if you setTimeout without dilay parameter
    //it will remove function from the main execution stack and put it in task stack,
    //make it asynchronious
    setTimeout(() => {
      for (const callback of this._onFulfilledCallbacks) {
        callback(value);
      }
    });
  }
  reject(reason) {
    if (this._state !== "pending") {
      return;
    }
    this._state = "rejected";
    this._reason = reason;
    setTimeout(() => {
      for (const callback of this._onRejectedCallbacks) {
        callback(reason);
      }
    });
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this._state === "pending") {
        this._onFulfilledCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const result = onFulfilled(value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          });
        });
        this._onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              const result = onRejected(reason);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          });
        });
      } else {
        setTimeout(() => {
          try {
            if (this._state === "fulfilled") {
              const result = onFulfilled(this._value);
              resolve(result);
            } else {
              const result = onRejected(this._reason);
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  isFulfilled() {
    return this._state === "fulfilled";
  }
  isRejected() {
    return this._state === "rejected";
  }
}

// Usage of the MyPromise class

function asyncTask(success) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}
asyncTask(true)
  .then((data) => {
    console.log("Success:", data);
    return "Next processing step";
  })
  .then((nextStep) => {
    console.log(nextStep);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
