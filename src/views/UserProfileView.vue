<template>
  <!-- 将“用户动态”渲染到ContentBase里面 -->
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <!-- 绑定父组件的user属性 -->
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrite />
      </div>
      <div class="col-9">                                                                   
        <UserProfilePosts :posts="posts" />
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'; 
import UserProfileInfo from '../components/UserProfileInfo';
import UserProfilePosts from '../components/UserProfilePosts';
import UserProfileWrite from '../components/UserProfileWrite';
import { reactive } from 'vue';

export default {
  name: 'UserProfile', 
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase,
    UserProfileInfo, 
    UserProfilePosts, 
    UserProfileWrite, 
  }, 
  // 存储数据
  setup() {
    // 用户信息
    const user = reactive({
      id: 1, 
      userName: "Aubrey Chen", 
      lastName: "Chen", 
      firstName: "Aubrey", 
      followerCount: 0, 
      is_followed: false, 
    });

    // 帖子列表
    const posts = reactive({
      count: 3, 
      posts: [
        {
          id: 1, 
          userId: 1, 
          content: "《Hello World》真心好看！", 
        }, 
        {
          id: 2, 
          userId: 1, 
          content: "四月是你的谎言···", 
        }, 
        {
          id: 3, 
          userId: 1, 
          content: "决定我们的不是过去的经历，而是赋予经历的意义。"
        }
      ], 
    });

    // 发帖功能 
    

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
      posts, 
    };
  }, 
};
</script>

<style scoped>
</style>