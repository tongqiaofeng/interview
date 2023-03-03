const express = require('express')

const app = express()

// 调用 express.static 方法，快速对外提供静态资源
// 托管多个静态文件，多次调用express.static即可，若文件夹内同时存在相同名称的文件，则哪个资源先托管就显示哪个
// app.use(express.static('./files'))
// 挂载路径前缀（可随便取名字）
app.use('/files', express.static('./files'))
app.use(express.static('./clock'))

app.listen(1010, () => {
  console.log('启动服务器，at http://192.168.0.120:1010');
})