<template>
  <!-- 将“用户动态”渲染到ContentBase里面 -->
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <!-- 绑定父组件的user属性 -->
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
      </div>
      <div class="col-9">                                                                   
        <UserProfilePosts />
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'; 
import UserProfileInfo from '../components/UserProfileInfo';
import UserProfilePosts from '../components/UserProfilePosts';
import { reactive } from 'vue';

export default {
  name: 'UserProfile', 
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase,
    UserProfileInfo, 
    UserProfilePosts
  }, 
  // 存储数据
  setup() {
    const user = reactive({
      id: 1, 
      userName: "Aubrey Chen", 
      lastName: "Chen", 
      firstName: "Aubrey", 
      followerCount: 0, 
      is_followed: false, 
    });

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount ++ ;
    };

    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount -- ;
    };

    return {
      user, 
      follow, 
      unfollow, 
    };
  }, 
};
</script>

<style scoped>
</style>