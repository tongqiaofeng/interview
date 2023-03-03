// node服务器，处理浏览器加载各种资源的请求
// 1.index.html
// 2.js
// 3.vue

// node模块koa/express等都可
const Koa = require('koa')

// 创建实例
const app = new Koa()
const fs = require('fs')
const path = require('path')
const compilerSFC = require('@vue/compiler-sfc')
const compilerDOM = require('@vue/compiler-dom')


// 中间件配置
// 处理路由
app.use(async ctx => {
  const {
    url,
    query
  } = ctx.request;
  console.log(url);
  // 首页请求
  if (url === '/') {
    // 加载index.html
    ctx.type = 'text/html';
    ctx.body = fs.readFileSync(path.join(__dirname, "./index.html"), "utf-8")
  } else if (url.endsWith('.js')) {
    // js/ts文件加载处理
    // 路径拼接
    // __dirname 文件的绝对路径
    const p = path.join(__dirname, url);
    console.log(p);
    ctx.type = "application/javascript";
    ctx.body = rewriteImport(fs.readFileSync(p, "utf-8"));
  } else if (url.startsWith('/@modules/')) {
    // 裸模块名称
    const moduleName = url.replace('/@modules/', '');
    // 去node_modules目录中找
    // 前缀地址
    const prefix = path.join(__dirname, '../node_modules', moduleName);
    console.log('prefix ', prefix);
    // package.json中获取module字段
    // 后缀地址
    const module = require(prefix + '/package.json').module;
    console.log('module ', module);
    const filePath = path.join(prefix, module);
    // 根据路径读取文件
    const ret = fs.readFileSync(filePath, 'utf-8');
    ctx.type = "application/javascript";
    ctx.body = rewriteImport(ret);
  } else if (url.indexOf('.vue') > -1) {
    // 获取加载文件的路径
    const p = path.join(__dirname, url.split('?')[0]);
    const ret = compilerSFC.parse(fs.readFileSync(p, 'utf-8'));
    console.log('9999999999999999999');
    console.log(ret);
    if (!query.type) {
      // SFC请求
      // 读取vue文件，解析为js
      // 获取脚本部分的内容
      const scriptContent = ret.descriptor.script.content;
      // 替换默认导出为一个常量，方便后续修改
      const script = scriptContent.replace('export default ', 'const __script = ');
      ctx.type = "application/javascript";
      ctx.body = `
        ${rewriteImport(script)}
        // 解析tpl
        import {render as __render} from '${url}?type=template'
        __script.render = __render
        export default __script
      `
    } else if (query.type === 'template') {
      const tpl = ret.descriptor.template.content;
      // 编译为render
      const render = compilerDOM.compile(tpl, {
        mode: 'module'
      }).code;
      ctx.type = "application/javascript";
      ctx.body = rewriteImport(render);
    }
  }
})

// 裸模块地址重写
// import xx from 'vue'  
// 替换为
// import xx from '/@modules/vue'
function rewriteImport(content) {
  return content.replace(/ from ['"](.*)['"]/g, function (s1, s2) {
    console.log(s1);
    console.log(s2);
    if (s2.startsWith('/') || s2.startsWith('./') || s2.startsWith('../')) {
      return s1
    } else {
      // 裸模块，替换
      return ` from '/@modules/${s2}'`
    }
  })
}


app.listen(3000, () => {
  console.log('lalalallalll');
})