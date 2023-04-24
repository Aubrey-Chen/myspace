<template>
  <!-- 将“用户动态”渲染到ContentBase里面 -->
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <!-- 绑定父组件的user属性 -->
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <!-- 父组件的post_a_post事件触发之后，会调用父组件的post_a_post函数 -->
        <UserProfileWrite @post_a_post="post_a_post" />  
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
import { useRoute } from 'vue-router';
import $ from 'jquery';
import { useStore } from 'vuex';

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
    const store = useStore();
    // 获取页面链接里的参数userId
    const route = useRoute();
    const userId = route.params.userId;

    // 用户信息
    // const user = reactive({
    //   id: 1, 
    //   userName: "Aubrey Chen", 
    //   lastName: "Chen", 
    //   firstName: "Aubrey", 
    //   followerCount: 0, 
    //   is_followed: false, 
    // });
    const user = reactive({});
    // 帖子列表
    // const posts = reactive({
    //   count: 3, 
    //   posts: [
    //     {
    //       id: 1, 
    //       userId: 1, 
    //       content: "《Hello World》真心好看！", 
    //     }, 
    //     {
    //       id: 2, 
    //       userId: 1, 
    //       content: "四月是你的谎言···", 
    //     }, 
    //     {
    //       id: 3, 
    //       userId: 1, 
    //       content: "决定我们的不是过去的经历，而是赋予经历的意义。"
    //     }
    //   ], 
    // });
    const posts = reactive({});
    
    // 获取某个用户信息的API
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/", 
      type: "GET", 
      data: {
        user_id: userId, 
      }, 
      // 获取JWT验证
      headers: {
        'Authorization': "Bearer " + store.state.user.access, 
      }, 
      // 获取成功更新用户信息
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followed = resp.is_followed;
      }, 
    });

    // 获取某个用户发表的所有帖子API
    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/post/", 
      type: "GET", 
      data: {
        user_id: userId, 
      }, 
      // 获取JWT验证
      headers: {
        'Authorization': "Bearer " + store.state.user.access, 
      }, 
      // 获取成功更新用户信息
      success(resp) {
        console.log(resp);
        posts.posts = resp;
      }, 
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

    const post_a_post = (content) => {
      posts.count ++ ;
      posts.posts.unshift({
        id: posts.count, 
        userId: 1, 
        content: content, 
      });       
    };

    return {
      user, 
      follow, 
      unfollow, 
      posts, 
      post_a_post, 
    };
  }, 
};
</script>

<style scoped>
</style>