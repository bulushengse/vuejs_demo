<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <!-- 
          项目初始目录结构 ：
          build：项目构建(webpack)相关代码。
          config：配置目录，包括访问地址、端口等。
          node_modules：npm 加载的项目依赖模块。
          src：
            assets: 放置一些图片，如logo等。
            components: 放置项目公用组件。
            views: 放置业务逻辑组件，前端页面展示！（自创建）
            App.vue: 项目入口文件!!! 我们也可以直接将组件写这里，而不使用 components 目录。
            main.js: 项目的核心文件!!!
          static：静态资源目录，如图片、字体等。
          package.json：项目配置文件。

    --> 
    <h1>vue基础学习</h1>
    <!-- vue.js路由， 允许我们通过不同的 URL 访问不同的内容。Vue.js 路由需要载入 vue-router 库。-->
    <p>
    <!-- <router-link>用于设置一个导航链接， to 属性为目标地址对应router下index.js，默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/">主页</router-link>
    <router-link to="/demo1">模版语法</router-link>
    <router-link to="/demo2">计算属性和侦听器</router-link>
    <router-link to="/demo3">Class与Style绑定</router-link>
    <router-link to="/demo4">条件渲染</router-link> 
    <router-link to="/demo5">列表渲染</router-link>
    <router-link to="/demo6">事件处理</router-link>
    <router-link to="/demo7">表单输入绑定</router-link>
    <router-link to="/demo8">组件注册</router-link>
    <router-link to="/demo9">组件传值</router-link>
    <router-link to="/demo10">组件事件</router-link>
    <router-link to="/demo11">插槽</router-link>
    <router-link to="/demo12">动态组件&异步组件</router-link>
    <router-link to="/demo13">处理边界情况</router-link>
    <router-link to="/demo14">过渡&动画</router-link>
    <router-link to="/demo15">可复用性&组合</router-link>
    <router-link to="/demo16">单元测试</router-link>
    </p>
  
    <!-- 路由出口，匹配到的组件将渲染在这里 -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import raffleMachine from '@/components/raffle-machine' 
//每个.vue后缀文件相当于一个vue组件，只能被.js文件import，会自动实例化Vue对象，因此.vue后缀文件不能new Vue()
//只能export default{name:'',data(){}}， 等同于 new Vue({el:'#id',data: {}})

export default {
  name: 'App' 
}

//注册全局组件，如组件不大，可以直接将组件写这里，而不使用 components 目录！
Vue.component('sentence', {
    data: function () {
        return {
          msg: "多么美好的一天啊~~~"
        }
    },
    template: '<p>{{msg}}</p>'
})
//注册全局组件，如组件较复杂，import引用components目录下组件！
Vue.component(
  'raffleMachine',raffleMachine
) 

/* Vue.component('async-example', function (resolve, reject) {
  if(true){
      reject("异步组件加载失败！")     //表示加载失败
  }else{
    setTimeout(function () {//为了演示用的，如何获取组件取决于你
      // 向 `resolve` 回调传递组件定义
      resolve({
        template: '<div>I am async!</div>'
      })
    }, 1000)
  }
})

Vue.component('async-example2',function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
)

Vue.component(
  'async-example3', 
  () => import('@/components/async-component')
)
 */


//全局自定义指令 v-focus，详细使用看Demo15
/* Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
}) */

//全局过滤器 capitalize，详细使用看Demo15
/* Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}) */

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 供子组件使用 */
.shape{
  border:1px solid #ccc;
} 
</style>
