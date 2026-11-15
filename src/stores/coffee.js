import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoffeeStore = defineStore('coffee', () => {
  const coffees = ref([])

  const coffeeCount = computed(() => coffees.value.length)

  const sortedCoffees = computed(() =>
    [...coffees.value].sort((a, b) => b.date.localeCompare(a.date)),
  )

  function addCoffee({ type, city, venue, rating, price, date, note = '' }) {
    coffees.value.push({ id: crypto.randomUUID(), type, city, venue, rating, price, date, note })
  }

  function removeCoffee(id) {
    coffees.value = coffees.value.filter((coffee) => coffee.id !== id)
  }

  return { coffees, coffeeCount, sortedCoffees, addCoffee, removeCoffee }
})