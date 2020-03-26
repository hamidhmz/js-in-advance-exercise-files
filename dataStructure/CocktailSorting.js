let arr = [4,3,2,1,5]
//let arr = [1,5,4,3,2]
console.log(arr)

let end = arr.length-1
let rightSortBorder = end
let leftSortBorder = 0
for(let index=0;index<end;index++){
    let lastExchangeIndex
    let sorted = true
    if(index%2 == 0){
        // odd loop: L->R
        for(let index=leftSortBorder;index<rightSortBorder;index++){
            if(arr[index] <arr[index+1]){
                let tmp = arr[index]
                arr[index]=arr[index+1]
                arr[index+1]=tmp
                sorted=false
                lastExchangeIndex = index
            }
            console.log('LR',arr)
        }
        rightSortBorder = lastExchangeIndex
    }else{
        // even loop: R->L
        for(let index=rightSortBorder;index>leftSortBorder;index--){
            if(arr[index] >arr[index-1]){
                let tmp = arr[index]
                arr[index]=arr[index-1]
                arr[index-1]=tmp
                sorted=false
                lastExchangeIndex = index
            }
            console.log('RL',arr)
        }
        leftSortBorder = lastExchangeIndex
    }
    if(sorted) break
}

