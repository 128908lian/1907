import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import shouye from './views/shouye.vue'
import baoyou from './views/baoyou.vue';
import shoucang from './views/shoucang.vue';
import fenlei from './views/fenlei.vue';
import my from './views/my.vue';
import signup from './components/signup.vue'
import regist from "./components/regist.vue"
Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/signup",
      name:"signup",
      component:signup,
      
    },
    {
      path:"/regist",
      name:"regist",
      component:regist,
      
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:{name:"shouye"},
      children:[
        {
          path: "/home/shouye",
          name: "shouye",
          component: shouye
        },
        // {
        //   path:"/signup",
        //   name:"signup",
        //   component:signup
        // },
        {
          path:"/home/baoyou",
          name:"baoyou",
          component:baoyou
        },
        {
          path:"/home/fenlei",
          name:"fenlei",
          component:fenlei
          
         
        },
        {
          path:"/home/my",
          name:"my",
          component:my
        },
        {
          path:"/home/shoucang",
          name:"shoucang",
          component:shoucang
        }
      ]

      
    },
   
  ]
})
