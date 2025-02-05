import { BinaryTree } from "./BinaryTree.js";

function getMax(arr) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = -1000;
    let maxInd = -1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] >= max) {
        max = arr[j];
        maxInd = j;
      }
    }
    let v = arr[i];
    arr[i] = arr[maxInd];
    arr[maxInd] = v;
  }
  return arr;
}

function findIndex(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  let result = -2;

  while (result == -2) {
    let middleIndex = left + Math.floor((right - left) / 2);

    if (val > arr[middleIndex]) {
      left = middleIndex + 1;
    } else if (val < arr[middleIndex]) {
      right = middleIndex - 1;
    } else if (val === arr[middleIndex]) {
      result = middleIndex;
    } else {
      result = -1;
    }
  }

  return result;
}

function mergeArrays(arr1, arr2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  let n = arr1.length;
  let m = arr2.length;

  while (!(i == n && j == m)) {
    if (arr1[i] <= arr2[j] || j == m) {
      mergedArr.push(arr1[i]);
      i++;
    } else if (arr2[j] <= arr1[i] || i == n) {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  return mergedArr;
}

function isPallindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) return false;
    i++;
    j--;
  }
  return true;
}

function isSubstring(mainString, subString) {
  let compareString = "";

  for (let i = 0; i < mainString.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (mainString[i] != subString[j]) {
        compareString = "";
        break;
      } else {
        compareString += mainString[i];
        i++;
      }
    }

    if (compareString === subString) return true;
  }

  return compareString === subString;
}

function isEven(number) {
  if (number == 0) {
    return true;
  }
  if (number == 1) {
    return false;
  }
  return isEven(number - 2);
}

function infixPrint(tree) {
  if (tree == null) {
    return;
  }
  infixPrint(tree.left);
  console.log(tree.data);
  infixPrint(tree.right);
}

function prefixPrint(tree) {
  if (tree == null) {
    return;
  }
  console.log(tree.data);
  prefixPrint(tree.left);
  prefixPrint(tree.right);
}

function postfixPrint(tree) {
  if (tree == null) {
    return;
  }
  postfixPrint(tree.left);
  postfixPrint(tree.right);
  console.log(tree.data);
}

function width(root) {
  let queue = [root];
  let currentNode;

  while (queue.length) {
    currentNode = queue.shift();
    console.log(currentNode.data);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
}

let tree = new BinaryTree(2);
tree.left = new BinaryTree(4);
tree.right = new BinaryTree(5);
tree.left.left = new BinaryTree(8);
tree.left.right = new BinaryTree(9);
tree.right.left = new BinaryTree(7);
tree.right.right = new BinaryTree(3);

width(tree);
