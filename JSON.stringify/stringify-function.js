function stringify(value) {
  //check if value is equal to null, return 'null'
  if (value === null) return null;
  //check if value is boolean or number, return value as string
  if (typeof value === "boolean" || typeof value === "number") {
    return `${value}`;
  }
  //check if value is string, return value
  if (typeof value === "string") {
    return value;
  }
  //check if the value is array, call stringify recursively to find if any nested array
  if (Array.isArray(value)) {
    const newArray = value.map((element) => stringify(element));

    return `[${newArray}]`;
  }
  //check if the value is object, get the keys traverse through each key to get the value
  //and pass it into the stringigy
  if (typeof value === "object") {
    const keys = Object.keys(value);
    const keyValuePairs = keys.map((key) => {
      //if any undefined or function inside object stringify will not get considered.
      if (value[key] === undefined || typeof value[key] === "function") {
        return "";
      }
      const valueString = stringify(value[key]);
      //final key-value pair return
      return `"${key}": ${valueString}`;
    });
    return `{${keyValuePairs}}`;
  }
}

const obj = {
  test: 1,
  test2: [1, 2, 3],
  test3: {
    test4: "bobene",
  },
};

console.log(stringify(obj));
