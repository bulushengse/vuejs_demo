
/* 插槽 */
<template>
  <div>
    <h4>插槽内容</h4>
    <div style="border:1px solid red;" >
      <p>向一个组件传递内容，子组件可用vue自定义的slot标签，该slot标签渲染时将会被替换成要传递内容。</p>
      <p>插槽内可以包含任何模板代码，包括html，甚至引用其它组件</p>
      <newComponent1 class='shape'>Error! {{error}}<a href="">详情</a></newComponent1>
      <br>
    </div>

    <h4>后备内容</h4>
    <div style="border:1px solid red;" >
      <p>当父级组件中使用子组件并且不提供任何插槽内容时，子组件中slot标签的内容将渲染，否则反之</p>
      <newComponent2 class='shape'></newComponent2>
    </div>
    
    <h4>具名插槽</h4>
    <div style="border:1px solid red;" >
      <p>有时我们需要多个插槽，slot标签元素有一个特殊的attribute：name，用来定义额外的插槽</p>
      <p>一个不带name的slot标签会带有隐含的名字“default”</p>
      <p>注意 v-slot 只能添加在 template标签上 ,    v-slot:default 其缩写#default</p>
      <p>定义动态的插槽名   v-slot:[slotName]</p>
      <newComponent3 class='shape'>
        <template v-slot:header>
          <h1>Here might be a page title</h1>
        </template>
      
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      
        <!-- <template v-slot:footer>
          <p>Here's some contact info</p>
        </template> -->
       <!--  <template #footer>
          <p>Here's some contact info</p>
        </template> -->
        <template v-slot:[slotName]>
          <p>Here's some contact info</p>
        </template>

      </newComponent3>
    </div>


    <h4>作用域插槽</h4>
    <div style="border:1px solid red;" >
      <div class='shape'><newComponent4></newComponent4></div>
      <p>有时让插槽内容能够访问子组件中才有的数据是很有用的。</p>
      <p>子组件备用内容{ user.username }，想换掉备用内容改为{ user.name }，将user作为slot标签元素的一个attribute绑定上去： v-bind:user="user"</p>
      <p>在父级组件定义对应的具名插槽为v-slot:default="suiyimizi" ，如默认插槽可简写v-slot="suiyimizi"，用法{ suiyimizi.user.name } </p>
      <div class='shape'><newComponent4><template v-slot:default="suiyimizi">{{ suiyimizi.user.name }}</template></newComponent4></div>

      <p>绑定在slot元素上的attribute被称为插槽prop，“suiyimizi” ，推荐使用传入具体的插槽 prop， v-slot="{user}"，用法{ user.name }，这样更为简洁 </p>
      <div class='shape'><newComponent4><template v-slot="{user}">{{ user.name }}</template></newComponent4></div>

      <p>也可将user重命名为person，v-slot="{user: person}"</p>
      <div class='shape'><newComponent4><template v-slot="{user: person}">{{ person.name }}</template></newComponent4></div>

      <!-- 不知为何没效果 -->
      <!--  <p>也可定义后备内容，用于插槽prop是undefined的情形，v-slot="{user = { smallName: 'Guest' }}"</p>    
      <div class='shape'><newComponent4><template v-slot="{user = { smallname: 'Guest' }}">{{ user.smallname }}</template></newComponent4></div> -->

    </div>

    <h4>可复用的模版 </h4>
    <div style="border:1px solid red;" >
      <p>作用域插槽有很多用处，自行探索。。。</p>
      <newComponent5 v-bind:filteredTodos="todos">
        <template v-slot:todo="{ todo }"><span v-if="todo.isComplete">✓</span>{{ todo.text }}</template>
      </newComponent5>
    </div>


    <br> <br> <br>
  </div>
</template>

<script>

export default ({
  name:'demo11',
  data () {
    return {
      name: "zhoubc",
      error: "404找不到页面！！！",
      slotName:"footer",
      todos:[{id:1,text:'小明',isComplete:true},{id:2,text:'小红',isComplete:false},{id:3,text:'小兰',isComplete:true}]
    }
  },
  methods: {
   
  },
  components: {
    'newComponent1':{             
      template: `<div><slot></slot></div>`
    },
    'newComponent2':{             
      template: `<div><slot>这是子组件原内容</slot></div>`
    },
    'newComponent3':{             
      template: `<div class="container">
                  <header>
                    <slot name="header"></slot>
                  </header>
                  <main>
                    <!-- 带有隐含的名字“default”。 -->
                    <slot></slot>
                  </main>
                  <footer>
                    <slot name="footer"></slot>
                  </footer>
                </div>`
    },
    'newComponent4':{
      data () {
        return {
          user: {
            username:'不露i',
            name:'zhoubincheng',
            sex:'',
            age:''
          }
        }
      },    
      template: `<span><slot v-bind:user="user">{{ user.username }}</slot></span>`
    },
    'newComponent5':{     
      props: ['filteredTodos'],      
      template: `<ul>
                  <li v-for="todo in filteredTodos" v-bind:key="todo.id">
                    <!-- 我们为每个 todo 准备了一个插槽，将 todo 对象作为一个插槽的 prop 传入。-->
                    <slot name="todo" v-bind:todo="todo">
                    <!-- 后备内容 -->
                    {{ todo.text }}
                    </slot>
                  </li>
                 </ul>` 
    }
  }

}) 

</script>

