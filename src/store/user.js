import $ from 'jquery';
import jwt_decode from 'jwt-decode';

const userModule = {
  state: {
    id: "", 
    username: "", 
    photo: "", 
    folllowerCount: 0, 
    // 访问令牌
    access: "", 
    // 刷新令牌
    refresh: "", 
    is_login: false, 
  }, 
    getters: {

  },
  mutations: {
    updateUser(state, user) {
      state.id = user.id;
      state.username = user.username;
      state.photo = user.photo;
      state.folllowerCount = user.folllowerCount;
      state.access = user.access;
      state.refresh = user.refresh;
      state.is_login = user.is_login;
    }, 
    updateAccess(state, access) {
      state.access = access; 
    }, 
  },
  actions: {
    login(context, data) {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/api/token/", 
        type: "POST", 
        data: {
          username: data.username, 
          password: data.password, 
        }, 
        success(resp) {
          const {access, refresh} = resp;
          // jwt解码
          const access_obj = jwt_decode(access);
          // 每隔五分钟刷新获取一次access访问令牌（不能写在mutations里面，因为mutations不能支持异步）
          setInterval(() => {
            $.ajax({
              url: "https://app165.acapp.acwing.com.cn/api/token/refresh/", 
              type: "POST", 
              data: {
                refresh, 
              }, 
              success(resp) {
                context.commit("updateAccess", resp.access);
              }, 
            }); 
          }, 4.5 * 60 * 1000);
          // 根据user_id获取用户信息
          $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/", 
            type: "GET", 
            data: {
              // data里面是需要传入的参数
              user_id: access_obj.user_id, 
            }, 
            // jwt验证
            headers: {
              // 注意：Bearer后有一个空格符！
              'Authorization': "Bearer " + access, 
            }, 
            success(resp) {
              // 调用已定义的mutations里的API
              context.commit("updateUser", {
                // ...作用是把数组或类数组对象展开成一系列用逗号隔开的值
                ...resp, // 将resp解构
                access: access, 
                refresh: refresh, 
                is_login: true, 
              });
              // 调用回调函数
              data.success();
            }, 
          }); 
        }, 
        error() {
          data.error();
        }
      });
    }, 
  },
  modules: {
  }
}; 

export default userModule;