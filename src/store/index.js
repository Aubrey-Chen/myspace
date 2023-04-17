import { createStore } from 'vuex';
import userModule from './user';

export default createStore({
  // 存储数据
  state: {
  },
  // 需要计算获取state里的内容，不能直接获取时，一般放在getters里面。(只能读取state里面的信息，不能修改)
  getters: {
  },
  // 存放所有对state进行直接修改的操作，但mutations不能执行异步操作（对于每一个state直接进行修改）
  mutations: {
  },
  // 定义对state的所有更新方式，在actions里面不能直接对state进行修改的（完整复杂的修改）
  actions: { 
  },
  // 将state进行分割，避免state冗长可读性低
  modules: {
    user: userModule, 
  }
});
