let arr = [8, 9, 5, 6, 1, 3, 4, 2, 7];
function BubbleSorting(array) {
    let end = array.length - 1;
    return {
        putMaxInLast() {
            for (let index = 0; index < end; index++) {
                if (array[index] > array[index + 1]) {
                    let tmp = array[index];
                    array[index] = array[index + 1];
                    array[index + 1] = tmp;
                }
            }
            // console.log(array)
            return array;
        },
        putMinInFirst() {
            for (let index = end; index > 0; index--) {
                if (array[index] < array[index - 1]) {
                    let tmp = array[index];
                    array[index] = array[index - 1];
                    array[index - 1] = tmp;
                }
            }
            // console.log(array)
            return array;
        },
        sortDesc() {
            let leftSortBorder = 0;
            for (let index = 0; index < end; index++) {
                let sorted = true;
                let lastExchangeIndex;
                for (let index = end; index > leftSortBorder; index--) {
                    if (array[index] > array[index - 1]) {
                        let tmp = array[index];
                        array[index] = array[index - 1];
                        array[index - 1] = tmp;
                        sorted = false;
                        lastExchangeIndex = index
                    }
                    console.log(array)
                }
                leftSortBorder = lastExchangeIndex;
                if (sorted) {
                    break;
                }
            }
            return array;
        },
        sortAsc() {
            let rightSortBorder = end;
            for (let index = 0; index < end; index++) {
                let sorted = true;
                let lastExchangeIndex;
                for (let index = 0; index < rightSortBorder; index++) {
                    if (array[index] > array[index + 1]) {
                        let tmp = array[index];
                        array[index] = array[index + 1];
                        array[index + 1] = tmp;
                        sorted = false;
                        lastExchangeIndex = index;
                    }
                }
                rightSortBorder = lastExchangeIndex;
                if (sorted) {
                    break;
                }
            }
            return array;
        }
    };
}

// console.log(BubbleSorting(arr).putMaxInLast());
// console.log(BubbleSorting(arr).putMinInFirst());
// console.log(BubbleSorting(arr).sortAsc());
console.log(BubbleSorting(arr).sortDesc());
