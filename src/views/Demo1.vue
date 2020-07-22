/* 
  template标签只是模板占位符，可以包裹元素，但不会被渲染到页面上。
  注意，template标签下只能有一个根节点标签
  举例用法：
   template v-for="(item, index) in list" :key="item.id">
      <div>{{item.text}}--{{index}}</div>
      <span>{{item.text}}</span>
  </template>
*/

/* 模版语法 */
<template>
  <div id="vvv">
    <p v-pre>“{{XXX}}” 动态取值</p>

    <h1>v-pre</h1>
    <p>v-pre标签直接显示<span v-pre>{{name}}</span>而不编译 </p> <!-- <span v-pre>{{ }}</span> -->

    <h1>v-once</h1>
    <h4>会随着绑定的数据name变化而变化 : {{name}}</h4>
    <h4 v-once>name一直不会变 : {{name}}</h4>

    <h1>v-html</h1>
    <p>普通文本：<span>{{rawHtml}}</span></p>
    <p>真正的html代码：<span v-html="rawHtml"></span></p>

    <h1>v-bind</h1>
    <p>//<span v-pre>“{{ }}”</span>不能作用在html attribute上，需要v-bind标签，响应式地更新HTML attribute，缩写“:”</p>
    <p v-bind:id="id">f12 查看元素id</p>
    <!-- <p :id="id">f12 查看元素id</p> -->
    <p><a v-bind:href="url">跳转主页 href</a></p>
    <p>//在v-bind标签下，用“[ ]”动态参数作为attributeName，但有一些语法约束，如空格和引号是无效的</p>
    <p><a v-bind:[attributeName]="url">跳转主页 href</a></p>
    <!-- 编译错误：<p><a v-bind:['aaa'+attributeName]="url">跳转主页 href</a></p> -->

    <h1>v-if</h1>
    <p>//判断表达式的真假来插入/移除元素，详细用法见Demo4.vue</p>
    <p>（<span v-if="status">（现在你看不到我）</span>）   《--表达式status=false </p>
    <p>（<span v-if="1==1">现在你看到我了</span>）  《--表达式1==1 </p>

    <h1>v-on</h1>
    <p>//监听DOM事件，缩写“@”，详细用法见Demo6.vue</p>
    <p><a v-on:click="showDetails">这是个点击事件</a></p> 
    <!-- <p><a @click="showDetails">这是个点击事件</a></p>  -->
    <p>//在v-on标签下，用“[ ]” 动态参数作为eventName，但有一些语法约束，如空格和引号是无效的</p>
    <p><a v-on:[eventName]="showDetails">这是个点击事件</a></p> 
    <!-- <p><a @[eventName]="showDetails">这是个点击事件</a></p>  -->

    <br> <br> <br>
    
  </div>
</template>

<script>
export default ({
  name:'demo1',
  data () {
    return {
      name: "zhoubc",
      rawHtml: "<span style='color:red'>This should be red</span>",
      id: "333333333333333333333333",
      url: "/",
      attributeName: "href",
      status: false,
      eventName: "click"
    }
  },
  methods: {
    showDetails: function() {
      alert("111");
        
    }
  }
}) 

</script>

