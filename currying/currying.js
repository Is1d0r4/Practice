function curry(func) {
  return function curried(...args) {
    if (func.lengh === args.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.con);
      };
    }
  };
}
