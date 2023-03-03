const express = require('express')

const app = express()

const bodyParser = require('./server11-自定义的中间件')

// 使用自定义的中间件
app.use(bodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})