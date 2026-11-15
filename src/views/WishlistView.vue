<script setup>
import { useWishlistStore } from '../stores/wishlist'
import WishlistCard from '../components/WishlistCard.vue'
import AddCard from '../components/AddCard.vue'

const wishlistStore = useWishlistStore()
</script>

<template>
  <main class="page">
    <h1>Wishlist</h1>
    <p class="empty">Chcem vyskúšať: {{ wishlistStore.itemCount }}</p>

    <div class="card-grid">
      <AddCard to="/wishlist/add" label="Pridať do wishlistu" />
      <WishlistCard
        v-for="item in wishlistStore.items"
        :key="item.id"
        :item="item"
        @remove="wishlistStore.removeItem"
      />
    </div>
  </main>
</template>