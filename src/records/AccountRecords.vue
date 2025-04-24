<template>
  <div class="container max-w-7xl mx-auto p-5">
    <div class="flex items-center space-x-2.5">
      <h2 class="text-3xl font-bold">Учётные записи</h2>
      <AddRecordButton />
    </div>
    <NewAccountForm />
    <AccountsList />
  </div>
</template>

<script setup lang="ts">
import AddRecordButton from "./components/AddRecordButton.vue";
import NewAccountForm from "./components/NewAccountForm.vue";
import AccountsList from "./components/AccountsList.vue";
</script>
