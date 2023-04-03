<template>
  <!-- 将“用户动态”渲染到ContentBase里面 -->
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo/>
      </div>
      <div class="col-9">帖子列表</div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'; 
import UserProfileInfo from '../components/UserProfileInfo.vue';

export default {
  name: 'UserProfile', 
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase,
    UserProfileInfo
  }
}
</script>

<style scoped>
</style>