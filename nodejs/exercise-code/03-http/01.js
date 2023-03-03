const http = require('http')

// 创建web服务器实例
const server = http.createServer()

// 为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
  console.log('客户端开始请求了', req.url);

  // 解决中文乱码问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('今天天气不晴朗，阴天呀！555555555...')
})

// 启动服务器
server.listen(1010, () => {
  console.log('1010服务器启动，地址为 http://192.168.0.120:1010');
})