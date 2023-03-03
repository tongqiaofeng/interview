const express = require('express')

const apiRouter = express.Router()

apiRouter.get('/user', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query

  // 调用 res.send() 向客户端响应处理的数据
  res.send({
    statusCode: 200,
    msg: 'get 请求成功！',
    data: query
  })
})

apiRouter.post('/addUser', (req, res) => {
  // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
  const body = req.body

  res.send({
    statusCode: 200,
    msg: 'post 请求成功！',
    data: body
  })
})

apiRouter.delete('/delUser', (req, res) => {
  const body = req.body

  res.send({
    statusCode: 200,
    msg: 'delete 请求成功！',
    data: body
  })
})

module.exports = apiRouter