<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
})
</script>

<template>
  <article class="stat-card">
    <span class="stat-card__label">{{ label }}</span>
    <strong class="stat-card__value">{{ value }}</strong>
  </article>
</template>

<style scoped>
.stat-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-card__label {
  color: var(--color-muted);
  font-size: 0.9rem;
}

.stat-card__value {
  font-size: 1.6rem;
  color: var(--color-accent);
}
</style>