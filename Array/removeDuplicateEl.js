let arr = [0,1,1,2,2,2,3,3,3,4,4,4]

let set = new Set(arr)

let arr1 = Array.from(set)//first way
let arr2 = [...set]//second way

console.log(arr.includes(110))
console.log(arr.indexOf(200))

function deduplicate(arr){//third way
    let new_arr = []
    for(let i = 0; i<arr.length; i++){
        if(!new_arr.includes(arr[i])){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
