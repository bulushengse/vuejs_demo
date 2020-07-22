
/* 组件传值 */
<template>
  <div >
    <h4>向组件传递数据 props</h4>
    <div style="border:1px solid red">
      <p>一个组件默认可以拥有任意数量的参数，任何值(String,Number,Boolean,Array,Object等)都可以传递。</p>
      <p>例如：&#60newComponebt1 postTitle="我的日记" content="xxx">,等同于 &#60newComponebt1 post-title="我的日记" content="xxx">，大小写不敏感  </p>
      <newComponent1 postTitle="我的日记" content="今天天气晴，XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXXXXXXXX，XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXXXX，XXXXXXXXXXXXXXXXXXXXXXXXXXXXX。" class='shape'></newComponent1>
     <!--  <newComponent1 post-title="我的日记" content="今天天气晴，XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXXXXXXXX，XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX，XXXXXXXXX，XXXXXXXXXXXXXXXXXXXXXXXXXXXXX。" class='shape'></newComponent1> -->
    </div>

    <h4>传递静态或动态 Prop</h4> 
    <div style="border:1px solid red">
     <p>可以使用v-bind来动态传递prop。例如：&#60newComponebt3 v-for="blog in BlogList" v-bind:key="blog.id" v-bind:blog="blog">，要传递prop较多时，可直接传递一个object。</p>
      <table style="border:1px solid #ccc;margin: 0 auto;" width="300px" >
        <tr><th colspan="3">博文列表</th></tr>
        <newComponent2  v-for="blog in BlogList" v-bind:key="blog.id" v-bind:blog="blog"></newComponent2>
      </table>
    </div>

    <h4>验证 Prop</h4> 
    <div style="border:1px solid red">
      <p>到这里，我们只看到了组件传参props都以字符串数组形式列出  ==> props: ['title', 'likes', 'isPublished', 'commentIds', 'author']</p>
      <p> 但是，通常你希望每个 prop 都有指定的值类型，你可以以对象形式列出 prop：</p>
      <div style="text-align: left;margin-left: 500px;">
      props: {                  <br>&emsp;&emsp;
        title: String,          <br>&emsp;&emsp;
        likes: Number,          <br>&emsp;&emsp;
        isPublished: Boolean,   <br>&emsp;&emsp;
        commentIds: Array,      <br>&emsp;&emsp;
        author: Object,         <br>&emsp;&emsp;
        startTime: Date,        <br>&emsp;&emsp;
        callback: Function,     <br>&emsp;&emsp;
        contactsPromise: Promise // or any other constructor <br>
      }
      </div>

      <p>另外，可以为组件的prop指定验证要求，如果有一个需求没有被满足，则vue会在浏览器控制台中警告你。这在开发一个会被别人用到的组件时尤其有帮助。</p>
      <div style="text-align: left;margin-left: 500px;">
        props: {                                                                 <br>&emsp;&emsp;
          propA: Number,// 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)<br>&emsp;&emsp;
          propB: [String, Number], // 多个可能的类型                              <br>&emsp;&emsp;
          propC: {// 验证prop                                                    <br>&emsp;&emsp;&emsp;
            type: String,   // 类型                                              <br>&emsp;&emsp;&emsp;
            required: false,   // 是否必输，默认false                              <br>&emsp;&emsp;&emsp;
            default: "hello",  // 默认值                                          <br>&emsp;&emsp;&emsp;
            //default:  function () {// 如果是对象或数组默认值可以用函数            <br>&emsp;&emsp;&emsp;&emsp;
            //  return { message: 'hello' }                                      <br>&emsp;&emsp;&emsp;
            //},                                                                 <br>&emsp;&emsp;&emsp;
            validator: function (value) { // 自定义验证函数                       <br>&emsp;&emsp;&emsp;&emsp;
              return ['success', 'warning', 'danger'].indexOf(value) !== -1// 这个值必须匹配下列字符串中的一个<br>&emsp;&emsp;&emsp;
            }                                                                    <br>&emsp;&emsp;
          }                                                                      <br>
        }                                                                        <br>
      </div>
      
      详见components/raffle-machine.vue
      <raffle-machine class='shape' v-bind:nameArray="nameArray"></raffle-machine>
      <br>
    </div>

    <h4>无定义的 Prop</h4> 
    <div style="border:1px solid red">
      <p>组件可以接受任意的attribute ，当该组件没有定义prop，那么会被添加到这个组件的根元素上。 </p>
      <p>例如&#60raffle-machine class='shape'>&#60/raffle-machine>，class='shape' 这个是一个无定义的prop，会加到raffle-machine组件的根元素div上</p>
      <p>如果组件根元素上已有class='default' ，那么会将两边的值会被合并起来，即class='default shape'</p>
      <p>如果你不希望组件的根元素继承attribute，你可以在组件的选项中设置inheritAttrs: false。 配合实例的 $attrs一起使用</p>
      <p>注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定到根元素。</p>
      <newComponent3 label="姓名" class='shape'  placeholder='Enter your name'   maxlength="10" ></newComponent3>
    </div>

  <br> <br> <br>
  </div>
</template>

<script>
import clickCounter from '@/components/click-counter' 

export default ({
  name:'demo9',
  data () {
    return {
      name: "zhoubc",
      BlogList:  [
        { id: 1, title: 'My journey with Vue', date:'2020-06-05', author:'zhoubc'},
        { id: 2, title: 'Blogging with Vue', date:'2020-06-05', author:'zhoubc'},
        { id: 3, title: 'Why Vue is so fun', date:'2020-06-05', author:'zhoubc'},
        { id: 4, title: 'Hello Vue', date:'2020-06-05', author:'zhoubc'},
        { id: 5, title: 'Happy learning Vue ', date:'2020-06-05', author:'zhoubc'},
      ],
      postFontSize: 10,
      searchText: "我是初始值",
      nameArray: ['小明明','周杰伦','小刚','刘德华','林俊杰','小红','李林']
     
    }
  },
  components: {//局部注册
    // clickCounter, //通过 Babel 和 webpack 使用 ES2015 模块其实是 'clickCounter': clickCounter 的缩写
    'clickCounter':clickCounter, 
    'editMe':{              
      // data: function () {    // data 必须是一个函数function，每个实例可以被返回一个独立的对象
      data () { 
        return {
          message: "AAAA"
        }
      },
      //vue模板只能有一个根元素
      template: '<div><input v-model="message" placeholder="edit me"><br><span>Message is: {{ message }}</span></div>'
    },
    'newComponent1':{             
      props: ['postTitle','content'],
      template: '<div style="width: 600px;margin: 0 auto;"><h5>{{ postTitle }}</h5><hr><p style="font-size:10px;" v-html="content"></p></div>'
    },
    'newComponent2':{             
      props: ['blog'],
      template: '<tr><td><a href="">{{ blog.title }}</a></td><td>{{ blog.author }}</td><td>{{ blog.date }}</td></tr>'
    }, 
    'newComponent3':{
      inheritAttrs: false,
      props: ['label', 'value'], 
      template: `<div><label>{{ label }}:<input v-bind="$attrs" v-bind:value="value"></label></div>`
    } 
  }

}) 

</script>