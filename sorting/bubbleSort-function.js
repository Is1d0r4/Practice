bubbleSort = (arr) => {
    for(let i=0; i<arr.length; i++) {
        let swapped = false;
        for(let j=0; j<arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let current = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = current;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
};

bubbleSort([5, 3, 8, 2, 1, 4]); // [1, 2, 3, 4, 5, 8]