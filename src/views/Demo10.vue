
/* 组件事件 */
<template>
  <div>
    <h4>监听组件事件</h4>
    <div style="border:1px solid red;" >
      <p>点击子组件按钮时，告诉父组件放大所有博文的文本</p>
      <p>引用组件时，父组件想获取子组件的数据并触发自己的事件，这时需要父组件监听子组件。</p>
      <p>当子组件点击按钮时，会告诉父组件，传值并触发authorInfo函数</p>
      <p>父组件通过v-on监听子组件实例的事件: v-on:authorInfo="alertAuthor($event)"，$event获取到子组件的传值</p>
      <p>子组件：this.$emit('authorInfo',{id:1,usename:'zhoubc',name:'小明'})，后面｛｝里的参数是可省略的</p>
      <newComponent1  v-on:authorInfo="alertAuthor($event)"  class='shape'></newComponent1>
   
      <p>注意事件名是不区分的大小写的，camelCase 与kebab-case 两种取名方法不能共用</p>
    
    </div>

    <h4>自定义组件的 v-model</h4>
    <div style="border:1px solid red;" >
      <p>v-model 默认利用"value"的prop和监听名为"input"的事件</p>
      <span>父组件中的searchText值：{{searchText}}</span><br>
      <newComponent2 v-model="searchText" class='shape'></newComponent2>
      <p> v-model="searchText" 等同于  v-bind:val="searchText" v-on:sendVal="searchText = $event"</p>
      <newComponent2 v-bind:value="searchText" v-on:input="searchText = $event" class='shape'></newComponent2> 
      <p>但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的，model 选项可以用来避免这样的冲突</p>
      <span>父组件中的isOK值：{{isOK}}</span><br>
      <newComponent3 v-model="isOK" class='shape'></newComponent3>
      <br>
    </div>

    <h4>将原生事件绑定到组件</h4>
    <div style="border:1px solid red;" >
      
      <p>想在一个组件的根元素上直接监听一个原生事件，你可使用 v-on 的 .native 修饰符</p>
      <div class='shape'><newComponent4 v-bind:name="name" v-on:focus.native="onFocus" ></newComponent4></div>
     
      <p>不过这并不是个好主意，当想监听组件的孙子元素时，.native将静默失败，无任何报错</p>
      <p>为解决这个问题，vue提供了一个 $listeners property，它是一个对象，里面包含了作用在这个组件上的所有监听器。</p>
      <div class='shape'><newComponent5 label="用户名" v-on="listeners" ></newComponent5></div>
      <p>父组件引用v-on="listeners"或子组件中v-on="inputListeners2"，其实 v-on="{a: f()}"是等价于v-on:a="f()"</p>
      <!-- <newComponent5 label="用户名" v-on:event-one="methodOne" v-on:event-two="methodTwo" ></newComponent5> -->
      <p>JavaScript 标准内置对象:Object.assign(target, source)  用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。</p>
      <br>
    </div>

    <h4>prop双向绑定</h4>
    <div style="border:1px solid red;" >
      
      <p>推荐以 update:myPropName 的模式触发事件</p>

      <p>父组件可以监听那个事件并根据需要更新一个本地的数据 property，为了方便提供一个缩写，即 .sync 修饰符</p>
      <button v-on:click="openDiv">打开</button>
      <newComponent6  v-bind:show="isShow" v-on:update:show="updateShow($event)" class='shape'></newComponent6>
      <p>  v-bind:show="isShow" v-on:update:show="updateShow($event)" 等同于 v-bind:show.sync='isShow' </p>
      <newComponent6  v-bind:show.sync='isShow' class='shape'></newComponent6>
      
      <br>
    </div>
    
    <br> <br> <br><br> <br> <br>
    
  </div>
</template>

<script>
export default ({
  name:'demo10',
  data () {
    return {
      name: "zhoubc",
      postFontSize: 10,
      searchText: "这是父组件的初始值",
      isOK: true,
      count:0,
      listeners:{
        focus: function (event) { 
          console.log("父组件传给子组件的foncus函数,  <用户名>字段触发了focus事件。。。")
        },
        input: function (value) { 
          console.log("父组件传给子组件的input函数,  <用户名>字段触发了input事件。。。")
        }
      },
      isShow:true
    }
  },
  methods: {
    alertAuthor:function(info){
      alert("收到子组件发送的作者名："+info.name)
    },
    onFocus:function(){
      this.count++;
      console.log("v-on:focus.native触发了"+this.count+"次。。。")
    },
    updateShow:function(b){
     this.isShow=b
    },
    openDiv:function(){
      this.isShow=true
    }
  },
  components:{
    'newComponent1':{             
      props: ['content'],
      template: '<div><button v-on:click="sendAuthorInfo">作者信息传值给父组件</button> <p>这是一篇博文，很精彩~~~~~~~~~~~~</p> </div>',
      methods: {
        sendAuthorInfo: function(e){
          this.$emit('authorInfo',{id:1,usename:'zhoubc',name:'小明'}); //传值的参数是可以省略的
          e.preventDefault();
        }
      }
    },
    'newComponent2':{             
      props: ['value'],
      //$event.target  返回触发了事件的DOM元素
      template: `<div>子组件中的输入框：<input type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)"></div>`
    },
    'newComponent3':{             
      model: {
        prop: 'checked',
        event: 'change'
      },
      props: {
        checked: Boolean
      },
      template: `<div>子组件中的多选框：<input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)"></div>`
    }, 
    'newComponent4':{             
      props: ['name'],
      template: `<input type="text" v-bind:value="name" ></div>`
    },
    'newComponent5':{             
      //inheritAttrs: false,
      props: ['label', 'value'], 
      /* created () {
        console.log(this.$listeners)
      }, */
      computed: {
        inputListeners1: function () {
          return this.$listeners
        },
        inputListeners2: function () {
          // `Object.assign` 将所有的对象合并为一个新对象
          return Object.assign({},
            // 我们从父级添加所有的监听器
            this.$listeners,
            // 然后我们添加自定义监听器，
            // 或覆写一些监听器的行为
            {
              // 这里确保组件配合 `v-model` 的工作
              input: function (event) {
                console.log("覆盖父组件传的input函数，<用户名>字段触发了input事件。。。")
              }
            }
          )
        }
      },
      template: `<label>{{ label }}：<input v-bind="$attrs" v-bind:value="value" v-on="inputListeners2" ></label>`
    },
    'newComponent6':{ 
      props:['show'],  
      methods: {
        closeDiv() {
          this.$emit('update:show', false); 
        }
      },  
      template: `<div v-if="show">
                    <p>默认初始值是{{show}}，所以是显示的</p>
                    <button v-on:click="closeDiv">关闭</button>
                 </div>`
    }
  }
}) 

</script>

