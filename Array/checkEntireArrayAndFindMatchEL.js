// filter, every, find, findIndex
let arr = [1, 2, 3, 4, 5, 6, 7];
let A = { title: 'obj A' };


let new_arr = arr.filter(function(ele) {
    return ele % 2 == 0;
}, A);
console.log('arr.filter:', new_arr);

let result = arr.every(function(ele) {//check whole array and at the end return true or false
    return ele > 100;
}, A);
console.log('arr.every: ',result)

let find_result = arr.find(ele => {//return the first value whom has this condition 
    return ele % 2 != 0;
});
console.log('arr.find: ',find_result)

let find_index = arr.findIndex(ele => {//return the first index whom has this condition 
    return ele > 4;
});
console.log('arr.findIndex: ',find_index)