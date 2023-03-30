<template>
  <!-- “首页”这个组件里面，公共区域导航栏框框，是用一个单独的组件把它给标记出来了 -->
  <ContentBase>
    首页
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'

export default {
  name: 'HomeView',
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase, 
  } 
}
</script>

<!-- <style>加上"scoped"之后，不同组件之间的CSS选择器就不会相互影响到了。
     让每一个选择器最后再去返回到前端时，它会给其加上一个随机值。 -->
<style scoped>
</style>
