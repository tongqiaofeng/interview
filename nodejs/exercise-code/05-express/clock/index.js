
    let imgs = document.getElementsByTagName('img');
    let num = document.getElementsByTagName('img').length;
    let n = 0; // 存储图片加载到的位置，避免每次从第一张图片开始遍历
    let isLoadImg = false; // 是否当前容器/页面中的图片 加载完成
    let _clientHeight = document.documentElement.clientHeight; // 可见区域高度
    let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滚动条距离顶部的高度

    // 监听窗口变化重新计算可视区域
    function computedClientHeight() {
      _clientHeight = document.documentElement.clientHeight; // 可见区域高度
      console.log(_clientHeight);
    }

    // 页面载入完毕加载可视区域的图片
    lazyload();

    function lazyload() {
      // 图片加载到的位置 >= 页面图片总数,说明已加载完所有图片，反之没有
      isLoadImg = n >= num;
      // 获取滚动条距离顶部距离
      _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      for (let i = 0; i < num; i++) {
        // 如果当前图片距离顶部距离 < (可见区域高度+滚动条距离)，说明图片在可视区域内,进行图片src属性的赋值
        console.log(imgs[i].offsetTop);
        console.log(_clientHeight + _scrollTop);
        if (imgs[i].offsetTop < (_clientHeight + _scrollTop)) {
          if (imgs[i].getAttribute('src') == '') {
            imgs[i].src = imgs[i].getAttribute('data-src');
          };

          n = i + 1;
        }
      }
    }

    /**
     简单的节流函数
     func 要执行的函数
     wait 延迟时间
     flag 是否继续触发节流函数（根据需求自定义，此处是想当加载完图片时不需要再进行多余的执行---优化）
    **/
    function throttle(func, wait, flag) {
      let timeOut;

      return function () {
        if (flag) {
          return
        }

        if (!timeOut) {
          timeOut = setTimeout(() => {
            timeOut = null;
            func();
          }, wait)
        }
      }
    }

    /**
     简单的防抖函数
     callback 要执行的函数
     delay 触发函数的时间间隔
     arg
    **/
    function debounce(callback, delay) {
      let timer;

      return function (arg) {
        clearTimeout(timer);

        timer = setTimeout(() => {
          callback(arg)
        }, delay)
      }
    }

    // 使用节流函数~实现性能较好的懒加载
    window.addEventListener('scroll', throttle(lazyload, 100, isLoadImg));

    // 使用防抖函数~优化不断触发的窗口变化,800ms内只获取一次可视区域高度
    window.addEventListener('resize', debounce(computedClientHeight, 800));
  