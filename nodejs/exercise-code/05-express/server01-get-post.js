// 1.导入express
const express = require('express')

// 2.创建web服务器
const app = express()

// 4.监听客户端的 get 和 post 请求，并向客户端响应内容
app.get('/getUserMsg', (req, res) => {
  console.log(req.url);

  res.send({
    name: '紫月',
    age: '13',
    gender: '女',
    favorite: ['弹琴', '跳舞']
  })
})

app.post('/addUser', (req, res) => {
  console.log(req.url);

  res.send('用户添加成功')
})

app.get('/', (req, res) => {
  // 通过 req.query 可以获取到客户端发送过来的 查询参数
  // 注意：默认情况下 req.query 是一个 空对象
  console.log(req.query);
  res.send(req.query)
})

// 注意：这里的 :id 是一个动态的参数
app.get('/getUserMsg/:id/:name', (req, res) => {
  // req.params 是动态匹配到的 url 参数，默认也是一个 空对象
  console.log(req.params);
  res.send(req.params)
})

// 3.启动web服务器
app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})