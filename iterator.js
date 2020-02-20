let arr = ['a','b','c']

for (const item of arr) {
    console.log(item)
}
console.log('-----------')
console.log('iterator over the values: ')
for (const item of arr.values()) {
    console.log(item)
}

console.log('-----------')
let ite = arr.values()
console.log('arr: ',arr)
console.log('ite: ',ite)

console.log('ite.next()',ite.next())
console.log('ite.next()',ite.next())
console.log('ite.next()',ite.next())
console.log('ite.next()',ite.next())


console.log('-----------')
console.log(arr[Symbol.iterator])

arr[Symbol.iterator] = function() {
    let that = this
    let index = 0
    return{
        next(){
            if (index<that.length) {
                return{
                    value:that[index++].toUpperCase(),
                    done:false
                }
            }else {
                return{
                    value:undefined,
                    done:true
                }
            }
        }
    }
}

for (const item of arr) { // this means arr is iterable 
    console.log(item)
}

//arr.next() -> error this means arr is not iterator

arr.entries() // iterator and iterable 
arr.values() // iterator and iterable

