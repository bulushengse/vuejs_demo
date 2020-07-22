/* 条件渲染 */
<template>
  <div>
    <h1>v-if</h1>
    <p>v-if用于判断条件表达式的真假来渲染内容</p>
    <p>（<span v-if="1==1">现在你看到我了</span>）  《--表达式1==1 </p>
    <p>（<span v-if="1==0">现在你看不到我</span>）  《--表达式1==0 </p>

    <h1>v-else-if</h1>
    <p>也可用v-else-if添加一个“ else-if块 ”<br><span>{{demoTxt1}}</span> </p>
    <p>v-else-if元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别 </p>
    <p>
      <span v-if="status==1">status==1</span> 
      <span v-else-if="status==0">status==0</span>
    </p>

    <h1>v-else</h1>
    <p>也可用v-else添加一个“ else块 ”<br><span>{{demoTxt2}}</span> </p>
    <p>v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别 </p>
    <p>
      <span v-if="status==1">status==1</span> 
      <span v-else>status==0</span>
    </p>
    
    <p>v-if必须添加到一个元素上，但如果想切换多个元素，可以把一个template 元素当做不可见的包裹元素</p>
    <template v-if="loginType1 === 'username'">
      <label>用户名:</label>
      <input placeholder="Enter your username">
      <button v-on:click="updateLoginType1">更换登录方式</button>
    </template>
    <template v-else>
      <label>邮箱:</label>
      <input placeholder="Enter your email address">
      <button v-on:click="updateLoginType1">更换登录方式</button>
    </template>
    
    <p>另外，从上面的例子中，切换loginType不会清除用户已经输入的内容。</p>
    <p>因为两个模板使用了相同的元素，input不会被替换掉，仅仅是替换了它的placeholder。</p>
    <p>但有时不符合实际需求，所以提供了另一种方式表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的key属性即可。</p>
    <p>//key属性的详细说明见Demo5.vue</p>
    <template v-if="loginType2 === 'username'">
      <label>用户名:</label>
      <input placeholder="Enter your username" key="username-input">
      <button v-on:click="updateLoginType2">更换登录方式</button>
    </template>
    <template v-else>
      <label>邮箱:</label>
      <input placeholder="Enter your email address" key="email-input">
      <button v-on:click="updateLoginType2">更换登录方式</button>
    </template>
    <p>注意，label元素仍然会被复用，因为它们没有添加key属性。</p>

    <h1>v-show</h1>
    <p>v-show指令用法大致与v-if一样，不同的是v-show只是简单地切换元素的CSS属性display</p>
    <p>注意，v-show 不支持template元素，也不支持v-else</p>
    <p>一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。</p>

    <br> <br> <br>
    
  </div>
</template>

<script>
export default ({
  name:'demo4',
  data () {
    return {
      demoTxt1: "<span v-if='status==1'>status==1</span><span v-else-if='status==0'>status==0</span>",
      demoTxt2: "<span v-if='status==1'>status==1</span><span v-else>status==0</span>",
      name: "zhoubc",
      status: 1,
      loginType1: "username",
      loginType2: "username"
    }
  },
  methods: {
    updateLoginType1: function() {
      if(this.loginType1=='username'){
        this.loginType1 = "email"
      }else if(this.loginType1=='email'){
        this.loginType1 = "username"
      }
    },
    updateLoginType2: function() {
      if(this.loginType2=='username'){
        this.loginType2 = "email"
      }else if(this.loginType2=='email'){
        this.loginType2 = "username"
      }
    }
  }
}) 

</script>

