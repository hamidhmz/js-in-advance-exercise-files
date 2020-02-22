async function await_example() {
    try {
        let success_value = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('data')
            }, 1000);
        })
        console.log(success_value)
    } catch (error) {
        console.log('error:', error)
    }
}

async function async_function_example() {
    console.log('1')
    await await_example()
    console.log('2')
}
async_function_example()

// async function async_function_example2() {
//     console.log('1')
//     await_example()
//     console.log('2')
// }
// async_function_example2()

