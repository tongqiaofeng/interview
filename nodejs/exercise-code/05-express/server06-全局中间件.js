const express = require('express')

const app = express()

// 注册全局生效的中间件
app.use((req, res, next) => {
  console.log('第一个中间件');
  const time = new Date()

  // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
  req.startTime = time

  // 把流转关系转交给下一个中间件或路由
  next()
})

app.use((req, res, next) => {
  console.log('第二个中间件');
  next()
})

app.get('/', (req, res) => {
  res.send('home page' + req.startTime)
})

app.get('/user', (req, res) => {
  res.send('user page' + req.startTime)
})

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})