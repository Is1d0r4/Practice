function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    obj1 == null ||
    typeof obj1 !== "object" ||
    obj2 == null ||
    typeof obj2 !== "object"
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  //   return keys1.every((key) => {
  //     keys2.includes(key) && deepEqual(obj1[key], obj2[key]);
  //   });

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 2,
    e: 3,
  },
};
const obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 2,
    e: 3,
  },
};

console.log(deepEqual(obj1, obj2));
