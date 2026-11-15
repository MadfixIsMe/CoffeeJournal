<script setup>
import { reactive, ref } from 'vue'
import { COFFEE_TYPES, CITIES } from '../constants'

const emit = defineEmits(['submit'])

const form = reactive({ type: '', city: '', venue: '', note: '' })
const errors = ref({})

function validate() {
  const result = {}
  if (!form.type) result.type = 'Vyber typ kávy.'
  if (!form.city) result.city = 'Vyber mesto.'
  if (!form.venue.trim()) result.venue = 'Zadaj názov podniku.'
  errors.value = result
  return Object.keys(result).length === 0
}

function onSubmit() {
  if (!validate()) return
  emit('submit', {
    type: form.type,
    city: form.city,
    venue: form.venue.trim(),
    note: form.note.trim(),
  })
}
</script>

<template>
  <form class="form" novalidate @submit.prevent="onSubmit">
    <div class="field">
      <label for="wish-type">Typ kávy</label>
      <select id="wish-type" v-model="form.type">
        <option value="" disabled>Vyber typ kávy</option>
        <option v-for="type in COFFEE_TYPES" :key="type" :value="type">{{ type }}</option>
      </select>
      <span v-if="errors.type" class="field__error">{{ errors.type }}</span>
    </div>

    <div class="field">
      <label for="wish-city">Mesto</label>
      <select id="wish-city" v-model="form.city">
        <option value="" disabled>Vyber mesto</option>
        <option v-for="city in CITIES" :key="city" :value="city">{{ city }}</option>
      </select>
      <span v-if="errors.city" class="field__error">{{ errors.city }}</span>
    </div>

    <div class="field">
      <label for="wish-venue">Podnik</label>
      <input id="wish-venue" v-model="form.venue" type="text" />
      <span v-if="errors.venue" class="field__error">{{ errors.venue }}</span>
    </div>

    <div class="field">
      <label for="wish-note">Poznámka (nepovinné)</label>
      <textarea id="wish-note" v-model="form.note" rows="2"></textarea>
    </div>

    <button type="submit" class="btn">Pridať do wishlistu</button>
  </form>
</template>