<template>
  <!-- 将“登录”渲染到ContentBase里面 -->
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <!-- 用v-model属性将username与<input>双向绑定起来 -->
            <input v-model="username" type="text" class="form-control" id="username">
          </div>
          <div class="mb-3">
            <!-- 用v-model属性将password与<input>双向绑定起来 -->
            <label for="password" class="form-label">密码</label>
            <input v-model="password" type="password" class="form-control" id="password">
          </div>
          <div class="error-message">{{ error_message }}</div>
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
      </div>
    </div>
    
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';
import { ref } from 'vue';  // 响应式变量需要用到ref或reactive


export default {
  name: 'LoginView', 
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase, 
  }, 
  setup() {
    let username = ref('');
    let password = ref('');
    let error_message = ref('');

    return {
      username, 
      password, 
      error_message, 
    };
  }, 
};
</script>

<style scoped>
button {
  width: 100%;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}
</style>