//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
//导入子模块
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
    routes: [
        {
            //登录页
            path: '/main',
            component: Main,
            children: [
                {
                  path: '/user/profile:id',
                  name:'UserProfile', 
                  component: UserProfile,
                }, {
                  path: '/user/list',
                  component: UserList,
                },
              ]
        },
        //首页
        {
            path: '/login',
            component: Login
        },
    ]

})

