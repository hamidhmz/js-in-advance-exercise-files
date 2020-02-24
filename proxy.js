let car = {
    engine:'petrol',
    gearbox:'manual',
    _id:1984
}
let car_proxy = new Proxy(car,{
    get(target,prop,receiver){
        if (prop == 'engine') {
            return target[prop].toUpperCase()
        }else if(prop == 'receiver'){
            return receiver
        }else{
            return 'access denied...'
        }
    }
})

let new_obj = Object.create(car_proxy)
console.log('car_proxy.receiver == car_proxy: ',car_proxy.receiver == car_proxy)
console.log('car_proxy.receiver: ',car_proxy.receiver)
console.log('car_proxy.gearbox: ',car_proxy.gearbox)
console.log('car_proxy.engine: ',car_proxy.engine)
console.log('new_obj.receiver == new_obj: ',new_obj.receiver == new_obj)
console.log('new_obj.receiver: ',new_obj.receiver)
console.log('new_obj.gearbox: ',new_obj.gearbox)
console.log('new_obj.engine: ',new_obj.engine)

console.log('--------------')

let car_proxy2 = new Proxy(car,{
    get(target,prop,receiver){
        if (prop[0] == '_') {
            return 'access denied'
        } else {
            return target[prop]
        }
    }
})

console.log('car_proxy2 ',car_proxy2)
console.log('car_proxy2._id: ',car_proxy2._id)
console.log('car_proxy2.engine: ',car_proxy2.engine)
console.log('car_proxy2.gearbox: ',car_proxy2.gearbox)
console.log('car_proxy2.whatever: ',car_proxy2.whatever)


let car_proxy3 = new Proxy(car,{
    get(target,prop,receiver){
        if (prop[0] == '_') {
            return 'access denied'
        } else {
            return target[prop]
        }
    },
    set(target,prop,val,receiver){
        if (prop[0] == '_') {
            throw 'cannot set value for this prop'
        }else{
            target[prop] = val
        }
    },
    has(target,prop){
        if (prop[0] == '_') {
            return false
        }else{
            return Reflect.has(target,prop)
        }
    },
    deleteProperty(target,prop){
        if (prop[0] == '_') {
            return false
        } else {
            return Reflect.deleteProperty(target,prop)
        }
    }
})

console.log('engine in car_proxy3','engine' in car_proxy3)
console.log('xxx in car_proxy3','xxx' in car_proxy3)
console.log('_id in car_proxy3','_id' in car_proxy3)


car_proxy3.engine = 'petrol2'
console.log('car_proxy2 ',car_proxy2)

console.log('delete car_proxy3.engine',delete car_proxy3.engine)
console.log('elete car_proxy3._id',delete car_proxy3._id)
console.log('Reflect.deleteProperty(car_proxy3,_id)',Reflect.deleteProperty(car_proxy3,'_id'))

console.log('car_proxy2 ',car_proxy2)
// car_proxy3._id = 100 //  throw error

let proxy = new Proxy({},{
    defineProperty(target,prop,descriptor){
        console.log(descriptor)
        descriptor.value = 'new val'
        descriptor.writable = false
        descriptor.enumerable = true
        // descriptor.configurable = false
        Reflect.deleteProperty(target,prop,descriptor)
        return true
    }
})

proxy.msg = 'hello'
console.log(proxy)
console.log(Object.getOwnPropertyDescriptor(proxy))

Object.defineProperty(proxy,'msg',{
    value:'hi',
    //writable, enumerable
    configurable:true
})

console.log(proxy)
console.log(Object.getOwnPropertyDescriptor(proxy))



let obj_apply = {
    title:'my obj'
}
function test(num1,num2){
    console.log(num1+num2)
    console.log(this)
}

test.apply(obj_apply,[1,2])

let proxy_apply = new Proxy(test,{
    apply(target,this_arg,arg_list){
        console.log(this_arg)
        this_arg = {title:'new val'}
        arg_list[0]++
        arg_list[1]++
        return target.apply(this_arg,arg_list)
    }
})

proxy_apply.apply(obj_apply,[3,4])
proxy_apply.call(obj_apply,3,4)



console.log('---------------')
function my_costructor(msg){
    this.msg = msg

}
let obj_regular = new my_costructor('hello')

console.log('obj_regular: ',obj_regular)

let proxy_constructor = new Proxy(my_costructor,{
    construct(target,arg_list,new_target){
        new_target.static_prop = 'static prop...'
        arg_list[0] = arg_list[0].toUpperCase()
        let obj = new target(...arg_list)
        obj.id = 1984
        return obj
    }
})
let obj_2 = new proxy_constructor('apple')

console.log('obj_2',obj_2)