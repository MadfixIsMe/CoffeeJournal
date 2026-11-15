<script setup>
import { RouterLink } from 'vue-router'
import { useCoffeeStore } from '../stores/coffee'
import CoffeeCard from '../components/CoffeeCard.vue'

const coffeeStore = useCoffeeStore()
</script>

<template>
  <main class="page">
    <h1>Moja kolekcia</h1>

    <p v-if="coffeeStore.coffeeCount === 0" class="empty">
      Zatiaľ tu nič nie je. <RouterLink to="/add">Pridaj prvú kávu.</RouterLink>
    </p>

    <template v-else>
      <p class="empty">Počet káv: {{ coffeeStore.coffeeCount }}</p>
      <div class="card-grid">
        <CoffeeCard
          v-for="coffee in coffeeStore.sortedCoffees"
          :key="coffee.id"
          :coffee="coffee"
          @remove="coffeeStore.removeCoffee"
        />
      </div>
    </template>
  </main>
</template>