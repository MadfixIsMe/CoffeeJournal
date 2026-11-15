<script setup>
import { computed, ref } from 'vue'
import { useCoffeeStore } from '../stores/coffee'
import CoffeeCard from '../components/CoffeeCard.vue'
import AddCard from '../components/AddCard.vue'
import FilterBar from '../components/FilterBar.vue'

const coffeeStore = useCoffeeStore()

const filterType = ref('')
const filterVenue = ref('')
const filterRating = ref(0)

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

const filteredCoffees = computed(() => {
  const search = normalize(filterVenue.value.trim())

  return coffeeStore.sortedCoffees.filter((coffee) => {
    const matchesType = !filterType.value || coffee.type === filterType.value
    const matchesVenue = !search || normalize(coffee.venue).includes(search)
    const matchesRating = coffee.rating >= filterRating.value
    return matchesType && matchesVenue && matchesRating
  })
})
</script>

<template>
  <main class="page">
    <h1>Moja kolekcia</h1>

    <FilterBar
      v-model:type="filterType"
      v-model:venue="filterVenue"
      v-model:rating="filterRating"
    />

    <p class="empty">Zobrazených {{ filteredCoffees.length }} z {{ coffeeStore.coffeeCount }}</p>

    <div class="card-grid">
      <AddCard to="/add" label="Pridať kávu" />
      <CoffeeCard
        v-for="coffee in filteredCoffees"
        :key="coffee.id"
        :coffee="coffee"
        @remove="coffeeStore.removeCoffee"
      />
    </div>

    <p v-if="coffeeStore.coffeeCount > 0 && filteredCoffees.length === 0" class="empty">
      Žiadna káva nezodpovedá filtrom.
    </p>
  </main>
</template>