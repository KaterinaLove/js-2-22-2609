import Vue from 'vue'
import VueRouter from 'vue-router'
//import Index from '../views/Index.vue'
  // import Product from '../views/Product.vue'
  // import Checkout from '../views/Checkout.vue'
  // import Product from '../views/Product.vue'
  // import Product from '../views/Product.vue'

Vue.use(VueRouter)

// const Product = { template: () => import('../views/Product.vue') }
// const Checkout = { template: () => import('../views/Checkout.vue') }

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/Product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/SinglePage',
    name: 'SinglePage',
    component: () => import('../views/SinglePage.vue')
  }
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
