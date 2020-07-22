/* Class 与 Style 绑定 */
<template>
  <div>
  <h3>绑定HTML Class</h3>
  <p>你可以用v-bind:class，动态切换class</p>
    
  <p>对于class_b这个class存在与否将取决于数据属性isShowB，与普通的class属性是共存的<br><span>{{demoTxt1}}</span></p>
  <div class="class_a" v-bind:class="{class_b: isShowB, class_c: isShowC}"></div>
  
  <p>也可绑定一个返回对象的计算属性 <br><span>{{demoTxt2}}</span></p>
  <div class="class_a" v-bind:class="classObject"></div>

  <p>也可绑定一个数组<br><span>{{demoTxt3}}</span></p>
  <div class="class_a" v-bind:class="[class1, class2]"></div>

  <p>在数组中，也可用三元表达式<br><span>{{demoTxt4}}</span></p>
  <div class="class_a" v-bind:class="[isShowB ? class1 : '', class2]"></div>

  <p>在数组中，当有多个条件class时用三元表达式这样写有些繁琐，你也可用对象语法<br><span>{{demoTxt5}}</span></p>
  <div class="class_a" v-bind:class="[{ class_b: isShowB }, class2]"></div>
 
  <h3>绑定内联样式Style</h3>
  <p>你可以用v-bind:style，动态切换style</p>

  <p>对于width的值从数据属性width中获取，CSS属性值可以用驼峰式或短横线分隔来命名<br><span>{{demoTxt6}}</span></p>
  <div v-bind:style="{ height: height, fontSize: fontSize + 'px', border: border }">我我我我我</div>

  <p>也可绑定一个样式对象或返回对象的计算属性更好，让模板更清晰</p>
  <p><span>{{demoTxt7}}</span></p>
  <div v-bind:style="styleObj">我我我我我</div>
  <p><span>{{demoTxt8}}</span></p>
  <div v-bind:style="styleObject">我我我我我</div>

  <p>也可使用数组将多个样式对象应用到同一个元素上<span>{{demoTxt9}}</span></p>
  <div v-bind:style="[baseStyles, styleObject]">我我我我我</div>

  <br> <br> <br>
  
</div>
</template>
<style>
.class_a{
  height: 80px;
}

.class_b{
  border: 3px solid red;
} 

.class_c{
  background-color: cornflowerblue;
}
  
</style>
<script>
export default ({
  name:'demo3',
  data () {
    return {
      demoTxt1:"<div class='class_a' v-bind:class='{class_b: isShowB, class_c: isShowC}'></div>",
      demoTxt2:"<div class='class_a' v-bind:class='classObject'></div>",
      demoTxt3:"<div class='class_a' v-bind:class='[class1, class2]'></div>",
      demoTxt4:"<div class='class_a' v-bind:class='[isShowB ? class1 : '', class2]'></div>",
      demoTxt5:"<div v-bind:class='[{ class_b: isShowB }, class2]'></div>",
      demoTxt6:"<div v-bind:style='{ width: width, fontSize: fontSize + 'px' }'>我我我我我</div>",
      demoTxt7:"<div v-bind:style='styleObj'>我我我我我</div>",
      demoTxt8:"<div v-bind:style='styleObject'>我我我我我</div>",
      demoTxt9:"<div v-bind:style='[baseStyles, styleObject]'>我我我我我</div>",
      isShowB: true,
      isShowC: false,
      isShowAllClass: true,
      class1: "class_b",
      class2: "class_c",
      height: "80px",
      fontSize: "30",
      border: "3px solid red",
      styleObject: {
        border: '3px solid red',
        height: '80px',
        fontSize: '30px'
      },
      baseStyles: {
        backgroundColor:'cornflowerblue' //background-color
      }
    
    }
  },
  computed: {
    classObject: function () {
      return {
        class_b: this.isShowB && this.isShowAllClass,
        class_c: this.isShowC && this.isShowAllClass,
      }
    },
    styleObj: function () {
      return {
        height: '80px',
        fontSize: '30px'
      }
    }
  },
  methods: {
    showDetails: function() {
      alert("111");
        
    }
  }
}) 
</script>

