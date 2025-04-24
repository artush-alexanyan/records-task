<template>
  <button
    @click="openNewAccountForm"
    title="Добавить новую запись"
    type="button"
    class="cursor-pointer flex items-center justify-center size-10 rounded-lg border border-gray-200"
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
