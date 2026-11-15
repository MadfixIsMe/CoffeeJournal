<script setup>
const model = defineModel({ type: Number, default: 0 })

defineProps({
  readonly: { type: Boolean, default: false },
})
</script>

<template>
  <span class="star-rating">
    <button
      v-for="star in 5"
      :key="star"
      type="button"
      class="star"
      :class="{ 'star--filled': star <= model }"
      :disabled="readonly"
      :aria-label="`${star} z 5`"
      @click="model = star">
      ★
    </button>
  </span>
</template>

<style scoped>
.star-rating {
  display: inline-flex;
}

.star {
  border: none;
  background: none;
  padding: 0 1px;
  font-size: 1.3rem;
  color: var(--color-border);
  cursor: pointer;
}

.star--filled {
  color: var(--color-star);
}

.star:disabled {
  cursor: default;
}
</style>