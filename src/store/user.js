import $ from 'jquery';

const userModule = {
    state: {
      id: "", 
      username: "", 
      photo: "", 
      folllowerCount: 0, 
    }, 
     getters: {

    },
    mutations: {
 
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
          success: function(response) {
            console.log(response);
          }, 
        });
      }, 
    },
    modules: {
    }
}; 

export default userModule;