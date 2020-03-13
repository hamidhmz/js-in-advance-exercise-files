/*
 
      _                                      ____                            _         
     / \   ___ ___ ___  ___ ___  ___  _ __  |  _ \ _ __ ___  _ __   ___ _ __| |_ _   _ 
    / _ \ / __/ __/ _ \/ __/ __|/ _ \| '__| | |_) | '__/ _ \| '_ \ / _ \ '__| __| | | |
   / ___ \ (_| (_|  __/\__ \__ \ (_) | |    |  __/| | | (_) | |_) |  __/ |  | |_| |_| |
  /_/   \_\___\___\___||___/___/\___/|_|    |_|   |_|  \___/| .__/ \___|_|   \__|\__, |
                                                            |_|                  |___/ 
 
*/

let a = {
    msg: 'the msg property in obj. a',
    get access_msg() {
        // it doesn't allow to have property
        return this.msg
    },
    set access_msg(arg) {
        // it has allow just have one property
        this.msg = arg
    }
}

console.log('a.access_msg()', a.access_msg)
a.access_msg = 'new property'
console.log('a.access_msg()', a.access_msg)

/* -------------------------------------------------------------------------- */
/*                            using defineProperty                            */
/* -------------------------------------------------------------------------- */
let car = {
    brand: 'Toyota',
    model: 'Supra'
}
Object.defineProperty(car, 'access_brand', {
    get() {
        return this.brand
    },
    set(arg) {
        this.brand = arg
    },
    enumerable: true,
    configurable: false
})

console.log('car.access_brand: ', car.access_brand)
car.access_msg = 'new property'
console.log('car.access_msg()', car.access_msg)
