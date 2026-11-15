<script setup>
import { useRouter } from 'vue-router'
import { useWishlistStore } from '../stores/wishlist'
import WishlistForm from '../components/WishlistForm.vue'

const router = useRouter()
const wishlistStore = useWishlistStore()

function handleSubmit(data) {
  wishlistStore.addItem(data)
  router.push('/wishlist')
}
</script>

<template>
  <main class="page">
    <h1>Pridať do wishlistu</h1>
    <WishlistForm @submit="handleSubmit" />
  </main>
</template>