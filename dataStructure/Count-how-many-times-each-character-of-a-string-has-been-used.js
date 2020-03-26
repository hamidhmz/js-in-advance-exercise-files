let msg = "Apple, orange, banana and milk.zzzzz";
let map = new Map()

for(let char of msg){
    if(map.has(char)){
        map.set(char,map.get(char)+1)
    }else{
        map.set(char,1)
    }
}
let max = 0

for(let arr of map){
    if(arr[1] > max){max = arr[1]}
}

let most = []

for(let arr of map){
    if(arr[1] == max){
        most.push(arr[0])
    }
}