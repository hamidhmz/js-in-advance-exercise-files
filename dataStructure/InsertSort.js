let arr = [5,2,6,0,1,3,4]
console.log(arr)
function insertSort(arr){
    let length = arr.length
    for(let outer_c=1;outer_c<length;outer_c++){
        for(let inner_c=outer_c;inner_c>0&&arr[inner_c] <arr[inner_c-1];inner_c--){
            let tmp = arr[inner_c]
            arr[inner_c]=arr[inner_c-1]
            arr[inner_c-1]=tmp
        }
        console.log(arr)
    }
    return arr
}
let asc = insertSort(arr)

console.log(asc)