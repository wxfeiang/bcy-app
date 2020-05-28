import Vue from 'vue'
import VueRouter from 'vue-router'
import enshrine from '@/views/enshrine/enshrine'
import down from '@/views/down/down'
import zuji from '@/views/zuji/zuji'
Vue.use(VueRouter)



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
      redirect: '/Ebook',
      name: 'enshrine',
      children: [
        {
          path: '/Ebook',
          name: "book",
          component: () => import('@/views/enshrine/book'),
         
        },
        {
          path: '/Eting',
          component: () => import('@/views/enshrine/ting'),
         
        },
        {
          path: '/Exuexi',
          component: () => import('@/views/enshrine/xuexi'),
         
        },
        {
          path: '/Eshao',
          component: () => import('@/views/enshrine/shao'),
         
        },

        {
          path: '/Emove',
          component: () => import('@/views/enshrine/move'),
         
        },

      ]
    },
   
    {
      path: '/zuji',
      component: zuji,
      redirect: '/Zbook',
      name: 'zuji',
      children: [
        {
          path: '/Zbook',
          name: "book",
          component: () => import('@/views/zuji/book'),
         
        },
        {
          path: '/Zting',
          component: () => import('@/views/zuji/ting'),
         
        },
        {
          path: '/Zxuexi',
          component: () => import('@/views/zuji/xuexi'),
         
        },
        {
          path: '/Zshao',
          component: () => import('@/views/zuji/shao'),
         
        },

        {
          path: '/Zmove',
          component: () => import('@/views/zuji/move'),
         
        },

      ]
    },
    {
      path: '/down',
      component: down,
      redirect: '/Dbook',
      name: 'down',
      children: [
        {
          path: '/Dbook',
          name: "book",
          component: () => import('@/views/down/book'),
         
        },
        {
          path: '/Dting',
          component: () => import('@/views/down/ting'),
         
        },
        {
          path: '/Dxuexi',
          component: () => import('@/views/down/xuexi'),
         
        },
        {
          path: '/Dshao',
          component: () => import('@/views/down/shao'),
         
        },

        {
          path: '/Dmove',
          component: () => import('@/views/down/move'),
         
        },

      ]
    },
   
   


 
  
]

const router = new VueRouter({
  // mode: 'history',
  linkActiveClass: "active", //  路由默认选中得样式
  routes
})




// 添加路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.eleToken ? true : false;
//   if (to.path == "/login" || to.path == "/register") {
//     next();
//   } else {
//     isLogin ? next() : next("/login");  window.history.back()
//   }
//       isLogin ? next() : this.$router.go(-1);
// })

export default router;
