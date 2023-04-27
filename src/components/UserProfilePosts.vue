<template>
  <div class="card">
    <div class="card-body">
      <!-- 所有循环的对象都需要绑定一个唯一的key属性 -->
      <div v-for="post in posts.posts" :key="post.id">
        <div class="card single-post">
          <div class="card-body">
            {{ post.content }}
            <button v-if="is_me" type="button" class="btn btn-danger btn-sm">删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: "UserProfilePosts", 
  props: {
    posts: {
      type: Object, 
      required: true, 
    }, 
    user: {
      type: Object, 
      required: true, 
    }, 
  }, 
  setup(props) {
    const store = useStore();
    let is_me = computed(() => store.state.user.id === props.user.id);

    return {
      is_me, 
    }
  }, 
}; 
</script>

<style scoped>
.single-post {
    margin-bottom: 10px;
}

button {
    float: right;
}
</style>