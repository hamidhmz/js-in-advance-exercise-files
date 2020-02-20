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
