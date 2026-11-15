import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCoffeeView from '../views/AddCoffeeView.vue'
import WishlistView from '../views/WishlistView.vue'
import AddWishlistView from '../views/AddWishlistView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/add', name: 'add', component: AddCoffeeView },
    { path: '/wishlist', name: 'wishlist', component: WishlistView },
    { path: '/wishlist/add', name: 'add-wishlist', component: AddWishlistView },
  ],
})

export default router