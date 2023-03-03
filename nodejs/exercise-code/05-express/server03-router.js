// 定义路由模块
const express = require('express')

// 创建路由对象
const router = express.Router()

// 路由中间件
router.use((req, res, next) => {
  res.statusCode = 200;

  next()
})

// 挂载具体路由
router.get('/userList', (req, res) => {
  console.log(req.url);
  console.log(res.statusCode);
  res.send('模块化路由get')
})

router.post('/userAdd', (req, res) => {
  console.log(req.url);
  res.send('模块化路由post')
})

// 导出路由对象
module.exports = router