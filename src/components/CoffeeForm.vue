<script setup>
import { reactive, ref } from 'vue'
import StarRating from './StarRating.vue'
import { COFFEE_TYPES, CITIES } from '../constants'

const emit = defineEmits(['submit'])

const form = reactive({
  type: '',
  city: '',
  venue: '',
  rating: 0,
  price: '',
  date: new Date().toISOString().slice(0, 10),
  note: '',
})
const errors = ref({})

function validate() {
  const result = {}
  if (!form.type) result.type = 'Vyber typ kávy.'
  if (!form.city) result.city = 'Vyber mesto.'
  if (!form.venue.trim()) result.venue = 'Zadaj názov podniku.'
  if (form.rating < 1) result.rating = 'Zadaj hodnotenie.'
  if (form.price === '' || form.price < 0) result.price = 'Zadaj cenu (0 alebo viac).'
  if (!form.date) result.date = 'Zadaj dátum.'
  errors.value = result
  return Object.keys(result).length === 0
}

function onSubmit() {
  if (!validate()) return
  emit('submit', {
    type: form.type,
    city: form.city,
    venue: form.venue.trim(),
    rating: form.rating,
    price: Number(form.price),
    date: form.date,
    note: form.note.trim(),
  })
}
</script>

<template>
  <form class="form" novalidate @submit.prevent="onSubmit">
    <div class="field">
      <label for="coffee-type">Typ kávy</label>
      <select id="coffee-type" v-model="form.type">
        <option value="" disabled>Vyber typ kávy</option>
        <option v-for="type in COFFEE_TYPES" :key="type" :value="type">{{ type }}</option>
      </select>
      <span v-if="errors.type" class="field__error">{{ errors.type }}</span>
    </div>

    <div class="field">
      <label for="coffee-city">Mesto</label>
      <select id="coffee-city" v-model="form.city">
        <option value="" disabled>Vyber mesto</option>
        <option v-for="city in CITIES" :key="city" :value="city">{{ city }}</option>
      </select>
      <span v-if="errors.city" class="field__error">{{ errors.city }}</span>
    </div>

    <div class="field">
      <label for="coffee-venue">Podnik (kaviareň, reštaurácia...)</label>
      <input id="coffee-venue" v-model="form.venue" type="text" />
      <span v-if="errors.venue" class="field__error">{{ errors.venue }}</span>
    </div>

    <div class="field">
      <span class="field__label">Hodnotenie</span>
      <StarRating v-model="form.rating" />
      <span v-if="errors.rating" class="field__error">{{ errors.rating }}</span>
    </div>

    <div class="field">
      <label for="coffee-price">Cena (€)</label>
      <input id="coffee-price" v-model.number="form.price" type="number" min="0" step="0.1" />
      <span v-if="errors.price" class="field__error">{{ errors.price }}</span>
    </div>

    <div class="field">
      <label for="coffee-date">Dátum</label>
      <input id="coffee-date" v-model="form.date" type="date" />
      <span v-if="errors.date" class="field__error">{{ errors.date }}</span>
    </div>

    <div class="field">
      <label for="coffee-note">Poznámka (nepovinné)</label>
      <textarea id="coffee-note" v-model="form.note" rows="3"></textarea>
    </div>

    <button type="submit" class="btn">Pridať do kolekcie</button>
  </form>
</template>