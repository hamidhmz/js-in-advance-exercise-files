console.log(Reflect)

function test(arg1,arg2) {
    console.log(arg1,arg2)
    console.log(this)
}

let obj = {
    title:'my obj'
}
test.apply(obj,['apple','banana'])
Reflect.apply(test,obj,['apple','banana'])


console.log('Reflect',Object.getOwnPropertyNames(Reflect))


console.log('----------')

console.log('has id? ',Reflect.has(obj,'id'))
console.log('has title? ',Reflect.has(obj,'title'))
console.log('id in obj? ','id' in obj)
console.log('title in obj? ','title' in obj)

obj = {
    title:'my obj',
    id:1,
    test(params) {
        console.log(params)
    },
    id2:3
}


console.log(obj)

delete obj.id
console.log(obj)

Reflect.deleteProperty(obj,'test')
console.log(obj)

function my_constructor(arg1,arg2) {
    this.prop1 = arg1
    this.prop2 = arg2
}
let obj_con = Reflect.construct(my_constructor,['one','two'])

console.log('Object.getOwnPropertyNames(obj_con)')
console.log(Object.getOwnPropertyNames(obj_con))
console.log(obj_con)