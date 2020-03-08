console.log(require('./b'))
console.log(require('./b'))
console.log(require('./b'))
delete require.cache[require.resolve('./b')]
console.log(require('./b'))