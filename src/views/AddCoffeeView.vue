<script setup>
import { useRouter } from 'vue-router'
import { useCoffeeStore } from '../stores/coffee'
import CoffeeForm from '../components/CoffeeForm.vue'

const router = useRouter()
const coffeeStore = useCoffeeStore()

function handleSubmit(data) {
  coffeeStore.addCoffee(data)
  router.push('/')
}
</script>

<template>
  <main class="page">
    <h1>Pridať kávu</h1>
    <CoffeeForm @submit="handleSubmit" />
  </main>
</template>