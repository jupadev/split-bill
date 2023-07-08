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
  <Form action="" @submit.prevent="handleSubmit" class="container">
    <div class="input-container">
      <label for="total" class="input-label">Total</label>
      <div class="input-wrapper">
        <input
          id="total"
          name="total"
          min="0"
          type="number"
          required
          v-model="total"
          class="input"
        />
      </div>
    </div>
    <div class="input-container">
      <label for="tip" class="input-label">Tip %</label>
      <div class="input-wrapper">
        <input
          id="tip"
          name="tip"
          type="number"
          min="0"
          max="100"
          required
          v-model="tip"
          class="input"
        />
      </div>
    </div>
    <div class="input-container">
      <label for="people" class="input-label">Amount of people</label>
      <div class="input-wrapper">
        <input
          id="people"
          name="people"
          min="0"
          max="100"
          type="number"
          required
          v-model="people"
          class="input"
        />
      </div>
    </div>
    <div>
      <button type="submit" class="form-button">Calculate</button>
    </div>
  </Form>
</template>

<style scoped>
.container {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, #8360c3, #2ebf91);
}
.form-button {
  margin-top: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.1em 0.6em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
}

.input-container {
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
}

.input-label {
  flex: 1;
  text-align: right;
}

.input-wrapper {
  flex: 2;
}
.input {
  height: 2rem;
  font-size: 1rem;
  padding: 0 5px;
  width: 150px;
}
</style>
