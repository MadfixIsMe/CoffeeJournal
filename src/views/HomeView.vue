<script setup>
import { useCoffeeStore } from '../stores/coffee'
import CoffeeCard from '../components/CoffeeCard.vue'
import AddCard from '../components/AddCard.vue'

const coffeeStore = useCoffeeStore()
</script>

<template>
  <main class="page">
    <h1>Moja kolekcia</h1>
    <p class="empty">Počet káv: {{ coffeeStore.coffeeCount }}</p>

    <div class="card-grid">
      <AddCard to="/add" label="Pridať kávu" />
      <CoffeeCard
        v-for="coffee in coffeeStore.sortedCoffees"
        :key="coffee.id"
        :coffee="coffee"
        @remove="coffeeStore.removeCoffee"
      />
    </div>
  </main>
</template>