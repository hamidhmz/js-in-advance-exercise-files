let students = {
    amelia: 20,
    beatrice: 22,
    cece: 20,
    deirdre: 19,
    eloise: 21
}
console.log(Object.keys(students))
console.log(Object.assign(students))

console.log(
    Object.defineProperty(students, 'newPro', {
        value: 1,
        writable: true
    })
)
Object.defineProperty(students, 'key', { value: 5 })
console.log(students.key)
console.log('Object.keys(students)')
console.log(Object.keys(students))
console.log(students)
console.log(Object.getOwnPropertyNames(students))
/****************************************************************************************************
 * ENUMERABLE PROPERTIES ARE ONES THAT SHOW UP IN A FOR...IN LOOP. NON-ENUMERABLE PROPERTIES DON’T. *
 ****************************************************************************************************/
/* -------------------------------------------------------------------------- */
/*                          inheritance and prototype                         */
/* -------------------------------------------------------------------------- */

console.log(
    Object.create(
        {},
        {
            id: {
                value: 1,
                enumerable: true // writable:false, configurable(deletable):false by default
            },
            name: {
                value: 'Bob',
                enumerable: true
            }
        }
    )
)
console.log(
    Object.create(students, {
        id: {
            value: 1,
            enumerable: true // writable:false, configurable(deletable):false by default
        },
        name: {
            value: 'Bob',
            enumerable: true
        }
    })
)
const objNew = Object.create(
    {},
    {
        id: {
            value: 1,
            enumerable: true // writable:false, configurable(deletable):false by default
        },
        name: {
            value: 'Bob',
            enumerable: true
        }
    }
)
console.log(Object.getOwnPropertyNames(students))
console.log(objNew)

objNew.__proto__ = students
console.log(objNew)
console.log(objNew.amelia)

const objNew2 = Object.create(students, {
    id: {
        value: 1,
        enumerable: true // writable:false, configurable(deletable):false by default
    },
    name: {
        value: 'Bob',
        enumerable: true
    }
})
console.log(Object.getOwnPropertyNames(students))
console.log(objNew2)

// objNew2.__proto__ = students;
console.log(objNew2)
console.log(objNew2.amelia)

/* -------------------------------------------------------------------------- */
/*                             Accessor properties                            */
/* -------------------------------------------------------------------------- */

let user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
        ;[this.name, this.surname] = value.split(' ')
    },

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

let admin = {
    __proto__: user,
    isAdmin: true
}

console.log(admin.fullName) // John Smith

// setter triggers!
admin.fullName = 'Alice Cooper'

console.log(admin.fullName)

/***********************************************************************
 * NO MATTER WHERE THE METHOD IS FOUND: IN AN OBJECT OR ITS PROTOTYPE. *
 *     IN A METHOD CALL, THIS IS ALWAYS THE OBJECT BEFORE THE DOT.     *
 *  SO, THE SETTER CALL ADMIN.FULLNAME= USES ADMIN AS THIS, NOT USER.  *
 ***********************************************************************/

// animal has methods
let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log(`I walk`)
        }
    },
    sleep() {
        this.isSleeping = true
    }
}

let rabbit = {
    name: 'White Rabbit',
    __proto__: animal
}

// modifies rabbit.isSleeping
rabbit.sleep()

console.log(rabbit.isSleeping) // true
console.log(animal.isSleeping) // undefined (no such property in the prototype)

/* -------------------------------------------------------------------------- */
/*                                for prototype                               */
/* -------------------------------------------------------------------------- */

/************************************************************
 * THE FOR..IN LOOP ITERATES OVER INHERITED PROPERTIES TOO. *
 ************************************************************/

let animal1 = {
    eats: true,
    noise: true
}

let rabbit1 = {
    jumps: true,
    __proto__: animal1
}

// Object.keys only returns own keys
console.log(Object.keys(rabbit1)) // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit1) console.log(prop) // jumps, then eats

/* --------------------------- we can exclude them -------------------------- */

for (let prop in rabbit1) {
    let isOwn = rabbit1.hasOwnProperty(prop)

    if (isOwn) {
        console.log(`Our: ${prop}`) // Our: jumps
    } else {
        console.log(`Inherited: ${prop}`) // Inherited: eats
    }
}
console.log('Object.getOwnPropertyNames(rabbit1)')
console.log(Object.getOwnPropertyNames(rabbit1))
console.log('Object.getPrototypeOf(rabbit1)')
console.log(Object.getPrototypeOf(rabbit1))

/* -------------------------------------------------------------------------- */
/*                   we have 2 other methods for inheritance                  */
/* -------------------------------------------------------------------------- */

/*************************
 * OBJECT.GETPROTOTYPEOF *
 * OBJECT.SETPROTOTYPEOF *
 *************************/

function myFactory() {
    this.p2 = 2
    this.p3 = 3
}
myFactory.prototype = { p1: 10 }

const test1 = new myFactory()

console.log(test1)

/* -------------------------------------------------------------------------- */
/*                             object constructure                            */
/* -------------------------------------------------------------------------- */

console.log(new Object('ab')) // there is no need to new it
console.log(Object(100))
console.log(Object(true))
console.log(Object([1, 2]))

console.log('   -----   ')

console.log(Object())
console.log(Object(null))
console.log(Object(undefined))
console.log({})

console.log('   -----   ')

let obj = { title: 'obj. literal' }
console.log(Object(obj) == obj)

console.log('   -----   ')

function test() {}
console.log(Object(test) == test)

/*
deprecated: Object.prototype.__proto__ null
Object.length: always one
Object.entries(), Object.values(), Object.keys()
Object.fromEntries(): turn 2D arr. or Map into Obj.
Object.is()
*/
let list = {
    fruit: 'apple',
    meat: 'bacon',
    vegetable: 'celery'
}
let list_copy = list

console.log('Object.entries(list): ', Object.entries(list))

console.log('Object.values(list): ', Object.values(list))

console.log('Object.keys(list): ', Object.keys(list))

/* ---------------------- return 2D array to an Object ---------------------- */
console.log('Object.keys(list): ', Object.keys(list))

/****************************************************************************
 * USING OBJECT IS WILL SHOW US TWO OBJECT WOULD POINT TO ONE OBJECT OR NOT *
 ****************************************************************************/
console.log('Object.is(list,list_copy): ', Object.is(list, list_copy))

/* -------------------- when you wanna create new object -------------------- */
let a = {}
let b = {}

/* -------------- when you wanna reset prototype of one object -------------- */
a.__proto__ = list
//or
Object.setPrototypeOf(b, list) // don't change because of performance

console.log(a)
console.log(b)

/********************************************************
 * WHEN YOU WANNA HAVE AN OBJECT WITH CUSTOM PROTOTYPE *
 * YOU SHOULD SET THIS PROTOTYPE WHILE YOU WANNA CREATE *
 *                          IT                          *
 ********************************************************/

// when we wanna create object with custom prototype

let newObjectWithPrototypeOfListObject = Object.create(list)
let rc = Object.create(list)
console.log(
    'Object.getPrototypeOf(newObjectWithPrototypeOfListObject): ',
    Object.getPrototypeOf(newObjectWithPrototypeOfListObject)
)

/* ---------------------------- expend an object ---------------------------- */
Object.assign(rc, { name: 'TOM' }) // this will ignore inherited property

console.log('rc: ', rc)

/****************************************************************************
 * DIFFERENT BETWEEN NEW SELF DEFINE CONSTRUCTUR FUNCTION AND OBJECT.CREATE *
 ****************************************************************************/

let a11 = Object.create({ msg: 'Hello World' })

let b11 = new (function() {
    this.msg = 'Hello World'
})()

console.log('a11: ',a11)
console.log('b11: ',b11)
