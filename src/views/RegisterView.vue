<template>
  <!-- 将“注册”渲染到ContentBase里面 -->
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <!-- .prevent表示阻止默认的提交事件行为 -->
        <form @submit.prevent="register">
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
          <div class="mb-3">
            <!-- 用v-model属性将password_confirm与<input>双向绑定起来 -->
            <label for="password_confirm" class="form-label">确认密码</label>
            <input v-model="password_confirm" type="password" class="form-control" id="password">
          </div>
          <div class="error-message">{{ error_message }}</div>
          <button type="submit" class="btn btn-primary">注册</button>
        </form>
      </div>
    </div>
    
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';
import { ref } from 'vue';  // 响应式变量需要用到ref或reactive
import { useStore } from 'vuex';  // 在RegisterView中调用store里的API
import router from '@/router/index';
import $ from 'jquery';

export default {
  name: 'RegisterView', 
  // component表示在template区域会用到哪些其他的组件，把所有用到的组件全部放到component里面。
  components: {
    ContentBase, 
  }, 
  setup() {
    const store = useStore();

    let username = ref('');
    let password = ref('');
    let password_confirm = ref('');
    let error_message = ref('');

    console.log(store, router);

    const register = () => {
      // 每次登录时先清空一下error_message
      error_message.value = "";
      
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/user/", 
        type: "POST", 
        data: {
          username: username.value, 
          password: password.value, 
          password_confirm: password_confirm.value, 
        }, 
        success(resp) {
          if (resp.result === "success") {
            // 优化：实现用户注册成功后直接登录
            store.dispatch("login", {
              username: username.value, 
              password: password.value, 
              success() {
                // 用户登录成功跳转到好友列表页面
                router.push({name: 'userlist'});
              }, 
              error() {
                error_message.value = "系统异常，请稍后重试";
              }, 
            });
          } else {
            error_message.value = resp.result;
          }
        }, 
      });
    };

    return {
      username, 
      password, 
      password_confirm, 
      error_message, 
      register, 
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