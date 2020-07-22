<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <p>demo1.vue   模版语法</p>
    <p>demo2.vue   计算属性和侦听器</p>
    <p>demo3.vue   Class与Style绑定</p>
    <p>demo4.vue   条件渲染</p>
    <p>demo5.vue   列表渲染</p>
    <p>demo6.vue   事件处理</p>
    <p>demo7.vue   表单输入绑定</p>
    <p>demo8.vue   组件注册</p>
    <p>demo9.vue   组件传值</p> 
    <p>demo10.vue   组件事件</p>
    <p>demo11.vue   插槽</p>
    <p>demo12.vue   动态组件&异步组件</p>
    <p>demo13.vue   处理边界情况</p>
    <p>demo14.vue   过渡&动画</p>
    <p>demo15.vue   可复用性&组合</p>
    <p>demo16.vue   单元测试</p>

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
