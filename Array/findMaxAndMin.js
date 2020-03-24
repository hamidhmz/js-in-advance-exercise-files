let num = [11, 9, 23, 6, 9, 1, 20, 6];

function get_max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }
    console.log(max, arr.indexOf(max));
}
function get_min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    console.log(min, arr.indexOf(min));
}

console.log('num.sort (asc): ',num.sort((a,b)=>{ return b-a}))//asc
console.log('num: ',num)
console.log('num.sort (desc): ',num.sort((a,b)=>{ return a-b}))//desc
console.log('num: ',num)
 