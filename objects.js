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

console.log(admin.fullName) // John Smith (*)

// setter triggers!
admin.fullName = 'Alice Cooper' // (**)

console.log(admin.fullName)
