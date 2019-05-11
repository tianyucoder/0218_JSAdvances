
function myModule() {
  //私有的
  var data = 'atguigu';

  function foo() {
    console.log('foo()',data)
  }

  function bar() {
    console.log('bar()',data)
  }

  function fn() {
    console.log('fn()',data)
  }

  return{
    foo:foo
  }

}
