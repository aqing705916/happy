import Vue from 'vue'
import Router from 'vue-router'
// import App from "../App.vue";
// import CodePage from "../components/CodePage";
import HelloWorld from '../components/HelloWorld.vue'
import home from "../components/home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/code',
    //   name: 'CodePage',
    //   component: CodePage
    // },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
