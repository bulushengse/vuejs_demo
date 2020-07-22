/* 事件处理 */
<template>
  <div>
    <h1>v-on</h1>
    <p>用v-on指令监听DOM事件，并在触发时运行一些JS代码</p> 
    <div style="border:1px solid red">
      <button v-on:click="counter += 1">点击增加单击次数</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    
    <p>许多事件处理逻辑会更为复杂，所以直接把JS代码写在v-on指令中是不可行的</p>
    <div style="border:1px solid red">
      <p>因此v-on还可以接收一个需要调用的方法名称   v-on:click="showDetails"   </p>
      <button v-on:click="showDetails">hello</button><br/>
      <p>除了直接绑定到一个方法，也可以在内联JS语句中调用方法    v-on:click="showDetails($event)"  </p>
      <p>有时也需要在内联语句处理器中访问原始的DOM事件。可以用特殊变量$event把它传入方法</p>
      <button v-on:click="showDetails($event)">hello</button><br><br>
    </div>

    <p>vue.js 为 v-on 提供了事件修饰符</p> 
    <div style="border:1px solid red">
      <p>.stop 阻止事件继续传播</p>
      <div v-on:click="doDiv">
        <!-- <button v-on:click="doButton">hello</button> -->
        <button v-on:click.stop="doButton">hello</button>
      </div>
      <p>.prevent 不提交不跳转，只是执行自己命名的函数</p>
      <p>.capture 先执行父级的事件函数，再执行子级的触发函数</p>
      <p>.self 只执行本身的事件函数</p>
      <p>.once 事件只会触发一次</p>
      <p>也可 v-on:click.prevent.self，注意顺序</p>
      <p>.passive 不阻止事件的默认行为，与.prevent对立</p>
    </div>


    <p>按键修饰符</p>
    <div style="border:1px solid red">
      <input  v-on:keyup.f1="doButton">输入Enter触发事件
      <p>常用的按键码的别名：</p>
      <p>.enter</p>
      <p>.tab</p>
      <p>.delete</p>
      <p>.esc</p>
      <p>.space</p>
      <p>.up</p>
      <p>.down</p>
      <p>.left</p>
      <p>.right</p>
      <p>在main.js全局设置自定义按键修饰符别名：v-on:keyup.qry="doButton"</p>
      <input  v-on:keyup.qry="doButton">输入v触发事件

      <p>可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。</p>
      <p>.ctrl</p>
      <p>.alt</p>
      <p>.shift</p>
      <p>.meta</p>
      <input v-on:keyup.alt.qry="doButton">输入Alt + V触发事件

      <p>.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。</p>
      <button v-on:click.ctrl="doButton">hello</button>  即使 Alt 或 Shift 被一同按下时再点击也会触发v-on:click.ctrl<br>
      <button v-on:click.ctrl.exact="doButton">hello</button> 且只有 Ctrl 被按下时再点击才触发v-on:click.ctrl.exact<br>
      <button v-on:click.exact="doButton">hello</button>  没有任何系统修饰符被按下的时候才触发v-on:click.exact<br>

      <p>鼠标按钮修饰符:</p>
      <p>.left</p>
      <p>.right</p>
      <p>.middle</p>

    </div>

    <br> <br> <br>

  </div>
</template>

<script>
export default ({
  name:'demo6',
  data () {
    return {
      name: "zhoubc",
      counter: 0
    }
  }, 
  methods: {
    showDetails: function(event) {
      alert("Hello "+this.name+"!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    doDiv: function(){
      alert("div")
    },
    doButton: function(){
      alert("button")
    }
  }
}) 

</script>

