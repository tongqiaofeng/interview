const tools = require('./tools')

const date = tools.dateFormat(new Date())

console.log(date);

const str = '<h1 title="123456">你好<span>我好&nbsp;</span></h1>'
const newStr = tools.htmlEscape(str)
console.log(newStr);

const newStr2 = tools.htmlUnEscape(newStr)
console.log(newStr2);