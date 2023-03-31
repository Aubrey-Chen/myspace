<template>
  <!-- 将“用户动态”渲染到ContentBase里面 -->
  <ContentBase>
    用户动态
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'

export default {
  name: 'UserProfile', 
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase
  }
}
</script>

<style scoped>
</style>