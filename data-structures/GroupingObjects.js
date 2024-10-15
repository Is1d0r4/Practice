function groupBy(arr, key) {
  const result = {};

  for (const item of arr) {
    let group = item[key];
    result[group] ??= [];
    result[group].push(item);
  }

  return result;
}
