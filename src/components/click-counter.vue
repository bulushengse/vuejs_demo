
/* 组件 */
<template>
  <div>
    <button v-on:click="count++">You clicked me {{ count }} times.</button><br>
    <button v-on:click="count=0">I want to clear</button>
  </div>
</template>

<script>
export default ({
  name:'click-counter',
  data () {
    return {
      count: "0"
    }
  }
}) 

</script>

