
/* 可复用性 & 组合 */
<template>
  <div>
    <h4>混入</h4>
    <div style="border:1px solid red;" >
      <p>vue 混入提供了一种非常灵活的方式，来分发组件中的可复用功能。一个混入对象可以包含任意组件选项。</p>

      <p>当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。</p>
      1. data重复时，以组件数据优先。<br>
      2. created重复时，都将被调用。混入对象的钩子将在组件自身钩子之前调用。<br>
      3. 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。<br>
    
      <p>混入也可以进行全局注册。一旦使用全局混入，它将影响每一个之后创建的 Vue 实例！</p>
    
      <p>自定义选项合并策略。如果想让自定义选项以自定义逻辑合并，可以向 Vue.config.optionMergeStrategies 添加一个函数</p>
    </div>

    <h4>自定义指令</h4>
    <div style="border:1px solid red;" >
      <p>Vue 允许注册自定义指令，一个指令定义对象可以提供如下几个钩子函数 (均为可选)：</p>
      bind：只调用一次，指令第一次绑定到元素时调用。<br>
      inserted：被绑定元素插入父节点时调用。<br>
      update：所在组件的 VNode 更新时调用。<br>
      componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。<br>
      unbind：只调用一次，指令与元素解绑时调用。<br>
      <p>指令钩子函数会被传入以下参数：</p>
      <div style="text-align: left; padding-left: 500px;">
        <li>el：指令所绑定的元素，可以用来直接操作 DOM。<br></li>
        <li>binding：一个对象，包含以下 property：<br></li>
        &emsp;    name：指令名，不包括 v- 前缀。<br>
        &emsp;    value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。<br>
        &emsp;    oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。<br>
        &emsp;    expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。<br>
        &emsp;    arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。<br>
        &emsp;    modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。<br>
        <li>vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。<br></li>
        <li>oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。<br></li>
      </div>
 
      <p>动态指令。通过指令钩子函数的binding参数的传给指令的参数arg，可实现动态指令。 v-pin:[direction]="100"</p>
      <p>div固定在屏幕上方200px, 或左边或右边。比如设置在一个组件里随屏幕滚动。</p>
      <div id="baseexample">
        <p>Scroll down the page</p>
        <p v-pin:[direction]="100">I am pinned onto the page at 200px to the left.</p>
      </div>
    </div>
    
    <h4>渲染函数</h4>
    <div style="border:1px solid red;" >
      <p>Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。</p>
      <p>使用 render 函数重写一个简单的组件，传入一个标题大小的参数level，确定h1,h2,h3,...</p>
      <component1 :level="1">Hello world!</component1>

      <p>这里用到createElement函数，参数如下： </p>
      <div style="text-align: left; padding-left: 500px;">
        createElement(<br>
        &emsp;        // {String | Object | Function} 一个 HTML 标签名、组件选项对象。必填项。<br>
        &emsp;        'div',                                                                <br>
        &emsp;        // {Object} 一个与模板中 attribute 对应的数据对象。可选。                 <br>
        &emsp;        //这里数据对象，包括class，style，attrs，props，on，directives等等，具体请看代码注释。。。<br>
        &emsp;        {  },                                                                     <br>
        &emsp;        // {String | Array} 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成。可选。<br>
        &emsp;        [                                                                         <br>
        &emsp;&emsp;      '这里是一个文本节点',                                                   <br>
        &emsp;&emsp;      createElement('h1', '一则头条'),                                       <br>
        &emsp;&emsp;      createElement(MyComponent, {                                          <br>
&emsp;&emsp;&emsp;&emsp;      props: {                                                          <br>
&emsp;&emsp;&emsp;&emsp;&emsp;   someProp: 'foobar'                                              <br>
&emsp;&emsp;&emsp;&emsp;      }                                                                  <br>
        &emsp;&emsp;    })                                                                        <br>
        &emsp;        ]                                                                           <br>
        )<br>

        <!-- //深入数据对象
        {
          // 与 `v-bind:class` 的 API 相同， 接受一个字符串、对象或字符串和对象组成的数组
          'class': {
            foo: true,
            bar: false
          },
          // 与 `v-bind:style` 的 API 相同，接受一个字符串、对象，或对象组成的数组
          style: {
            color: 'red',
            fontSize: '14px'
          },
          // 普通的 HTML attribute
          attrs: {
            id: 'foo'
          },
          // 组件 prop
          props: {
            myProp: 'bar'
          },
          // DOM property
          domProps: {
            innerHTML: 'baz'
          },
          // 事件监听器在 `on` 内，但不再支持如 `v-on:keyup.enter` 这样的修饰器。 需要在处理函数中手动检查 keyCode。
          on: {
            click: this.clickHandler
          },
          // 仅用于组件，用于监听原生事件，而不是组件内部使用。`vm.$emit` 触发的事件。
          nativeOn: {
            click: this.nativeClickHandler
          },
          // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`。
          directives: [
            {
              name: 'my-custom-directive',
              value: '2',
              expression: '1 + 1',
              arg: 'foo',
              modifiers: {
                bar: true
              }
            }
          ],
          // 作用域插槽的格式为 { name: props => VNode | Array<VNode> }
          scopedSlots: {
            default: props => createElement('span', props.text)
          },
          // 如果组件是其它组件的子组件，需为插槽指定名称
          slot: 'name-of-slot',
          // 其它特殊顶层 property
          key: 'myKey',
          ref: 'myRef',
          // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，那么 `$refs.myRef` 会变成一个数组。
          refInFor: true
        } -->
      </div>
      <p>如果渲染函数中你需要重复很多次的元素/组件，你可以使用工厂函数来实现。</p>
      <component2></component2>

      <p>在模板中使用的 v-if 和 v-for，渲染函数中可以用 JavaScript 的 if/else 和 map 来重写</p>
      <component3 v-bind:items="items"></component3>

      <p>事件 & 按键修饰符，略。。。</p>

      <p>插槽，this.$slots 访问静态插槽的内容，this.$scopedSlots 访问作用域插槽。详细用法略。。。</p>
      
      <p>函数式组件，略。。。</p>
    </div>


    <h4>过滤器</h4>
    <div style="border:1px solid red;" >
    <p>vue.js允许你自定义过滤器，可被用于一些常见的文本格式化</p>

    <p>可以在一个组件的选项中定义本地的过滤器capitalize，可全局定义过滤器。</p>
    filters: {//过滤器 <br>
      capitalize: function (value) {<br>
        <br>
      }<br>
    }<br><br>

    <p>下面这个例子用到了 capitalize 过滤器：</p>
    <!--v-model="message | capitalize"，错误用法~~~-->
    <input type="text" v-model="message"  />  <br> <br>
    //在 `v-bind` 中 v-bind:value="message | capitalize"<br> 
    message: <input v-bind:value="message | capitalize" /> <br> <br>
    //在双花括号中 {{message | capitalize}}<br> 
    message: {{message | capitalize}}<br>
    
    <p>过滤器可以串联： {{ message | filterA | filterB }    </p>
    <p>表达式 message 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，将 filterA 的结果传递到 filterB 中。</p>

    <p>过滤器是 JavaScript 函数，因此可以接收参数：{{ message | filterA('arg1', arg2) }   </p>

    </div>


    <br> <br> <br>
  </div>
</template>

<script>
import Vue from 'vue'

// 定义一个混入对象，
var myMixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created: function () {
    console.log('Hello!, I am mixinObject.')//混入对象的钩子先被调用
  },
  methods: {
    alertFun: function () {
      alert("这是混入对象alert~~~")
    }
  },
  template:'<h3>111111111111111</h3>'  //template不能用
}

export default ({
  mixins: [myMixin],//选项合并
  name:'demo15',
  data () {
    return {
      message: 'goodbye',
      bar: 'def',
      inputVal: 'inputVal',
      direction: 'left',
      items:[
        {id:1,name:'小红'},
        {id:2,name:'小明'},
        {id:3,name:'小刚'}
      ],
      message: 'abc'
    }
  },
  created: function () {
    console.log("Hello!, I am demo15.")//组件钩子后再被调用
    console.log(this.$data)//与混入对象合并使用数据时，在发生重复时以组件数据优先 =>{ message: "goodbye", foo: "abc", bar: "def" } 
    this.alertFun() //调用与混入对象同一函数名，取用组件的函数
  },
  methods: {
    alertFun: function () {
      alert("这是组件alert~~~")
    }
  },
  filters: {//过滤器 
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  directives: {//注册局部指令
    focus: {
      bind: function (el, binding, vnode){//指令初始化设置
        console.log('自定义指令v-focus初始化设置bind')
        console.log('指令名:'+binding.name)
        console.log('指令的绑定值:'+binding.value)
        //console.log('指令的绑定值:'+binding.value.a) //指令函数能够接受所有合法的 JavaScript 表达式。{ color: 'white', text: 'hello!' }
        console.log('传给指令的参数'+binding.arg)
      },
      inserted: function (el) {//被绑定元素插入父节点时调用
        el.focus()
        console.log('自定义指令v-focus，被绑定元素插入父节点时调用inserted')
      },
      update: function () {//所在组件的 VNode 更新时调用
        console.log('自定义指令v-focus，VNode 更新时调用update')
      },
      componentUpdated: function () {//所在组件的 VNode 及其子 VNode 全部更新后调用
        console.log('自定义指令v-focus，Node 及其子 VNode 全部更新后调componentUpdated')
      },
      unbind: function () {//与元素解绑时调用
        console.log('自定义指令v-focus，解绑时调用unbind')
      }
    },
    pin: {
      bind: function (el, binding, vnode) {
        el.style.position = 'fixed'
        var s = binding.arg
        el.style[s] = binding.value + 'px'
        el.style.top = '200px'
      }
    }
  },
  components: {
    'component1':  {
      render: function (createElement) {
        return createElement(
          'h' + this.level,   // 标签名称
          this.$slots.default // 子节点数组
        )
      },
      props: {
        level: {
          type: Number,
          required: true
        }
      }
    },
    'component2':  {
      render: function (createElement) {
        return createElement('div',
          Array.apply(null, { length: 5 }).map(function () {
            return createElement('p', 'hi')
          })
        )
      }
    },
    'component3':  {
      props: ['items'],
      render: function (createElement) {
        if (this.items.length) {
          return createElement('ul', this.items.map(function (item) {
            return createElement('li', item.name)
          }))
        } else {
          return createElement('p', 'No items found.')
        }
      }
    }
  }
    
}) 

 
// 定义一个使用混入对象的组件
/* var component = Vue.extend({
  mixins: [myMixin]
})
var component = new component() */  // => "hello from mixin!"



//全局注册自定义指令 `v-focus` 没试过~~~
/* Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
}) */


//全局注册混入，慎用！！！
/* Vue.mixin({
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
}) */

//自定义选项合并策略，没试过~~~
/* const merge = Vue.config.optionMergeStrategies.computed
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
  if (!toVal) return fromVal
  if (!fromVal) return toVal
  return {
    getters: merge(toVal.getters, fromVal.getters),
    state: merge(toVal.state, fromVal.state),
    actions: merge(toVal.actions, fromVal.actions)
  }
} */



</script>

