<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section class="stat-list">
    <h2>{{ title }}</h2>
    <ol v-if="items.length > 0">
      <li v-for="item in items" :key="item.label" class="stat-list__item">
        <span>{{ item.label }}</span>
        <strong>{{ item.value }}</strong>
      </li>
    </ol>
    <p v-else class="empty">Zatiaľ žiadne dáta.</p>
  </section>
</template>

<style scoped>
.stat-list {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
}

.stat-list h2 {
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
}

.stat-list ol {
  margin: 0;
  padding-left: 1.25rem;
}

.stat-list__item {
  padding: 0.3rem 0;
}

.stat-list__item span {
  margin-right: 0.5rem;
}

.stat-list__item strong {
  color: var(--color-accent);
}
</style>