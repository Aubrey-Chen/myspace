<template>
  <!-- 将“好友列表”渲染到ContentBase里面 -->
  <ContentBase>
    <div class="card" v-for="user in users" :key="user.id">
      <div class="card-body">
        <div class="row">
          <div class="col-1">
            <!-- 前面加上':'，后面的值就不是一个普通的字符串了，而是会把字符串里的内容取值；自适应的样式：img-fluid -->
            <img class="img-fluid" :src="user.photo" alt="">
          </div>
          <div class="col-11">
            <div class="username">{{ user.username }}</div>
            <div class="follower-count">{{ user.followerCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </ContentBase>
</template>
  
<script>
import ContentBase from '../components/ContentBase'; 
import $ from 'jquery';
import { ref } from 'vue';

export default {
  name: 'UserList',
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase, 
  }, 
  setup() {
    let users = ref([]);

    // 从云端动态获取用户
    $.ajax({
      url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/', 
      type: 'GET', 
      success(resp) {
        // 修改ref类型变量的值，需要对它的.value来赋值
        users.value = resp;
      }, 
    });

    return {
      users, 
    };
  }, 
}; 
</script>
  
<style scoped>
.card {
  margin-bottom: 20px;
  /* 点击小手效果 */
  cursor: pointer;
}

/* 鼠标悬浮阴影效果 */
.card:hover {
  /* 朝右、朝下2像素，扩散10像素，颜色浅灰色 */
  box-shadow: 2px 2px 10px lightgray;
  /* 阴影动画反应周期持续半秒钟 */
  transition: 500ms;
}

img {
  border-radius: 50%;
}

.username {
  font-weight: bold;
  height: 50%;
}

.follower-count {
  font-size: 12px;
  color: gray;
  height: 50%;
}
</style>
  