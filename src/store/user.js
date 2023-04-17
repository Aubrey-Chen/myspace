const userModule = {
    state: {
      id: "", 
      username: "", 
      photo: "", 
      folllowerCount: 0, 
    }, 
    getters: {
      fullName(state) { 
        return state.user.firstName + state.user.lastName;
      }, 
    },
    mutations: {
      updateUser(state, user) {
        state.user.userName = user.userName;
      }, 
    },
    actions: {
      updateUser(context) {
        let resp;
      },
    },
    modules: {
    }
}; 

export default userModule;