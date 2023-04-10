import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView';
import UserListView from '../views/UserListView';
import UserProfileView from '../views/UserProfileView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import NotFoundView from '../views/NotFoundView';

// 给views里的6个组件分别设置6个路由
const routes = [
  // home是根目录
  {
    path: '/',
    name: 'home',
    component: HomeView, 
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserListView, 
  },
  {
    path: '/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfileView, 
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView, 
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView, 
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView, 
  }, 
  {
    // 正则表达式表示：可以匹配任意字符串
    path: '/:catchAll(.*)', 
    // 重定向到404页面
    redirect: '/404/', 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router
