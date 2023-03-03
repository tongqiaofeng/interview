const express = require('express')

const app = express()

// 定义一个最简单的中间件函数
const mw = function (req, res, next) {
  console.log('这是一个最简单的中间件');

  // 把流转关系转交给下一个中间件或路由
  next()
}

// 将 mw 注册为全局生效的中间件
app.use(mw)

app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/user', (req, res) => {
  res.send('user page')
})

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})