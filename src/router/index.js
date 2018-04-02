import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import NewsCenter from '@/pages/NewsCenter'
import ProductCenter from '@/pages/ProductCenter'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/news', component: NewsCenter, name: 'news' },
    { path: '/product', component: ProductCenter, name: 'product' },
  ]
})
