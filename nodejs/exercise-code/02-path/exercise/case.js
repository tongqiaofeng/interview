const path = require('path')
const fs = require('fs')

// 匹配<style></style>和<script></script>标签 正则
// \s匹配空字符   \S匹配非空字符   *所有
let regStyle = /<style>[\s\S]*<\/style>/
let regScript = /<script>[\s\S]*<\/script>/

// 读取需要被处理的文件内容
fs.readFile(path.join(__dirname, './01.html'), 'utf8', (err, dataStr) => {
  if (err) {
    return console.log(err.message);
  }

  // console.log(dataStr);
  resolveCSS(dataStr);
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

// 处理CSS样式
function resolveCSS(htmlContent) {
  // 正则匹配获取style相关内容
  let styleContent = regStyle.exec(htmlContent)
  // 去掉style标签
  let newCss = styleContent[0].replace('<style>', '').replace('</style>', '')

  // 写入
  fs.writeFile(path.join(__dirname, '/clock/index.css'), newCss, 'utf8', (res) => {
    if (res) return console.log('css写入失败', res.message);
    console.log('css写入成功', res);
  })
}

// 处理script内容
function resolveJS(htmlContent) {
  let scriptContent = regScript.exec(htmlContent)
  // 去掉script标签
  let newScript = scriptContent[0].replace('<script>', '').replace('</script>', '')

  // 写入
  fs.writeFile(path.join(__dirname, '/clock/index.js'), newScript, 'utf8', (res) => {
    if (res) return console.log('js写入失败', res.message);
    console.log('js写入成功', res);
  })
}

function resolveHTML(htmlContent) {
  let newHTML = htmlContent
    .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
    .replace(regScript, '<script src="./index.js"></script>')

  // 写入
  fs.writeFile(path.join(__dirname, '/clock/index.html'), newHTML, 'utf8', (res) => {
    if (res) return console.log('html写入失败', res.message);
    console.log('html写入成功', res);
  })
}