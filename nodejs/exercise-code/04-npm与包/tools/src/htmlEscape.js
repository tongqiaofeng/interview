// 转义HTML
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, (match) => {
    // match  匹配正则的结果
    switch (match) {
      case '<':
        return "&lt;"
      case '>':
        return "&gt;"
      case '"':
        return "&quot;"
      case '&':
        return "&amp;"
    }
  })
}

// 欢迎HTML
function htmlUnEscape(htmlStr) {
  return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
    // match  匹配正则的结果
    switch (match) {
      case '&lt;':
        return "<"
      case '&gt;':
        return ">"
      case '&quot;':
        return '"'
      case '&amp;':
        return "&"
    }
  })
}

// 向外暴露需要的成员
module.exports = {
  htmlEscape,
  htmlUnEscape
}