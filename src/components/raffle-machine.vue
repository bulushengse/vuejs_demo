
/* 组件 */
<template>
  <div>
    <span id="logo">抽奖转转转：</span> 
    <div style="width: 100px;display: inline-block;"><span  id="winner">{{getCurrentName}}</span></div>
    <button v-on:click="start" id="start">开始</button>
    <button v-on:click="end" id="end">停止</button>
  </div>
</template>

<script>
export default ({
  name:'raffle-machine',
  props: {
    nameArray:{
      type: Array,                                             
      required: false,                                       
      default:  function () {        
        return ['小明','周杰伦','小刚','刘德华','林俊杰','小红','李林','筷子兄弟','蔡徐坤','李荣浩','周深','薛之谦','张艺兴','双笙','胡夏','王贰浪']
      },
      validator: function (value) { // 自定义验证函数     
        if(value.length>5){
          return true;
        }else{
          return false;
        }             
      }
    }
  },
  data () {
    return {
      currentIdx: 0,
      currentName: '',
      timer:''
    }
  },
  computed:{//计算属性
    getCurrentName: function () {
      if(this.currentName != null && this.currentName != ''){
        return this.currentName;
      }else{
        return this.nameArray[0];
      }
    }
  },
  methods:{
    start: function(){  
      if(this.timer!=null && this.timer!='' ){
        return;
      }
      this.timer=setInterval(this.showVal, 100);
      //this.currentIdx++;
    },
    end: function(){
      clearInterval(this.timer);
      this.timer='';
    },
    showVal: function(){
       var i = this.currentIdx+1;
      if(i>this.nameArray.length-1){
        this.currentIdx=0;
      }else{
        this.currentIdx++;
      }
      this.currentName=this.nameArray[this.currentIdx]; 
    }
  }
}) 


function Person (name, remark) {
  this.name = name
  this.remark = remark
}


</script>
/* 
lang="scss" rel="stylesheet/scss" SCSS是一种CSS预处理语言
定义了一种新的专门的编程语言，编译后形成正常的css文件，为css增加一些编程特性，无需考虑浏览器的兼容性（完全兼容css3），让css更加简洁、适应性更强，可读性更佳，更易于代码的维护等诸多好处。
安装sass依赖包
cnpm install sass-loader --save-dev
cnpm install node-sass --sava-dev
在build文件夹下的webpack.base.conf.js的rules里面添加配置
{
  test: /\.scss$/,
  loaders: ['style', 'css', 'sass']
}
使用scss时候在所在的style样式标签上添加lang=”scss”即可应用对应的语法


scoped表示局部部署，只作用在当前组件；去掉的话，由于全局注册，全局都可以用！
*/
<!-- <style lang="scss" rel="stylesheet/scss" scoped> -->
<style scoped>  
  #logo {
    font-weight: bold;
    font-size: 15px;
    font-family: "黑体";
    color: #8c888b;
    background: -webkit-linear-gradient(45deg, #70f7fe, #fbd7c6, #fdefac, #bfb5dd, #bed5f5);
    color: transparent;/* 设置字体颜色透明 */
    -webkit-background-clip: text;/* 背景裁剪为文本形式 */
    animation: ran 10s linear infinite;/* 动态10s展示 */
} 

</style>