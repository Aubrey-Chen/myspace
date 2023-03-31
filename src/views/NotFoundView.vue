<template>
  <!-- 将“404”渲染到ContentBase里面 -->
  <ContentBase>
    404
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'

export default {
  name: 'NotFound', 
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase
  }
}
</script>

<style scoped>
</style>