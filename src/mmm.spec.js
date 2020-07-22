import { shallowMount } from '@vue/test-utils'
import raffleMachine from '@/components/raffle-machine' 

//测试文件js后缀必须是 *.spec.js  

// 挂载这个组件
 //const wrapper = shallowMount(raffleMachine)
 const wrapper = shallowMount(raffleMachine,{
  propsData: {
    nameArray: ['小明111','周杰伦11','小刚','刘德华','林俊杰','小红','李林','筷子兄弟','蔡徐坤','李荣浩','周深','薛之谦','张艺兴','双笙','胡夏','王贰浪']
  }
 })

// 这里是一些 Jest 的测试，你也可以使用你喜欢的任何断言库或测试
describe('raffleMachine', () => {
 
  it('测试转盘显示的初始值', () => {
    expect(wrapper.find('#winner').text()).toEqual('小明111');
  })
  
  it('测试转动转盘后的返回值', () => {
    wrapper.find('#start').trigger('click');

    //wrapper.find('#end').trigger('click');
    //expect(wrapper.vm.currentIdx).toBe(1);
    //setInterval() 这方法测试不了。。。。

    expect(wrapper.find('#winner').text()).toEqual('小明111');
  })

  //wrapper api  https://vue-test-utils.vuejs.org/api/wrapper
  //expect api  https://jestjs.io/docs/zh-Hans/expect

  //执行cnpm run test 测试


  //更多expect断言语句自行探索...

})