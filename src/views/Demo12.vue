
/* 动态组件&异步组件 */
<template>
  <div>
    <h4>动态组件</h4>
    <div style="border:1px solid red;" >
      <p>使用 is attribute 来切换不同的组件</p>
      <button v-on:click="tabComponent">点击切换组件</button>
      <component v-bind:is="currentComponent" class='shape'></component>

      <p>你会注意到，当组件1更换标题后，切换组件2再切换回组件1，之后改的标题已经复原，这是因为每次切换新标签时，Vue 都创建了一个新的实例</p>
      <p>为了解决这问题，可以用一个keep-alive标签元素将其动态组件包裹起来。</p>
      <keep-alive>
      <component v-bind:is="currentComponent" class='shape'></component>
      </keep-alive>

      <br>
    </div>

    <h4>异步组件</h4>
    <div style="border:1px solid red;" >
      <p>当需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。可以以一个工厂函数的方式定义组件，这个工厂函数会异步解析你的组件定义，且会把结果缓存起来供未来重渲染。</p>
      <!-- <async-example></async-example> -->
      <newComponent3></newComponent3>

      <p>推荐的做法是将异步组件和 webpack 的 code-splitting 功能一起配合使用</p>
      <!-- <async-example2></async-example2> -->
      <newComponent4></newComponent4>

      <p>也可以在工厂函数中返回一个 Promise，把 webpack2 和 ES2015 语法加在一起，使用动态导入</p>
      <!-- <async-example3></async-example3> -->
      <newComponent5></newComponent5>


      <p>
         当网络环境较差时，我们去首次访问某个路由模块，由于加载该模块的资源需要一定的时间，那么该段时间内，我们的应用就会处于无响应的状态，用户体验极差。
      </p>

      <!-- <newComponent6></newComponent6> -->
      <br>
    </div>

    <br> <br> <br>
  </div>
</template>

<script>
//在.babelrc文件中要加："plugins": ["syntax-dynamic-import"]
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('@/components/async-component'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,  
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

export default ({
  name:'demo12',
  data () {
    return {
      name: "zhoubc",
      currentComponent: "newComponent1"
    }
  },
  methods: {
   tabComponent: function () {
    if(this.currentComponent == 'newComponent1'){
      this.currentComponent = 'newComponent2'
    }else{
      this.currentComponent = 'newComponent1'
    }
   }
  },
  components: {
    'newComponent1':{
      data () {
        return {
          title: "悲剧的一天"
        }
      },
      template: `<div>标题：<input type='text' v-model="title" /><br><strong>{{title}}</strong></div>`
    },
    'newComponent2':{             
      template: `<div><strong>这是组件2</strong></div>`
    },
    'newComponent3':function (resolve, reject) {
      if(false){
          reject("异步组件加载失败！")    //表示加载失败
      }else{
        setTimeout(function () {//为了演示用的，如何获取组件取决于你
          // 向 `resolve` 回调传递组件定义
          resolve({
            data () {
              return {
                desc: "I am async!"
              }
            },
            template: '<div>{{desc}}</div>'
          })
        }, 1000)
      }
    },
    'newComponent4':function (resolve) {
        // 这个特殊的 `require` 语法将会告诉 webpack
        // 自动将你的构建代码切割成多个包，这些包
        // 会通过 Ajax 请求加载
        require(['@/components/async-component'], resolve)
    },
    'newComponent5': () => import('@/components/async-component'),
    'newComponent6':  AsyncComponent
    
  }
  
}) 


</script>

