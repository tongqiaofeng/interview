// 导入 node 内置 querystring 模块
const qs = require('querystring')

const bodyParser = (req, res, next) => {
  // 1.定义一个 str 字符串，用来存储客户端发送过来的请求体数据
  let str = '';

  // 2.监听 req 的 data 事件
  req.on('data', (chunk) => {
    str += chunk
  })

  // 3.监听 req 的 end 事件
  req.on('end', () => {
    // str 中存放的是完整的请求体路径
    console.log(str);

    // TODO：把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)

    req.body = body

    next()
  })
}

module.exports = bodyParser