const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  let contentStr = '<h1>404 not found</h1>'

  if (url === '/' || url === '/index') {
    contentStr = '<h1>首页</h1>'
  } else if (url === '/about') {
    contentStr = '<h1>关于我们</h1>'
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(contentStr)
})

// 启动服务器
server.listen(1011, () => {
  console.log('1011服务器启动，地址为 http://192.168.0.120:1011');
})