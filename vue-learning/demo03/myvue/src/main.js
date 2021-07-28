// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import content from './components/my.vue'
Vue.config.productionTip = false

// 安装路由
Vue.use(VueRouter);
/* eslint-disable no-new */
export default new VueRouter({
  routes:[
{
  //路由路径
  path:'/src/components/my.vue',
  //跳转的组件
  component:'content',
  name:'content'
}
  ]
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
