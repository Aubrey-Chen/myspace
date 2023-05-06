<template>
<div class="card edit-field">
  <div class="card-body">
    <label for="edit-post" class="form-label">编辑帖子</label>
    <!-- v-model属性将textarea里的内容与content里的内容进行绑定 -->
    <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
    <!-- 点击“发帖”按钮，会触发post_a_post函数 -->
    <button @click="post_a_post" type="button" class="btn btn-primary btn-sm">发帖</button>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
  name: "UserProfileWrite", 
  setup(props, context) {
    const store = useStore();
    let content = ref('');  //ref值的修改和读写都需要content.value来做

    // 定义button需绑定的click函数
    const post_a_post = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/", 
        type: "POST", 
        data: {
          content: content.value, 
        }, 
        headers: {
          'Authorization': "Bearer " + store.state.user.access, 
        }, 
        success(resp) {
          if (resp.result === "success") {
            // post_a_post函数会触发父组件的post_a_post事件，参数是content.value
            context.emit('post_a_post', content.value);  
            content.value = "";  // 清空content的值
          }
        }
      });
    };

    return {
      content, 
      post_a_post, 
    };
  }, 
};
</script>

<style scoped>
.edit-field {
  margin-top: 20px;
}

button {
  margin-top: 10px;
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
