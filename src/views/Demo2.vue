/* 计算属性和侦听器 */
<template>
  <div>
    <h3>计算属性computed</h3>
    <p>message: "{{ message }}"</p>
    <p><span v-pre>“{{ message.split('').reverse().join('') }}”</span>: {{ message.split('').reverse().join('') }}</p>
    <p>//对于在模版中用<span v-pre>“{{ message.split('').reverse().join('') }}”</span>，</p>
    <p>//这里不再是简单的取值了，放入太多的逻辑会显得复杂且难以维护，因此你应当使用计算属性。</p>
    <p>//当message发生改变时，所有依赖 reversedMessage 的绑定也会更新。</p>
    <p>计算属性reversedMessage: "{{ reversedMessage }}" 《==  <button v-on:click="updateMessage">单击运行this.message = '987654321'</button></p>
    <p>计算属性judgeRetCode，判断retCode: "{{ judgeRetCode }}"</p>
    
    <p>//当然，调用方法也可达到同样的效果，但是计算属性是基于响应式依赖进行缓存的.</p>
    <p>//下面的计算属性将不再更新，因为 Date.now()不是响应式依赖</p>
    <p>计算属性，nowTime: "{{ nowTime }}" </p>

    <p>//计算属性默认只有getter，不过在需要时你也可以提供一个setter</p>
    <p>//当运行this.id = '999'时，setter会被调用，id也会相应地被更新。</p>
    <p>计算属性，id: "{{ id }}" 《==  <button v-on:click="updateId">单击运行this.id = '999'</button></p>
    
    <h3>侦听器watch</h3>
    <p>//虽然计算属性在大多数情况下更合适，但当需要在数据变化时执行异步或开销较大的操作时，自定义一个watch是最有用的。</p>
    <div id="watch-example">
      <p>
        1加1等于几？:
        <button value="1" @click="upddateAnswer(1)">1</button>
        <button value="2" @click="upddateAnswer(2)">2</button>
        <button value="3" @click="upddateAnswer(3)">3</button>
        <button value="4" @click="upddateAnswer(4)">4</button>
      </p>
      <p>你的答案：{{ answer }}</p>
      <p v-if="showRightAnswer">正确答案：{{ rightAnswer }}</p>
    </div>

    <br> <br> <br>
    
  </div>
</template>

<script>
export default ({
  name:'demo2',
  data () {
    return {
      message: "123456789",
      retCode: "1",
      id: "888",
      answer: '',
      rightAnswer: '2',
      showRightAnswer:false
    }
  },
/*   beforeMount(){
    alert("html加载完成前执行")
  }, */
  mounted(){//参考src/assets/vue实例生命周期.png ，更多方法可调用
    alert("html加载完成后执行")
  },
  computed:{//计算属性
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    judgeRetCode: function () {
      if (this.retCode=='1') {
        return "yes"
      } else {  
        return "no"
      }
    },
    nowTime:function () {
      return Date.now()
    },
    Id: {
      // getter
      get: function () {
        return this.id
      },
      // setter
      set: function (newId) {
        this.id = newId
      }
    }
  },
  watch:{//侦听器，监听一个值的变化，然后执行相对应的函数
    answer: function (newValue, oldvalue) {//监听this.answer值
      console.log(newValue+'|'+oldvalue);
      if (newValue==this.rightAnswer) {
        alert("恭喜你答对了！")
        this.showRightAnswer=true;
      } else {
        alert("错误答案，请再接再厉！")
        this.showRightAnswer=false;
      }
    }
  },
  methods: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    updateMessage: function() {
      this.message = "987654321"
    },
    updateId: function() {
      this.Id = "999"
    },
    upddateAnswer: function(val){
      this.answer = val
    }
  }
}) 

</script>

