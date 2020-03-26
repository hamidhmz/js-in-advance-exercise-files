let unsorted = [114,118,106,106,110,110,114,106,118,110,116]

let queue = []
let min = unsorted[0]

unsorted.forEach((item)=>{
    if(min>item){min=item}
})
unsorted.forEach((element)=>{
    let proxy_element = element-min
    if(queue[proxy_element]===undefined){
        queue[proxy_element]=1
    }else{
        queue[proxy_element]++
    }
})



let asc=[]
let desc=[]

for(let element=0;element<queue.length;element++){
    if(queue[element]!==undefined){
        for(let counter=1;counter<=queue[element];counter++){
            asc.push(element+min)
        }
    }
}
for(let element=queue.length-1;element>=0;element--){
    if(queue[element]!==undefined){
        for(let counter=1;counter<=queue[element];counter++){
            desc.push(element+min)
        }
    }
}

