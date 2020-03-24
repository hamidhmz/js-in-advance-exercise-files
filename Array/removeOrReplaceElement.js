// splice(start_index, delete_num, replacement1, 2, 3)
let arr1 = ['apple','milk','orange','cheese']
let arr2 = ['apple','milk','orange','cheese']
let arr3 = ['apple','milk','orange','cheese']

let val1 = arr1.splice(2,2)
let val2 = arr2.splice(2,0,'new el')
let val3 = arr3.splice(2,2,'new el')

console.log('val1: ',val1)
console.log('val2: ',val2)
console.log('val3: ',val3)
console.log('arr1: ',arr1)
console.log('arr2: ',arr2)
console.log('arr3: ',arr3)