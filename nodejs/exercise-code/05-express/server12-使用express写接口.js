const express = require('express')

const app = express()

// 优先创建 JSONP 接口【这个接口才不会被处理成 cors 接口】,JSONP 不属于真正的Ajax请求
app.get('/api/jsonpTest', (req, res) => {
  // TODO：定义 JSONP 接口具体的实现过程
  // 1.得到函数的名称, req.query.callback 为固定写法
  const funcName = req.query.callback;
  // 2.定义要发送给客户端的数据对象
  const data = {
    name: '十一',
    age: '16'
  };
  // 3.拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4.把拼接的字符串响应给客户端
  res.send(scriptStr)
})

// 在路由之前配置 cors 中间件，解决接口跨域问题
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
  extended: false
}))

const router = require('./server12-apiRouter');
app.use('/api', router)

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})