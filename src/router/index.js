import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import demo1 from '@/views/Demo1'
import demo2 from '@/views/Demo2'
import demo3 from '@/views/Demo3'
import demo4 from '@/views/Demo4'
import demo5 from '@/views/Demo5'
import demo6 from '@/views/Demo6'
import demo7 from '@/views/Demo7'
import demo8 from '@/views/Demo8'
import demo9 from '@/views/Demo9'
import demo10 from '@/views/Demo10'
import demo11 from '@/views/Demo11'
import demo12 from '@/views/Demo12'
import demo13 from '@/views/Demo13'
import demo14 from '@/views/Demo14'
import demo15 from '@/views/Demo15'
import demo16 from '@/views/Demo16'


Vue.use(Router)//表示要使用插件vue-router，全局方法。如组件有install方法，那么就要用Vue.use去初始化这个插件;反之不用。
//Vue.use 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。

//export/export default，提供一个接口给外界，让其他文件通过import来引入使用。
//vue组件要被import，必须至少要有export default 1个或export多个！！！
//可用于导出常量、函数、文件、模块等。

//const声明一个只读的常量，且声明后，常量的值是不能改变的。
//var声明一个可以修改的变量，

//export const constantRoutes = [
const constantRoutes = [
  {
    path: '/', 
    name: 'HelloWorld',
    component: HelloWorld,
/*     children: [
      {
        path: 'index',
        component: () => import('@/views/index'),
        name: 'xxx',
        meta: { title: 'xxx', icon: 'dashboard', noCache: true, affix: true }
      }
    ] */
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: demo1
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: demo2
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: demo3
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: demo4
  },
  {
    path: '/demo5',
    name: 'demo5',
    component: demo5
  },
  {
    path: '/demo6',
    name: 'demo6',
    component: demo6
  },
  {
    path: '/demo7',
    name: 'demo7',
    component: demo7
  },
  {
    path: '/demo8',
    name: 'demo8',
    component: demo8
  },
  {
    path: '/demo9',
    name: 'demo9',
    component: demo9
  },
  {
    path: '/demo10',
    name: 'demo10',
    component: demo10
  },
  {
    path: '/demo11',
    name: 'demo11',
    component: demo11
  },
  {
    path: '/demo12',
    name: 'demo12',
    component: demo12
  },
  {
    path: '/demo13',
    name: 'demo13',
    component: demo13
  },
  {
    path: '/demo14',
    name: 'demo14',
    component: demo14
  },
  {
    path: '/demo15',
    name: 'demo15',
    component: demo15
  },
  {
    path: '/demo16',
    name: 'demo16',
    component: demo16
  }

]

export default new Router({
  mode: 'history', // 去掉url中的#，默认值hash
  //scrollBehavior: () => ({ y: 0 }),//页面滚动行为
  routes: constantRoutes
})


/* export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),//页面滚动行为
  routes: [
    {
      path: '/', 
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shiLi',
      name: 'shiLi',
      component: shiLi
    },
    {
      path: '/zhiLing',
      name: 'zhiLing',
      component: zhiLing
    }
  ]
}) */


//开发插件
//Vue.use(MyPlugin, { someOption: true })

/* MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
} */
