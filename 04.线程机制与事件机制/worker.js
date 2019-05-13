function fibonacci(n) {
  return n<3 ? 1:fibonacci(n-2) + fibonacci(n-1)
}

//1.接收主线程过来的数据
var onmessage = function (event) {
  var number = event.data
  console.log('分线程接收到了主线程过来的数据',number)
  //2.执行具体的业务逻辑
  var res = fibonacci(number)
  //3.把处理结果返回给主线程
  postMessage(res)
}