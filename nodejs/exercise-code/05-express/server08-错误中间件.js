const express = require('express')

const app = express()

// 路由
app.get('/user', (req, res) => {
  // 抛出一个自定义的错误
  throw new Error('服务器内部发生了错误')

  res.send('user page')
})

// 定义错误级别的中间件，捕获整个项目的异常错误，从而防止项目的崩溃
app.use((err, req, res, next) => {
  // 在服务器打印错误消息
  console.log('发生了错误', err.message);

  // 向客户端响应错误相关的内容
  res.send('Error!' + err.message)
})

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})