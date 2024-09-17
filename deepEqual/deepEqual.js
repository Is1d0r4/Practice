const cache = new Map();

function deepEqual(obj1, obj2) {
  // Create a unique key for the cache based on the objects being compared
  const cacheKey = JSON.stringify([obj1, obj2]);

  // Check if the result is already in the cache
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey); // Retrieve the cached result
  }

  let result;

  // Check if both objects are the same reference
  if (obj1 === obj2) {
    result = true;
  } else if (
    obj1 == null ||
    typeof obj1 !== "object" ||
    obj2 == null ||
    typeof obj2 !== "object"
  ) {
    // Check if either object is null or not an object
    result = false;
  } else {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // If the number of keys is different, the objects can't be equal
    if (keys1.length !== keys2.length) {
      result = false;
    } else {
      // Recursively check if all keys and values are equal
      result = keys1.every(
        (key) => keys2.includes(key) && deepEqual(obj1[key], obj2[key])
      );
    }
  }

  // Cache the result
  cache.set(cacheKey, result);
  return result;
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
    e: 4,
  },
};

console.log(deepEqual(obj1, obj2)); // true
