/* 列表渲染 */
<template>
  <div>
    <h1>v-for</h1>
    <p>v-for指令基于一个数组来渲染一个列表</p>
    
    <!-- 
      对于data数据中的数组更新的一些方法：
      push 添加末项
      unshift 添加第一项
      pop 删除末项
      shift 删除第一项
      splice 截取/修改/删除数组元素


      sort 对数组排序
      reverse 取反 
    -->
    <button @click="test_push">添加最后项push</button>
    <button @click="test_unshift">添加第一项unshift</button>
    <button @click="test_pop">删除最后项pop</button>
    <button @click="test_shift">删除第一项shift</button>
    <button @click="test_alldel">删除所有项</button>
    <button @click="test_sort">排序sort(没效果？？？)</button>
    <button @click="test_reverse">反转reverse</button>
    <button @click="test_splice">增删改splice</button>
    <button @click="test_filter">过滤数组filter</button>
    <button @click="test_concat">合并数组concat</button>
    <button @click="test_slice">截取数组slice</button>


    <div style="border:1px solid red">
    <ul id="example-1">
      <!-- <li v-for="item in items" >  -->
      <li v-for="(item , index)  in items" > 
        <input type="checkbox" >编号:{{ item.id }}，姓名：{{ item.name }}，性别：{{ item.sex }}，年龄：{{ item.age }}
        <button @click="remove(index)">删除</button>
        <button @click="test_update(index,'未知名称')">修改姓名</button>
      </li>
    </ul>
    </div>
    <br>

    <p>上面例子中，当选中任意一个li，再添加或删除li时，选中的li会改变。这时需加:key="唯一标识"!</p>
    <p>vue默认用“就地复用”策略，key的作用让每个item有一个唯一的识别身份，为了vue精准的追踪到每一个元素，高效的更新虚拟DOM。</p>
    <div style="border:1px solid red">
    <ul>
      <li v-for="item in items" :key="item.id"> 
        <input type="checkbox" >编号:{{ item.id }}，姓名：{{ item.name }}，性别：{{ item.sex }}，年龄：{{ item.age }}
      </li>
    </ul>
    </div>

    <p>在v-for块中，可以访问所有父作用域的属性。也可用 of 替代 in 作为分隔符。还支持一个可选的第二个参数，即当前项的索引。</p>
    <div style="border:1px solid red">
    <ul>
      <li v-for="(item , index)  in items2" :key="item.msgid">
      <!-- <li v-for="item of items2" :key="item.msgid">  -->
        父作用域的属性type=={{ type }}|||循环下标index=={{ index }}|||数据==（msgid:{{ item.msgid }}，message：{{ item.message}}）
      </li>
    </ul>
    </div>

    <p>用v-for来遍历一个对象的属性</p>
    <button @click="obj_add">添加字段</button>
    <button @click="obj_upd">修改字段</button>
    <button @click="obj_del">删除字段</button>
    <div style="border:1px solid red">
    <ul>
      <!-- <li v-for="value in object"> -->
      <!-- <li v-for="(value, name) in object"> -->
      <li v-for="(value, name, index) in object">
        [{{ index }}] {{ name }}: {{ value }}
      </li>
    </ul>
    </div>

    <p>//在v-for里使用‘值范围’</p>
    <div style="border:1px solid red">
      <span v-for="n in 10">{{ n }} </span>
    </div>



    <p>v-for与v-if一同使用,当它们处于同一节点，v-for的优先级比v-if更高，因此v-if将分别重复运行于每个v-fo循环中。</p>
    <p>想为部分项渲染节点时，这种优先级的机制会十分有用</p>
    <div style="border:1px solid red">
      <ul>
        <li v-for="(item , index)  in items" v-if="item.isShow"> 
          编号:{{ item.id }}，姓名：{{ item.name }}，性别：{{ item.sex }}，年龄：{{ item.age }}
        </li>
      </ul>
    </div>
    <p>如果你的目的是有条件地跳过循环的执行，那么可以将 v-if 置于外层元素 (或 template) 上 </p>
    <div style="border:1px solid red">
      <ul v-if="isOk">
        <li v-for="(item , index)  in items" > 
          编号:{{ item.id }}，姓名：{{ item.name }}，性别：{{ item.sex }}，年龄：{{ item.age }}
        </li>
      </ul>
    </div>

    <br> <br> <br>
    
  </div>
</template>

<script>
export default ({
  name:'demo5',
  data() {
    return {
      newId: 4,
      type: "JSON",
      isOk: true,
      items: [
        { id: 1, name: '小明', age: 18, sex: '男', isShow:true },
        { id: 2, name: '小红', isShow:false },
        { id: 3, name: '小刚', isShow:true }
      ],
      items2: [
        { msgid: "1", message: '你好' },
        { msgid: "2", message: 'helloWorld' },
        { msgid: "3", message: 'hi' }
      ],
      object: {
        username: 'bulu',
        password: 'cheng.1314',
        name: 'zhoubincheng',
        phone: '18888888888',
        address: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      }

    }
    
  },
  methods: {
    //添加最后项
    test_push: function() {
      this.items.push ({ id: this.newId++, name: '小X' })
    },
    //添加第一项
    test_unshift: function() {
      this.items.unshift ({ id: this.newId++, name: '小X' })
    },
    //删除最后项
    test_pop: function() {
      this.items.pop ()
    },
    //删除第一项
    test_shift: function() {
      this.items.shift ()
    },
    //删除所有项
    test_alldel: function(){
      this.items=[]
    },
    //点击删除项
    remove(k){
      this.items.splice(k,1);
    },
    //排序
    test_sort: function() {
      this.items.sort((a,b)=>{
        return a.id<b.id;
      });
    },
    //反转排序
    test_reverse: function() {
      this.items.reverse ()
    },
    //vue.set = $set    vue实例调用set()方法，专门用来修改数组的
    test_update: function(index,name){
      //第一个参数：修改的数组，第二个参数：数组下标，第三个参数：对应下标的值
      this.$set(this.items,index,{ id: 1, name: name, age: 18, sex: '男' })
    },
    //splice(index,len,[item])用来替换/删除/添加数组内某一个或者几个值（该方法会改变原始数组）
    test_splice: function(){
      var i = this.items.length+1;

      //添加，在下标为3的地方添加1项, 属于插入数据, 可无限添加
      this.items.splice(3,0,{ id: i, name: '???', age: '', sex: '' }) 
      //添加，在截止下标为4的地方最多添加2项, 点击两次后第三次为修改 
      //this.items.splice(4,2,{ id: i, name: '???', age: '', sex: '' }) 

      //修改，在下标为1的地方修改数据
      //this.items.splice(1,1,{ id: i, name: '???', age: '', sex: '' }) 
      //修改，在下标为1的地方,取长度2,替换掉,相当于2项数据合并成1项
      //this.items.splice(1,2,{ id: i, name: '???', age: '', sex: '' }) 

      //删除，删除起始下标为2长度为1
      //this.items.splice(2,1)
      //删除，删除起始下标为1长度为2
      //this.items.splice(1,2)

    },

    //对以上方法相比，也有非变更方法，例如 filter()、concat() 和 slice()。它们不会变更原始数组，而总是返回一个新数组。
    //当使用非变更方法时，可以用新数组替换旧数组
    //过滤数组,    可定义一个全局过滤器
    test_filter: function(){
      var newitems = this.items.filter(function(data){
        return data.id==1
      })
      this.items = newitems;
    },
    test_concat: function(){
      var tmp = [
        { id: 99, name: 'concat1', age: '', sex: '' },
        { id: 99, name: 'concat2', age: '', sex: '' }
      ]
      var newitems = this.items.concat(tmp)
       //var newitems = this.items.concat({ id: 99, name: 'concat1', age: '', sex: '' },{ id: 99, name: 'concat2', age: '', sex: '' })
      this.items = newitems;
      //concat()还可以传递空值，此时它只是复制当前数组。
      //this.items = this.items.concat();
    },
    //截取数组
    test_slice: function(){
      //截取下标为1到末尾，返回新数组
      //var newitems = this.items.slice(1)
      //截取下标为0到2，但不包括结束位置的项，返回新数组
      var newitems = this.items.slice(0,2)
      this.items = newitems;
    },


    //新增对象字段
    obj_add: function(){
      //this.object.remark='备注'   //不会实时显示在页面
      this.$set(this.object,'remark','备注')
    },
    //修改对象字段
    obj_upd: function(){
      //第一种方法
      //this.object.username='SHABI'
      //第二种方法
      this.$set(this.object,'username','SHABI')
    },
    //删除对象字段
    obj_del: function(){
      this.$delete(this.object,'username')
    },


    
  }
}) 


</script>

