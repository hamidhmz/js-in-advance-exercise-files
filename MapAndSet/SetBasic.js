let set = new Set(['hamid',1,8,99,8,'hamid',null,NaN,undefined,''])

console.log(set)

set.add('test2')

console.log(set)

set.delete('hamid')
console.log('set.has(hamid): ',set.has('hamid'))

console.log('set.size: ',set.size)

console.log('set.keys(): ',set.keys())
console.log('set.values(): ',set.values())
console.log('set.entries(): ',set.entries())

/* ------------------------------- map foreach ------------------------------ */


set.forEach((value,key,obj)=>{
    console.log('obj: ',obj)
    console.log('value: ',value)
    console.log('key: ',key)
})

/* ------------------------------- map for of ------------------------------- */

for (const iterator of set) {
    console.log('iterator: ',iterator)
}

const arrayFromSet = Array.from(set)


set.clear()
