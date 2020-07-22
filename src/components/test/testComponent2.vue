/* 组件 */
<template>
  <p>{{msg}}</p>
</template>

<script>
export default ({
  name:'click-counter',
  data() {
      return {
        msg: "这是一个组件，调用components/test/test2.vue"
      }
  }
}) 

</script>

