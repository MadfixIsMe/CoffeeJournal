<script setup>
defineProps({
  item: { type: Object, required: true },
})

const emit = defineEmits(['remove'])
</script>

<template>
  <article class="wishlist-card">
    <h3>{{ item.type }}</h3>
    <p class="wishlist-card__text">{{ item.venue }}, {{ item.city }}</p>
    <p v-if="item.note" class="wishlist-card__text">{{ item.note }}</p>
    <footer class="wishlist-card__footer">
      <button type="button" class="btn btn--ghost" @click="emit('remove', item.id)">
        Odstrániť
      </button>
    </footer>
  </article>
</template>

<style scoped>
.wishlist-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.wishlist-card h3 {
  margin: 0;
}

.wishlist-card__text {
  margin: 0;
  color: var(--color-muted);
}

.wishlist-card__footer {
  margin-top: auto;
  padding-top: 0.5rem;
}
</style>