// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//通常在main.js里，import的Vue对象是根组件，其他的子组件都是通过配置文件的方式一层一层的叠加上的。
//例如main.js里import路由router组件的index.js, 而index.js中配置多个子组件component，子组件下还可以配置多个子组件children，详见router/index.js配置
import Vue from 'vue'
import App from './App'
import router from './router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false //false阻止显示生产模式的消息，为生产部署时，请确保启用生产模式。
//全局设置自定义按键修饰符别名
//Vue.config.keyCodes.f1 = 112
Vue.config.keyCodes = {//定义别名不能是stop,prevent,self,ctrl,shift,alt,meta,exact几个
    qry:86,  //v
    f1:112 //f1
}


//require.context是webpack中，用来创建自己（的模块）上下文，webpack会在构建的时候解析代码中的require.context()
const requireComponent = require.context(
    // 其组件目录的相对路径
    './components/test',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /\.(vue|js)$/
  )

//全局导入基础组件，全局注册的行为必须在根Vue实例(通过new Vue)创建之前发生。
requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
        camelCase(
            // 获取和目录深度无关的文件名
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    )
   
    // 全局注册组件
    Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
    )

})



new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    data () {
        return {
            system: "XXX后台管理系统"
        }
    },
    methods: {
        reminder: function () {
          alert("好好工作~~~")
        }
    }
  })
/*
  
  new Vue({
  el: "#app" //为实例提供挂载元素，该元素下被vue控制
  data: {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar' //初始化实例属性
  },
  props: ["content"], //父组件向子组件传值，可以直接定义成一个数组。也可以是一个对象用传过来的值做校验等。
  methods: {
      getHandle(){
          //该属性中申明方法
      }
  },
  mounted: function(){
      // 钩子函数
  },
  computed: {//需要一个返回值，而且代码是同步执行
      //计算属性，当数据发生变化时才调用，否则直接调用缓存。提升性能
      fullName: function () {
          return this.firstName + ' ' + this.lastName
      }
  },
  watch: {//不需要返回值，代码也可以是异步的。
      //监测变化。
      firstName: function (val) {
          this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
          this.fullName = this.firstName + ' ' + val
      }
  }
}); */




