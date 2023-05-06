<template>
  <!-- 用一个卡片将“用户信息”括起来 -->
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-3 img-field">
          <img  class="img-fluid" :src="user.photo" alt="">
        </div>
        <div class="col-9">
          <div class="username">{{ user.username   }}</div>
          <div class="fans">粉丝：{{ user.followerCount }}</div>
          <div class="followButton" v-if="!is_me">
            <!-- 控制图标大小的属性：btn-sm（小图标），btn-lg（大图标） -->
            <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">🔔 关注</button>
            <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'UserProfileInfo', 
  // 在子组件里接收父组件传递的参数
  props: {
    user: {
      type: Object, 
      required: true, 
    }, 
  }, 
  // 动态的去计算某个属性：setup()函数需要传入参数props，因为setup()里面是没有this这个属性的。
  setup(props, context) {
    const store = useStore();
    let is_me = computed(() => store.state.user.id === props.user.id);

    // “关注”事件的函数
    const follow = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/", 
        type: "POST", 
        data: {
          target_id: props.user.id, 
        }, 
        headers: {
          'Authorization': "Bearer " + store.state.user.access, 
        }, 
        success(resp) {
          if (resp.result === "success") {
            context.emit("follow");
          }
        }, 
      });
    };
    // “取消关注”事件的函数
    const unfollow = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/", 
        type: "POST", 
        data: {
          target_id: props.user.id, 
        }, 
        headers: {
          'Authorization': "Bearer " + store.state.user.access, 
        }, 
        success(resp) {
          if (resp.result === "success") {
            context.emit("unfollow");
          }
        }, 
      });
    };

    return {
      follow, 
      unfollow, 
      is_me, 
    }; 
  }, 
}; 
</script>

<style scoped>
/* 将图片样式设置为圆形 */
img{
  border-radius: 50%;
}

.username {
  font-weight: bold;
}

.fans {
  font-size: 12px;    
  color: gra;
}

button {
  padding: 2px 4px;
  font-size: 12px;
}

/* “用户动态”页面中的头像居中效果 */
.img-field {
  /* 用flex来设置居中效果 */
  display: flex;
  /* 竖直方向居中，把主轴变成垂直方向 */
  flex-direction: column;
  /* 居中 */
  justify-content: center;
  /* 设置左侧图片的宽度为30% */
  width: 30%;
}

.col-9 {
  /* 用flex来设置居中效果 */
  display: flex;
  /* 竖直方向居中，把主轴变成垂直方向 */
  flex-direction: column;
  /* 居中 */
  justify-content: center;
  /* 设置右侧信息的宽度为70% */
  width: 70%;
}

.card-body {
  min-width: 200px;
  max-width: 400px;
  margin: 0 auto;
  max-width: 100%; /*添加max-width: 100%以保证不会溢出*/
}

/* 针对窗口宽度小于最小宽度的情况，在 .card-body 中添加一个媒体查询，并设置一个固定的宽度 */
@media screen and (max-width: 768px) {
  .card-body {
    width: 200px;
  }
}

/* 针对窗口宽度大于最大宽度的情况，在 .card-body 中添加一个媒体查询，并设置一个最大宽度 */
@media screen and (min-width: 1200px) {
  .card-body {
    max-width: 400px;
  }
}
</style>
