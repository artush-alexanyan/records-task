<template>
  <div class="mt-10">
    <div class="grid grid-cols-4 gap-5 mb-5" v-for="account in accounts">
      <AccountField
        ><template #field-value>
          <span>{{ tagsToString(account.tags) }}</span>
        </template></AccountField
      >
      <AccountField
        ><template #field-value>
          <span>{{ account.recordType.text }}</span>
        </template>
      </AccountField>
      <AccountField
        ><template #field-value>
          <span>{{ account.login }}</span>
        </template>
      </AccountField>
      <AccountField
        ><template #field-value>
          <span>{{ account.password }}</span>
        </template></AccountField
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAccountStore } from "../../pinia/account";
import type { Account } from "../../pinia/account";
import type { Tag } from "../../pinia/account";
import AccountField from "./AccountField.vue";

const accountStore = useAccountStore();

const accounts = computed<Account[]>(() => accountStore.accounts);

const tagsToString = (tags: Tag[]): string => {
  return tags
    .map((tag) => tag.text.trim())
    .filter(Boolean)
    .join(";");
};

onMounted(() => {
  accountStore.getAccountsFroStorage();
});
</script>
