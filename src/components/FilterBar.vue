<script setup>
import { COFFEE_TYPES } from '../constants'

const type = defineModel('type', { type: String, default: '' })
const venue = defineModel('venue', { type: String, default: '' })
const rating = defineModel('rating', { type: Number, default: 0 })

function reset() {
  type.value = ''
  venue.value = ''
  rating.value = 0
}
</script>

<template>
  <div class="filter-bar">
    <div class="field">
      <label for="filter-venue">Podnik</label>
      <input id="filter-venue" v-model="venue" type="search" placeholder="Hľadaj podľa názvu" />
    </div>

    <div class="field">
      <label for="filter-type">Typ kávy</label>
      <select id="filter-type" v-model="type">
        <option value="">Všetky</option>
        <option v-for="coffeeType in COFFEE_TYPES" :key="coffeeType" :value="coffeeType">
          {{ coffeeType }}
        </option>
      </select>
    </div>

    <div class="field">
      <label for="filter-rating">Hodnotenie</label>
      <select id="filter-rating" v-model.number="rating">
        <option :value="0">Všetky</option>
        <option v-for="stars in 5" :key="stars" :value="stars">od {{ stars }} ★</option>
      </select>
    </div>

    <button type="button" class="btn btn--ghost" @click="reset">Zrušiť filtre</button>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.filter-bar .field {
  min-width: 160px;
  flex: 1;
}
</style>