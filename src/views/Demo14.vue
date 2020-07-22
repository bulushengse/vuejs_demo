
/* 过渡 & 动画 */
<template>
  <div>
    <h4>单元素/组件的过渡</h4>
    <div style="border:1px solid red;" >
      <p>vue提供了transition的封装组件，可设置的动画效果与css3的transition属性是相同的</p>
      <p>在下列情形中，可以给任何元素和组件添加进入/离开过渡</p>
      1.条件渲染 (使用 v-if) <br>
      2.条件展示 (使用 v-show) <br>
      3.动态组件 <br>
      4.组件根节点 <br><br>

      <button v-on:click="show1 = !show1">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show1">hello</p>
      </transition>
   
      <p>过渡的6个class切换：</p>
      v-enter进入过渡开始状态，v-enter-active进入过渡生效时的状态，v-enter-to进入过渡的结束状态<br>
      v-leave离开过渡的开始状态，v-leave-active离开过渡生效时的状态，v-leave-to离开过渡的结束状态<br>
      v- 是transition类名的默认前缀。<br>

      <p>自定义过渡的类名</p>
      我们可以通过以下 attribute 来自定义过渡类名：<br>
      enter-class<br>
      enter-active-class<br>
      enter-to-class (2.1.8+)<br>
      leave-class<br>
      leave-active-class<br>
      leave-to-class (2.1.8+)<br>

      <p>自定义过渡类名的优先级高于普通的类名，与其他第三方 CSS 动画库，如 Animate.css 结合使用十分有用。cnpm install animate.css --save-dev</p>

      <div>
        <button @click="show2 = !show2">
          Toggle render
        </button>
        <transition
          name="custom-classes-transition"
          enter-active-class="animate__animated animate__zoomInLeft"
          leave-active-class="animate__animated animate__zoomOutDown"
        >
          <p v-if="show2">hello</p>
        </transition>
      </div>
    
      <p>JavaScript 钩子</p>
      <button v-on:click="show3 = !show3">
        Toggle
      </button>
      <!-- <transition name="fade" :duration="{ enter: 5000, leave: 8000 }"> -->
      <transition name="fade"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled">

        <p v-if="show3">hello</p>
      </transition>

      <p>当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。</p>
      
      <p>Velocity 和 jQuery.animate 的工作方式类似，也是用来实现 JavaScript 动画的一个很棒的选择 cnpm install velocity-animate --save-dev</p>
      <div>
        <button @click="show4 = !show4">
          Toggle
        </button>
        <transition
          v-on:before-enter="t_beforeEnter"
          v-on:enter="t_enter"
          v-on:leave="t_leave"
          v-bind:css="false"
        >
          <p v-if="show4">
            Demo
          </p>
        </transition>
      </div>
    </div>


    <h4>初始渲染的过渡</h4>
    <div style="border:1px solid red;" >
        <p>可以通过 appear attribute 设置节点在初始渲染的过渡</p>
    <!--  <transition 
        appear   
        v-on:before-appear="customBeforeAppearHook"
        v-on:appear="customAppearHook"
        v-on:after-appear="customAfterAppearHook"
        v-on:appear-cancelled="customAppearCancelledHook"> -->
      <transition
        appear
        appear-active-class="animate__animated animate__bounce animate__delay-2s"
      >
      <!-- appear-class="animate__animated animate__backInUp"
      appear-to-class="animate__animated animate__jello" -->
        <h1>hello</h1>
      </transition>
    </div>
 
    <h4>多元素/组件的过渡</h4>
    <div style="border:1px solid red;" >

      <p>多个元素的过渡</p>
      in-out：新元素先进行过渡，完成之后当前元素过渡离开。 <br>
      out-in：当前元素先进行过渡，完成之后新元素过渡进入。 <br>

      <transition   name="fade" mode="out-in">
      <!-- <transition   name="fade" mode="in-out"> -->
        <button v-bind:key="docState" v-on:click="conversion">
          {{ buttonMessage }}
        </button>
      </transition>


      <p>多个组件的过渡</p>
      <input type="radio" id="aaa" v-model="view" value="v-a"> 
      <label for="aaa">A</label>
      <input type="radio" id="bbb" v-model="view" value="v-b">
      <label for="bbb">B</label>
      <transition name="fade" mode="out-in">
        <component v-bind:is="view"></component>
      </transition>

    </div>

    <h4>列表过渡</h4>
    <div style="border:1px solid red;" >

      
    </div>

    <h4>状态过渡</h4>
    <div style="border:1px solid red;" >

      
    </div>
   

     <p>更多特效过渡自行探索。。。</p>

    <br> <br> <br>
  </div>
</template>

<script>
import '../../node_modules/_animate.css@4.1.0@animate.css/animate.min.css';
import Velocity from 'velocity-animate';

export default ({
  name:'demo14',
  data () {
    return {
      name: "zhoubc",
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: false,
      docState: 'saved',
      view: 'v-a'
    }
  },
  computed: {
    buttonMessage: function () {
      switch (this.docState) {
        case 'saved': return 'Edit'
        case 'edited': return 'Cancel'
        case 'cancelled': return 'Save'
      }
    }
  },
  methods: {
    conversion: function () {
      if(this.buttonMessage == 'Save'){
        alert("保存成功")
        this.docState = 'saved'
      }else if(this.buttonMessage == 'Edit'){
        alert("编辑成功")
        this.docState = 'edited'
      }else if(this.buttonMessage == 'Cancel'){
        alert("取消成功")
        this.docState = 'cancelled'
      }
    },
    // --------
    // 进入中
    // --------
    beforeEnter: function (el) {
      alert("beforeEnter")
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      alert("执行enter函数。。。")
      done()
    },
    afterEnter: function (el) {
      alert("执行afterEnter函数。。。")
    },
    enterCancelled: function (el) {
      alert("执行enterCancelled函数。。。")
    },

    // --------
    // 离开时
    // --------
    beforeLeave: function (el) {
      alert("执行beforeLeave函数。。。")
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      alert("执行leave函数。。。")
      done()
    },
    afterLeave: function (el) {
      alert("执行afterLeave函数。。。")
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      alert("执行leaveCancelled函数。。。")
    },



    t_beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    t_enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.5em' }, { duration: 200 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    t_leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '10deg' }, { duration: 100 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 0 }, { duration: 100 })
      Velocity(el, {
        rotateZ: '10deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
    
  }

}) 

</script>

<style>
/* 
transition-property (执行变换的属性): none(没有属性改变)，all(所有属性都改变)或指定某一元素(比如color，background等属性)。
transition-duration (动画执行的时间):单位(s)比如"0.1s"也可以写成".1s"，它可以作用于任何元素，包括before和after伪元素。
transition-timing-function  (动画的执行方式):ease(逐渐慢下来)，linear(匀速)，ease-in(由慢到快)，ease-out(由快到慢)，ease-in-out(先慢到快再到慢)，cubic-bezier(该值允许你去自定义一个时间曲线)。
transition-delay  (变换延迟时间):动画延时时间基本用法与duration相同

*/

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;   /* 元素的不透明度级别，从0.0（完全透明）到1.0（完全不透明） */
}





</style>