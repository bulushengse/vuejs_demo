/* 表单输入绑定 */
<template>
  <div>
    <h1>v-model 双向数据绑定</h1>
    <p>用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定，监听用户的输入事件以更新数据</p>
    <p>v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源</p>
   
    <div style="border:1px solid red">
      <ul>v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
        <li>text 和 textarea 元素使用 value property 和 input 事件；</li>
        <li>checkbox 和 radio 使用 checked property 和 change 事件；</li>
        <li>select 字段将 value 作为 prop 并将 change 作为事件。</li>
      </ul>

      “input”时更新 :<input v-model="message" placeholder="edit me"><br>
      v-model.lazy  修饰符.lazy在“change”时而非“input”时更新 :<input v-model.lazy="message" placeholder="edit me"><br>
      v-model.number 修饰符.number输入值转为数值类型 :<input v-model.number="message" placeholder="edit me"><br>
      v-model.trim  修饰符.trim过滤输入的首尾空白字符 :<input v-model.trim="message" placeholder="edit me"><br>
      <span>Message is: {{ message }}</span>
      <br><br>

      <textarea v-model="message2" placeholder="add multiple lines"></textarea>
      <span>Multiline  Message is: {{ message2 }}</span>
      <br><br>

      <!-- <input type="radio" id="one" v-model="picked"  value="One"> -->
      <input type="radio" id="one" v-model="picked" v-bind:value="name"><!-- 值绑定到Vue实例的一个动态property上，这时可以用v-bind实现 -->
      <label for="one">One(用v-bind绑定了vue实例动态property上)</label>
      <input type="radio" id="two" v-model="picked" value="Two" >
      <label for="two">Two</label>
      <input type="radio" id="three" v-model="picked" value="three" >
      <label for="three">three</label>
      &emsp;<span>Picked: {{ picked }}</span>
      <br><br>

      <!-- <input type="checkbox" id="checkbox" v-model="checked"> --><!-- 显示 true or false -->
      <input type="checkbox" id="checkbox" v-model="checked" true-value="是" false-value="否"><!-- 单个复选框值绑定,显示 是 or 否 -->
      <!-- <input type="checkbox" id="checkbox" v-model="checked" v-bind:true-value="t" v-bind:false-value="f"> -->
      <label for="checkbox">{{ checked }}</label>（单个复选框值绑定true-value="是" false-value="否"）
      <br><br>

      多个复选框，绑定到同一个数组:
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      &emsp;<span>Checked names: {{ checkedNames }}</span>
      <br><br>

      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option value='1'>option1(value='1')</option>
        <option v-bind:value='name'>option2(v-bind:value='name')</option>
        <option>option3</option>
      </select>
      &emsp;<span>selected: {{ selected }}</span>
      <br><br>

      多选时 (绑定到一个数组)：
      <select v-model="selectedOptions" multiple style="width: 100px;">
        <option disabled value="">请选择</option>
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
        <option>option4</option>
        <option>option5</option>
      </select>
      &emsp;<span>selected option: {{ selectedOptions }}</span>

      <!-- 
        用 v-for 渲染的动态选项：
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select> 
    -->
    </div>

    <br><br><br>

  </div>
</template>

<script>
export default ({
  name:'demo7',
  data () {
    return {
      name: "zhoubc",
      t: "是",
      f: "否",
      message: "我是初始值",
      message2: "我是初始值",
      checked: "我是初始值",
      checkedNames: [],
      picked: "我是初始值",
      selected: "", //推荐初始值为select禁用的选项
      selectedOptions: []
    }
  },
  methods: {
    showDetails: function() {
      alert("111");
        
    }
  }
}) 

</script>

