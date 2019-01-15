/*函数防抖(debounce)

基本概念: 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

举例理解: 我们用手指一直按住一个弹簧，它将不会马上弹起直到你松手为止

使用场景:

按钮重复点击
输入框连续输入
判断scroll是否滑到底部

简单实现:
*/

const debounce = (fn,delay) => {
    let timer = null
    return () => {
        let ctx = this, args = arguments
        clearTimeout(timer)
        timer = setTimeout( ()=> {
          fn.apply(ctx,args)
        }, delay)
    }
}


/*
函数节流(throttle)

基本概念: 在规定的时间范围内相同的操作触发多次只执行一次

DOM拖拽
Canvas画笔
窗口resize

简单实现:
*/
const throttle = (fn,gapTime = 100) => {
    let timer = null
    let start_time = new Date().getTime()
    return () => {
        let ctx = this, args = arguments,
        current_time = new Date().getTime()
        clearTimeout(timer)
        if(curr_time - start_time >= gapTime()){
          fn.apply(ctx,args)
          start_time = current_time
        }else{
          timer = setTimeout( ()=> {
          fn.apply(ctx,args)
          }, gapTime)
        }
    }
}
module.exports = {
  throttle: throttle,
  debounce: debounce
}

