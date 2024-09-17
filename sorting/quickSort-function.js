function quickSort(array) {
    if (array.length <= 1) { return array; }
    
    let left = [];
    let right = [];
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array.splice(pivotIndex, 1)[0];
    
    for (let i=0; i<array.length; i++) {
        if(array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 7, 6, 2, 9])); // [2, 3, 5, 6, 7, 9]
