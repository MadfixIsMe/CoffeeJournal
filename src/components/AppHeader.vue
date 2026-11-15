<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <RouterLink to="/" class="app-header__logo">☕ Coffee Journal</RouterLink>
      <nav class="app-header__nav">
        <RouterLink to="/">Kolekcia</RouterLink>
        <RouterLink to="/add">+ Pridať kávu</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background: var(--color-accent);
}

.app-header__inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.app-header__logo {
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
}

.app-header__nav {
  display: flex;
  gap: 1rem;
}

.app-header__nav a {
  color: #f1e3d3;
  text-decoration: none;
}

.app-header__nav a.router-link-exact-active {
  color: #fff;
  font-weight: 600;
  border-bottom: 2px solid #fff;
}
</style>