const express = require('express')

const app = express()

// 注意：除了错误级别的中间件，其他的中间件必须在路由之前进行配置
// 通过 express.json() 中间件，解析表单中 JSON 格式的数据
app.use(express.json())

// 通过 express.urlencoded() 中间件，解析表单中 url-encoded 格式的数据
// 第三方中间件 body-parser 也可解析该格式数据，express.urlencoded() 是基于body-parser封装的
app.use(express.urlencoded({
  extended: false
}))

// 路由
app.post('/user', (req, res) => {
  // 在服务器，使用 req.body 属性接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置 解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log(req.body);
  res.send('user page OK!')
})

app.post('/list', (req, res) => {
  // req.body 可以获取 JSON 格式的表单数据 和 url-encoded 格式的数据
  console.log(req.body);

  res.send('list page ok!');
})

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})