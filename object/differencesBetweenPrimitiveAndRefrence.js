let a = {
    msg:'obj a', // primitive
    list:[1,2,3] // reference
}

// a.msg = a.msg.toUpperCase()

// a.list.push(4)

let b = Object.create(a)

b.msg = 'new val'

b.list.push(4)