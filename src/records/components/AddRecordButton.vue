<template>
  <button
    @click="openNewAccountForm"
    title="Add new account record"
    type="button"
    class="cursor-pointer flex items-center justify-center"
  >
    <IconPlus />
  </button>
</template>

<script setup lang="ts">
import IconPlus from "../../components/icons/IconPlus.vue";
import { useAccountStore } from "../../pinia/account";

const accountStore = useAccountStore();

const openNewAccountForm = (): void => {
  accountStore.openNewAccountForm();
};
</script>
