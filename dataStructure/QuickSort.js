//let arr = [3,0,5,6,2,1,4]
let arr = [6,5,4,3,2,1,0]
function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let pivotIndex = Math.floor(arr.length/2)
    let pivot = arr.splice(pivotIndex,1)[0]
    //let pivot = arr.splice(0,1)[0]
    let leftSection=[]
    let rightSection=[]
    for(let index=0;index<arr.length;index++){
        if(arr[index]<pivot){
            leftSection.push(arr[index])
        }else{
            rightSection.push(arr[index])
        }
    }
    return quickSort(leftSection).concat([pivot],quickSort(rightSection))
}

console.log(quickSort(arr))
