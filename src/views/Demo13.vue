
/* 处理边界情况 */
<template>
  <div>
    <h4>访问元素 & 组件</h4>
    <div style="border:1px solid red;" >
      <p>在每个 new Vue 实例的子组件中，其根实例可以通过 $root property 进行访问。</p>
      // 获取根组件的数据     <br>
      this.$root.foo        <br>
      // 写入根组件的数据     <br>
      this.$root.foo = 2    <br>
      // 访问根组件的计算属性 <br> 
      this.$root.bar        <br>
      // 调用根组件的方法     <br>
      this.$root.baz()       <br>
      <p>和 $root 类似，$parent property 可以用来从一个子组件访问父组件的实例。</p>
      <newComponent1 class="shape"></newComponent1>

      <p>有的时候你可能需要访问一个子组件，可通过 ref 这个 attribute 为子组件赋予一个 ID 引用</p>
      <newComponent2 ref="newComponent2" class="shape"></newComponent2>
      <button v-on:click="alertDesc">获取子组件 property</button> <br>
      <p>子组件输入框 input ref="input"并新增个focusInput函数，父组件调用this.$refs.newComponent2.focusInput()使其子组件输入框聚焦</p>
      <button v-on:click="focusInput">使子组件输入框聚焦</button>

      <p>依赖注入 :provide 选项允许我们指定想要提供给后代组件的数据/方法。</p>
      <p> provide: function () { return {getName: this.name}}</p>
      <p>在任何后代组件里，inject 选项来接收指定的我们想要添加在这个实例上的property</p>
      <newComponent3 class="shape"></newComponent3>

      <br>
    </div>

    <h4>程序化的事件侦听器</h4>
    <div style="border:1px solid red;" >
      <p> 我们知道$emit的用法可被父组件v-on侦听，Vue 实例同时在其事件接口中提供了其它的方法。</p>
      通过 $on(eventName, eventHandler) 侦听一个事件         <br>
      通过 $once(eventName, eventHandler) 一次性侦听一个事件  <br>
      通过 $off(eventName, eventHandler) 停止侦听一个事件     <br>
     
      <p>你通常不会用到这些，但是当你需要在一个组件实例中手动侦听事件时，它们是派得上用场的。</p>

         例如日期控件的调用，看代码==》   <input ref="datepicker" readonly>
      
    </div>

    <h4>循环引用</h4>
    <div style="border:1px solid red;" >
      <p> 组件是可以在它们自己的模板中调用自身的。 只能通过name选项做此事。</p>
      Vue.component('my-component', {  <br>
        name: 'stack-overflow',<br>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        template: '&#60div>&#60stack-overflow>&#60/stack-overflow>&#60/div>'<br>
      })&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br>
      这样会导致无限循环。“max stack size exceeded”错误<br>
    </div>


    <h4>模板定义的替代品</h4>
    <div style="border:1px solid red;" >
      <p>内联模板inline-template， 演示略。。。 </p>
      <p></p>X-Template，演示略。。。</p>
    </div> 

    <h4>通过 v-once 创建低开销的静态组件</h4>
    <div style="border:1px solid red;" >
      <p>一个组件包含了大量静态内容。在这种情况下，你可以在根元素上添加 v-once以确保这些内容只计算一次然后缓存起来。</p>
    </div> 

    

    <br> <br> <br>
  </div>
</template>
<script>
import '../../node_modules/_pikaday@1.8.0@pikaday/css/pikaday.css';
import Pikaday from 'pikaday';
import Moment from 'moment'; //选择的日期格式化需要

export default ({
  name:'demo13',
  data () {
    return {
      name:"zhoubc",
      menuName:"处理边界情况",
      date:''
    }
  },
  methods: {
    alertDesc: function () {
      alert("描述："+this.$refs.newComponent2.desc)
    },
    focusInput: function () {
      this.$refs.newComponent2.focusInput()
    },
    attachDatepicker: function (refName) {//推荐创建一个可复用的 <input-datepicker> 组件。   
      var i18n = { // 日期插件进行汉化
            previousMonth : '上个月',
            nextMonth   : '下个月',
            months      : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            weekdays    : ['周日','周一','周二','周三','周四','周五','周六'],
            weekdaysShort : ['日','一','二','三','四','五','六']
          } 

      var picker = new Pikaday({
      field: this.$refs[refName], //选择需要日期控件的输入框   cnpm install pikaday --save-dev
      format: 'YYYY-MM-DD',
      i18n:i18n,
      //minDate: new Date(),
      //maxDate: new Date(2020, 12, 31), 
      //yearRange: [2000,2020]
      }) 

      //每个新的实例都程序化地在后期清理它自己：
      this.$once('hook:beforeDestroy', function () {   
        picker.destroy()
      })
    }
  },
  mounted:function(){//html加载完后执行
    this.attachDatepicker('datepicker')//初始化
  },
  provide: function () { //父组件只提供给后代组件的数据aaa和bbb
    return {
      aaa: "Hello world!",
      bbb: "Wish you a happy day!"
    }
  },
  components: {
    'newComponent1':{ 
      methods: {
        alertSystem: function () {
          alert("系统名称："+this.$root.system)
        },
        callReminder: function () {
          this.$root.reminder()
        },
        alertMenuName: function () {
          alert("菜单名称："+this.$parent.menuName)
        }
      },      
      template: `<div>
                  <button v-on:click="alertSystem">获取根实例 property </button><br>
                  <button v-on:click="callReminder">调用根实例 method</button><br><br>
                  <button v-on:click="alertMenuName">获取父级组件 property</button><br>
                </div>`
    },
    'newComponent2':{ 
      data () {
        return {
          desc:"我是子组件"
        }
      },
      methods: {
        focusInput: function () {
          this.$refs.input.focus()
        }
      },
      template: `<div>{{desc}} <br>子组件输入框： <input ref="input"></div>`
    },
    'newComponent3':{ 
      inject: ['aaa','bbb'],  //子组件注入'aaa','bbb'
      template: `<div>获取到父组件提供的字段： aaa: {{aaa}}，bbb:{{bbb}}</div>`
    }
    
  }

}) 

</script>
