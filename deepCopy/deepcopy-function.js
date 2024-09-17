function deepCopy(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    const arrayCopy = value.map((element) => deepCopy(element));
    return arrayCopy;
  }

  if (typeof value === "object") {
    let copyObj = [];

    for (let key in value) {
      copyObj.push([key, value[key]]);
    }
    return Object.fromEntries(copyObj);
  }
}

const obj = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 1,
      g: 2,
    },
  },
};

const objCopy = deepCopy(obj);

console.log(objCopy);
