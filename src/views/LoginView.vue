<template>
  <!-- 将“登录”渲染到ContentBase里面 -->
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <!-- .prevent表示阻止默认的提交事件行为 -->
        <form @submit.prevent="login">
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
import { useStore } from 'vuex';  // 在LoginView中调用store里的API
import router from '@/router/index';

export default {
  name: 'LoginView', 
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase, 
  }, 
  setup() {
    const store = useStore();

    let username = ref('');
    let password = ref('');
    let error_message = ref('');

    const login = () => {
      // 每次登录时先清空一下error_message
      error_message.value = "";
      store.dispatch("login", {
        username: username.value, 
        password: password.value, 
        success() {
          // 用户登录成功跳转到好友列表页面
          router.push({name: 'userlist'});
        }, 
        error() {
          error_message.value = "用户名或密码错误";
        }, 
      });
    };

    return {
      username, 
      password, 
      error_message, 
      login, 
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