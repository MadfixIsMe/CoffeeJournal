import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', () => {
  const items = ref(JSON.parse(localStorage.getItem('wishlist')) || [])

  watch(
    items,
    (newValue) => {
      localStorage.setItem('wishlist', JSON.stringify(newValue))
    }, { deep: true },)

  const itemCount = computed(() => items.value.length)

  function addItem({ type, city, venue, note = '' }) {
    items.value.push({ id: crypto.randomUUID(), type, city, venue, note })
  }

  function removeItem(id) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  return { items, itemCount, addItem, removeItem }
})