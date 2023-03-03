const express = require('express')

const app = express()

const mw = (req, res, next) => {
  console.log('第一个中间件');
  next()
}

// mw 这个中间件只在 "当前路由内" 生效，这种中间件属于 局部中间件
app.get('/', mw, (req, res) => {
  res.send('home page')
})

app.get('/user', (req, res) => {
  res.send('user page')
})

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})