const obj = {
    a: 1,
    b: 2,
    c: 3
}
const newObj = Object.create(obj) // obj would be __proto__ for newObj

console.log('newObj: ', newObj)

console.log('Object.getPrototypeOf(newObj): ', Object.getPrototypeOf(newObj))

/**********************************************************************
 * BUT IF WE WANNA DEFINE OBJ AS OWN PROPERTY OF NEWOBJ WE SHOULD USE *
 *                         CONSTRUCTOR FOR IT                         *
 **********************************************************************/

function ObjC() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}
const newObj2 = new ObjC()//or new ObjC without prentices


console.log('newObj2: ', newObj2)

console.log('Object.getPrototypeOf(newObj2): ', Object.getPrototypeOf(newObj2))