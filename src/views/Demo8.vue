
/* 组件注册 */
<template>
  <div >
    <h4>组件注册</h4>

    <h5>局部注册</h5>
    <div style="border:1px solid red">
      <p>局部注册一，在当前实例中创建并注册components：'editMe':{/* ... */}</p>
      <editMe class='shape'></editMe>

      <p>局部注册二，在当前实例中创建var editMe={/* ... */ }，然后注册components:{'editMe':editMe}</p>
      <editMe2 class='shape'></editMe2>

      <p>局部注册三：在components目录下新建一个.vue组件，当前组件import clickCounter from '@/components/click-counter'，当前组件注册components:{'clickCounter':clickCounter}</p>
      <clickCounter class='shape'></clickCounter>
      <br>
    </div>

    <h5>全局注册</h5>
    <div style="border:1px solid red">
      <p>全局注册一：在App.vue中创建组件 Vue.component('sentence', { })，可以用在任何新创建的vue实例模版中 </p>
      <sentence class='shape'></sentence>

      <p>全局注册二：在components目录下新建一个.vue组件，在App.vue中import raffleMachine from '@/components/raffle-machine'，在App.vue中注册Vue.component('raffleMachine',raffleMachine)</p>
      <raffleMachine class='shape'></raffleMachine>

      <p>全局注册三：如果你使用了webpack(或在内部使用了webpack的Vue CLI 3+)，那么可使用require.context只全局注册非常通用的组件</p>
      <p>在src/main.js中全局导入基础组件，详见src/main.js</p>
      <testComponent1 class='shape'></testComponent1>
      <testComponent2 class='shape'></testComponent2>
      <br>
    </div>

    <h5>定义组件名</h5>
    <div style="border:1px solid red">
      <p>一.使用 kebab-case</p>
      定义Vue.component('<b>my-component-name</b>', { /* ... */ }) <br>
      使用时，必须是&#60my-component-name>&#60my-component-name/>。
      <p>二.使用 PascalCase</p>
      定义Vue.component('<b>MyComponentName</b>', { /* ... */ }) <br>
      使用时，&#60my-component-name>&#60my-component-name/>和&#60MyComponentName>&#60MyComponentName/>都可以。<br><br>
    </div>
    
    <h4>组件复用</h4>
    <div style="border:1px solid red">
      可以将组件进行任意次数的复用
      <clickCounter class='shape'></clickCounter><br>
      <clickCounter class='shape'></clickCounter><br>
      <clickCounter class='shape'></clickCounter><br>
      每个组件都会各自独立维护它的 count。因为你每用一次组件，就会有一个它的新实例被创建。
    </div>
    
    <br> <br> <br>
  </div>
</template>

<script>
import clickCounter from '@/components/click-counter' 

//必须放在export default前面
var editMe2 = { 
  data () { 
    return {
      message: "AAAA"
    }
  },
  template: '<div><input v-model="message" placeholder="edit me"><br><span>Message2 is: {{ message }}</span></div>'
}

export default ({
  name:'demo8',
  data () {
    return {
      name: "zhoubc"
    }
  },
  components: {//局部注册
    // clickCounter, //通过 Babel 和 webpack 使用 ES2015 模块其实是 'clickCounter': clickCounter 的缩写
    'clickCounter':clickCounter, 
    'editMe':{              
      // data: function () {    // data 必须是一个函数function，每个实例可以被返回一个独立的对象
      data () { 
        return {
          message: "AAAA"
        }
      },
      //vue模板只能有一个根元素
      template: '<div><input v-model="message" placeholder="edit me"><br><span>Message is: {{ message }}</span></div>'
    },
    'editMe2':editMe2
  }

}) 

</script>
