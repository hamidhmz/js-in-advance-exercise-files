let cluster = require('cluster')
let http = require('http')
let numCPUs = require('os').cpus().length
console.log('number of CPU',numCPUs)
if (cluster.isMaster) {
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('death', function(worker) {
        console.log('worker ' + worker.pid + ' died')
    })
} else {
    // Worker processes have a http server.
    http.Server(function(req, res) {
        let date = new Date()
        console.log(date)
        console.time('this is while test')
        let dateInsideWhile = new Date()
        while (+dateInsideWhile <= +date + 5000) {
            dateInsideWhile = new Date()
        }
        console.timeEnd('this is while test')
        res.writeHead(200)
        res.end('hello world\n')
    }).listen(8000)
}
