const http = require('http')
// 这个核心模块能够帮助我们解析URL地址，从而拿到pathname query
const urlModule = require('url')
const server = http.createServer()

server.on('request', function(req, res) {

    // const url = req.url

    const {pathname: url, query} = urlModule.parse(req.url, true)

    if (url === '/getscript') {
        var data = {
            name: 'xjj',
            age: 18,
            gender: '女孩子'
        }

        // 拼接一个合法的JS脚本，这里拼接的是一个方法的调用
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        // res.end发送给客户端，客户端去把这个字符串当作JS代码去解析执行
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

server.listen(3000, function() {
    console.log('server listen at http://127.0.0.1:3000')
})