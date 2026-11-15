<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCoffeeStore } from '../stores/coffee'
import StatCard from '../components/StatCard.vue'
import StatList from '../components/StatList.vue'

const coffeeStore = useCoffeeStore()

const favoriteType = computed(() => coffeeStore.typeStats[0]?.type ?? '-')

const topVenues = computed(() =>
  coffeeStore.venueStats.slice(0, 5).map((venue) => ({
    label: `${venue.venue} (${venue.city})`,
    value: `${venue.averageRating.toFixed(1)} ★ z ${venue.count}`,
  })),
)

const popularTypes = computed(() =>
  coffeeStore.typeStats.map((stat) => ({
    label: stat.type,
    value: `${stat.count}×`,
  })),
)

const pricesByType = computed(() =>
  coffeeStore.typeStats.map((stat) => ({
    label: stat.type,
    value: `${stat.averagePrice.toFixed(2)} €`,
  })),
)
</script>

<template>
  <main class="page">
    <h1>Štatistiky</h1>

    <p v-if="coffeeStore.coffeeCount === 0" class="empty">
      Zatiaľ nie sú žiadne dáta. <RouterLink to="/add">Pridaj prvú kávu.</RouterLink>
    </p>

    <template v-else>
      <div class="card-grid">
        <StatCard label="Počet káv" :value="coffeeStore.coffeeCount" />
        <StatCard label="Priemerné hodnotenie" :value="`${coffeeStore.averageRating.toFixed(1)} ★`" />
        <StatCard label="Priemerná cena" :value="`${coffeeStore.averagePrice.toFixed(2)} €`" />
        <StatCard label="Najobľúbenejší nápoj" :value="favoriteType" />
      </div>

      <div class="stats-lists">
        <StatList title="Najlepšie hodnotené podniky" :items="topVenues" />
        <StatList title="Najčastejšie pité nápoje" :items="popularTypes" />
        <StatList title="Priemerná cena podľa nápoja" :items="pricesByType" />
      </div>
    </template>
  </main>
</template>

<style scoped>
.stats-lists {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>