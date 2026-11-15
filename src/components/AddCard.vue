<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: { type: String, required: true },
  label: { type: String, default: 'Pridať' },
})
</script>

<template>
  <RouterLink :to="to" class="add-card">
    <span class="add-card__plus">+</span>
    <span class="add-card__label">{{ label }}</span>
  </RouterLink>
</template>

<style scoped>
.add-card {
  min-height: 150px;
  border: 2px dashed var(--color-border);
  border-radius: var(--radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: var(--color-muted);
  text-decoration: none;
  transition:
    border-color 0.15s,
    color 0.15s;
}

.add-card:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.add-card__plus {
  font-size: 2.5rem;
  line-height: 1;
}

.add-card__label {
  font-weight: 600;
}
</style>