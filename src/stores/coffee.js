import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCoffeeStore = defineStore('coffee', () => {
  const coffees = ref(JSON.parse(localStorage.getItem('coffees')) || [])

  watch(
    coffees,
    (newValue) => {
      localStorage.setItem('coffees', JSON.stringify(newValue))
    },
    { deep: true },
  )

  const coffeeCount = computed(() => coffees.value.length)

  const sortedCoffees = computed(() =>
    [...coffees.value].sort((a, b) => b.date.localeCompare(a.date)),
  )

  const averageRating = computed(() => {
    if (coffees.value.length === 0) return 0
    const sum = coffees.value.reduce((total, coffee) => total + coffee.rating, 0)
    return sum / coffees.value.length
  })

  const averagePrice = computed(() => {
    if (coffees.value.length === 0) return 0
    const sum = coffees.value.reduce((total, coffee) => total + coffee.price, 0)
    return sum / coffees.value.length
  })

  const typeStats = computed(() => {
    const groups = {}
    for (const coffee of coffees.value) {
      if (!groups[coffee.type]) {
        groups[coffee.type] = { type: coffee.type, count: 0, totalPrice: 0 }
      }
      groups[coffee.type].count++
      groups[coffee.type].totalPrice += coffee.price
    }
    return Object.values(groups)
      .map((group) => ({
        type: group.type,
        count: group.count,
        averagePrice: group.totalPrice / group.count,
      }))
      .sort((a, b) => b.count - a.count)
  })

  const venueStats = computed(() => {
    const groups = {}
    for (const coffee of coffees.value) {
      const key = `${coffee.venue.trim().toLowerCase()}|${coffee.city}`
      if (!groups[key]) {
        groups[key] = { venue: coffee.venue, city: coffee.city, count: 0, totalRating: 0 }
      }
      groups[key].count++
      groups[key].totalRating += coffee.rating
    }
    return Object.values(groups)
      .map((group) => ({
        venue: group.venue,
        city: group.city,
        count: group.count,
        averageRating: group.totalRating / group.count,
      }))
      .sort((a, b) => b.averageRating - a.averageRating || b.count - a.count)
  })

  function addCoffee({ type, city, venue, rating, price, date, note = '' }) {
    coffees.value.push({ id: crypto.randomUUID(), type, city, venue, rating, price, date, note })
  }

  function removeCoffee(id) {
    coffees.value = coffees.value.filter((coffee) => coffee.id !== id)
  }

  return {
    coffees,
    coffeeCount,
    sortedCoffees,
    averageRating,
    averagePrice,
    typeStats,
    venueStats,
    addCoffee,
    removeCoffee,
  }
})