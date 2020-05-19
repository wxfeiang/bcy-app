import Vue from 'vue'
import VueRouter from 'vue-router'
import enshrine from '@/views/enshrine/enshrine'



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
      path: '/invite',
      name: 'invite',
      component: () => import(/* webpackChunkName: "about" */ '../views/invite/invite.vue')
    },
   
    {
      path: '/enshrine',
      component: enshrine,
      redirect: '/book',
    
      children: [
        {
          path: '/book',
          component: () => import('@/views/enshrine/book'),
         
        },
        {
          path: '/move',
          component: () => import('@/views/enshrine/move'),
         
        },
        {
          path: '/shop',
          component: () => import('@/views/enshrine/shop'),
         
        }
      ]
    }



 
  
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active", //  路由默认选中得样式
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
