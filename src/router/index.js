import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

  const routes = [
    
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
    },
    {
      path: '/integral',
      name: 'integral',
      component: () => import(/* webpackChunkName: "about" */ '../views/integral/integral.vue')
    },

 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})




// 添加路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.eleToken ? true : false;
//   if (to.path == "/login" || to.path == "/register") {
//     next();
//   } else {
//     isLogin ? next() : next("/login");
//   }
// })

export default router;
