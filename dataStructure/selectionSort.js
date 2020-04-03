let arr = [5, 2, 6, 0, 1, 3, 4];
let length = arr.length;

for (outer = 0; outer < length; outer++) {
    let sorted = true;
    let minIndex = outer;
    for (inner = outer + 1; inner < length; inner++) {
        if (arr[minIndex] > arr[inner]) {
            minIndex = inner;
            sorted = false;
        }
    }
    if (sorted) break;
    let tmp = arr[outer];
    arr[outer] = arr[minIndex];
    arr[minIndex] = tmp;
}


console.log('arr: ',arr)