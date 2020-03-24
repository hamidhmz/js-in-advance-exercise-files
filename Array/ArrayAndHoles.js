let obj = {
    title: 'obj literal',
    id: 100
};

let arr = ['apple', 'orange', 'water', 'celery'];
delete arr[2];//it would create hole

console.log('------forEach------')
arr.forEach(function(ele, index) {//skippet the hole
    console.log(ele, index);
});
console.log('------forOf------')
for (let item of arr) {//do not skippet the hole
    console.log(item);
}
console.log('------forIn------')
for (let item in arr) {//skippet the hole
    console.log(arr[item]);
}
