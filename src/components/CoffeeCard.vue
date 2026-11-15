<script setup>
import StarRating from './StarRating.vue'

defineProps({
  coffee: { type: Object, required: true },
})

const emit = defineEmits(['remove'])

function formatDate(date) {
  return new Date(date).toLocaleDateString('sk-SK')
}
</script>

<template>
  <article class="coffee-card">
    <header class="coffee-card__header">
      <h3>{{ coffee.type }}</h3>
      <span class="coffee-card__price">{{ coffee.price.toFixed(2) }} €</span>
    </header>
    <p class="coffee-card__place">{{ coffee.venue }}, {{ coffee.city }}</p>
    <StarRating :model-value="coffee.rating" readonly />
    <p v-if="coffee.note" class="coffee-card__note">{{ coffee.note }}</p>
    <footer class="coffee-card__footer">
      <small>{{ formatDate(coffee.date) }}</small>
      <button type="button" class="btn btn--ghost" @click="emit('remove', coffee.id)">
        Zmazať
      </button>
    </footer>
  </article>
</template>

<style scoped>
.coffee-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.coffee-card__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.coffee-card__header h3 {
  margin: 0;
}

.coffee-card__price {
  font-weight: 600;
}

.coffee-card__place,
.coffee-card__note {
  margin: 0;
  color: var(--color-muted);
}

.coffee-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
  color: var(--color-muted);
}
</style>