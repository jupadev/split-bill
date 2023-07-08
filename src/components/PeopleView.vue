<script setup>
import { store, getGrandTotal } from '../stores/main'
import MoneyFormatter from './MoneyFormatter.vue'
import PersonView from './PersonView.vue'
</script>

<template>
  <div class="container">
    <div class="no-items" v-if="store.people.length === 0">Empty list</div>
    <div class="header" v-if="store.people.length > 0">
      <MoneyFormatter title="Total + Tip: " :value="getGrandTotal()" />
      <MoneyFormatter title="Remaining: " :value="store.params.remaining" />
    </div>
    <div class="people-container">
      <PersonView
        v-for="person in store.people"
        :key="person.id"
        :id="person.id"
        :numberOfPerson="person.numberOfPerson"
        :totalPerPerson="person.totalPerPerson"
        :paid="person.paid"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 2;
}
.people-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
