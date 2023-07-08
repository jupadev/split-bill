<script setup>
import BillForm from './BillForm.vue'
import PeopleView from './PeopleView.vue'
</script>

<template>
  <div class="container">
    <BillForm />
    <PeopleView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  min-height: 100vh;
}
</style>
