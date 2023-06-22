<script setup>
import { ref } from 'vue'
import { store, calculate } from '../stores/main'

const total = ref(0)
const tip = ref(0)
const people = ref(0)

const handleSubmit = () => {
  store.params = {
    total,
    tip,
    people
  }
  calculate()
}
</script>

<template>
  <Form action="" @submit.prevent="handleSubmit">
    <div class="form-container">
      <div>
        <label for="total">Total</label>
        <input id="total" name="total" type="number" required v-model="total" />
      </div>
      <div>
        <label for="tip">Tip %</label>
        <input id="tip" name="tip" type="number" required v-model="tip" />
      </div>
      <div>
        <label for="people">Amount of people</label>
        <input id="people" name="people" type="number" required v-model="people" />
      </div>
    </div>
    <div>
      <button type="submit">Calculate</button>
    </div>
  </Form>
</template>

<style scoped></style>
