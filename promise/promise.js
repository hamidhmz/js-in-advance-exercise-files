const axios = require('axios')

axios
    .get('https://google.com')
    .then(function(response) {
        console.log(`response: ${response}`)
        return axios.get('https://google.com')
    })
    .then(function(response) {
        console.log(`response: ${response}`)
    })
    .catch(function(error) {
        console.log(`error: ${error}`)
    })
console.log(Math.random() < 0.5)

let po = new Promise(function(resolve, reject) {
    if (Math.random() < 0.5) {
        resolve('resolve promise')
    } else {
        reject('reject promise')
    }
})

po.then(val => {
    // onFulfilled
    console.log(val)
})
    .catch(error => {
        // onRejected
        console.log(error)
    })
    .finally(() => {
        //  onFinally
        console.log('...finally')
    })

po.then(
    val => {
        // onFulfilled
        console.log(val)
    },
    error => {
        // onRejected
        console.log(error)
    }
).finally(() => {
    //  onFinally
    console.log('...finally')
})

let reject_promise = new Promise(function(resolve, reject) {
    reject('reject promise')
})
let resolve_promise = new Promise(function(resolve, reject) {
    resolve('resolve promise')
})
let pending_promise = new Promise(function(resolve, reject) {
    console.log('-')
})

resolve_promise
    .then(
        val => {
            // onFulfilled
            console.log(val)
        },
        error => {
            // onRejected
            console.log(error)
        }
    )
    .finally(() => {
        //  onFinally
        console.log('...finally')
    })

reject_promise
    .then(
        val => {
            // onFulfilled
            console.log(val)
        },
        error => {
            // onRejected
            console.log(error)
        }
    )
    .finally(() => {
        //  onFinally
        console.log('...finally')
    })

pending_promise
    .then(
        val => {
            // onFulfilled
            console.log(val)
        },
        error => {
            // onRejected
            console.log(error)
        }
    )
    .finally(() => {
        //  onFinally
        console.log('...finally')
    })

console.log(resolve_promise)
console.log(reject_promise)
console.log(pending_promise)

// then able object

let then_able_promise = new Promise((resolve, reject) => {
    resolve({
        then(resolve, reject) {
            console.log(`then able obj. in func. resolve`)
            if (Math.random() > 0.5) {
                reject('failure reason')
            } else {
                resolve('success value')
            }
        }
    })
})

then_able_promise
    .then(val => {
        // onFulfilled
        console.log('then able promise: ', val)
    })
    .catch(error => {
        // onRejected
        console.log('error for then able: ', error)
    })
    .finally(() => {
        //  onFinally
        console.log('...finally')
    })

/* -------------------------------------------------------------------------- */
/*                     promise resolve and promise reject                     */
/* -------------------------------------------------------------------------- */

let shortcut_promise = (function() {
    if (Math.random() < 0.5) {
        return Promise.resolve('resolve promise')
    } else {
        return Promise.reject('reject promise')
    }
})()
shortcut_promise
    .then(val => {
        // onFulfilled
        console.log(val)
    })
    .catch(error => {
        // onRejected
        console.log(error)
    })
    .finally(() => {
        //  onFinally
        console.log('...finally')
    })

let shortcut_promise2 = (function() {
    if (Math.random() < 0.5) {
        return Promise.resolve('resolve promise')
    } else {
        return Promise.reject('reject promise')
    }
})()
shortcut_promise2
    .then(val => {
        // onFulfilled
        console.log(val)
        return Promise.resolve('2nd fulfilled promise')
    })
    .then(val => {
        console.log(val)
    })
    .catch(error => {
        // onRejected
        console.log('error from 186 line: ', error)
    })
    .finally(() => {
        //  onFinally
        console.log('...finally')
    })

// you cannot do this for async functions
// function setTime() {
//     setTimeout(() => {
//         return Promise.resolve('this is resolve of promise')
//     }, 200)
// }
// let setTime_ = setTime()
// setTime_.then(val => {
//     console.log(val)
// })

/* -------------------------------------------------------------------------- */
/*                                promise race                                */
/* -------------------------------------------------------------------------- */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1: success')
    }, 3000)
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise2: failure')
    }, 1000)
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise3: success')
    }, 2000)
})

const fastest = Promise.race([promise1, promise2, promise3])

fastest
    .then(val => {
        console.log('this is fastest method', val)
    })
    .catch(err => {
        console.log(err)
    })

const allPromise = Promise.all([promise1, promise2, promise3]) // all of them should be resolve

allPromise
    .then(val => {
        console.log('this is all promise method', val)
    })
    .catch(err => {
        console.log(err)
    })

const allSettleMethod = Promise.allSettled([promise1, promise2, promise3]) // return all of them and doesn't matter if some is fail or some of them success

allSettleMethod
    .then(val => {
        console.log('this is allSettled promise method', val)
    })
    .catch(err => {
        console.log(err)
    })
