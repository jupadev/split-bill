<script setup>
import { defineProps, ref } from 'vue'
import { setPay } from "../stores/main"
import MoneyFormatter from './MoneyFormatter.vue';
const props = defineProps(['id', 'numberOfPerson', 'totalPerPerson', 'paid'])

let isPaid = ref(false)

const handleChangePaid = (event) => {
  isPaid.value = event.target.checked
  setPay(props.id, isPaid.value)
}
</script>

<template>
  <div :class="['person', props.paid ? 'person-paid': '']">
    <div class="person-number">{{ numberOfPerson }}</div>
    <div class="person-to-pay"><MoneyFormatter title="" :value="totalPerPerson" /></div>
    <div>
      <label class="person-checkbox">
        <input type="checkbox" name="paid" id="paid" @change="handleChangePaid" />
        Already paid?
      </label>
    </div>
  </div>
</template>

<style scoped>
.person {
  border-radius: 10px;
  border: 3px solid #ccc;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  cursor: initial;
}
.person-paid {
  border-color: yellowgreen;
}

.person-checkbox {
  cursor: pointer;
}
</style>
