function deepClone(source, clonedMap) {
  clonedMap = clonedMap || new Map();

  if (clonedMap.has(source)) {
    return clonedMap.get(source);
  }

  if (typeof source !== "object" || source === null) {
    return source;
  }

  let result;
  const type = getType(source);

  if (type === "object" || type === "array") {
    result = type === "object" ? {} : [];
    clonedMap.set(source, result);
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = deepClone(source[key], clonedMap);
      }
    }
  } else {
    result = source;
  }

  return result;
}
function getType(source) {
  return Object.prototype.toString
    .call(source)
    .replace(/^\[object (.+)\]$/, "$1")
    .toLowerCase();
}
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
console.log(deepClone(obj));
