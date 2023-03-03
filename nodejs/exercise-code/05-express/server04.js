const express = require('express')

const app = express()

// 导入路由模块
const router = require('./server03-router')

// 注册路由模块
// app.use 作用：注册全局中间件
// app.use(router)
// 为路由模块添加前缀
app.use('/api', router)

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})