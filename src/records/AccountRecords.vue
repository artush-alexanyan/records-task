<template>
  <div class="container mx-auto px-10 py-5">
    <div class="flex items-center space-x-2.5">
      <h2 class="text-3xl font-bold">Учётные записи</h2>
      <AddRecordButton />
    </div>
    <AccountsList />
    <NewAccountForm />
  </div>
</template>

<script setup lang="ts">
import AddRecordButton from "./components/AddRecordButton.vue";
import NewAccountForm from "./components/NewAccountForm.vue";
import AccountsList from "./components/AccountsList.vue";
</script>
