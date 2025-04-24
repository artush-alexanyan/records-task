<template>
  <div class="mt-10">
    <div class="grid grid-cols-9 gap-5 mb-5" v-for="account in accounts">
      <AccountField
      class="col-span-2"
        ><template #field-value>
          <span>{{ tagsToString(account.tags) }}</span>
        </template></AccountField
      >
      <AccountField
      class="col-span-2"
        ><template #field-value>
          <span>{{ account.recordType }}</span>
        </template>
      </AccountField>
      <AccountField
      :class="account.recordType === 'LDAP' ? 'col-span-4' : 'col-span-2'"
        ><template #field-value>
          <span>{{ account.login }}</span>
        </template>
      </AccountField>
      <AccountField
      v-if="account.recordType !== 'LDAP'"
      class="col-span-2"
        ><template #field-value>
          <span>{{ account.password }}</span>
        </template></AccountField
      >
      <div class="cols-span-1">
        <button @click="deleteAccount(account)" class="cursor-pointer" type="button">
        <IconTrash />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAccountStore } from "../../pinia/account";
import type { Account } from "../../pinia/account";
import type { Tag } from "../../pinia/account";
import AccountField from "./AccountField.vue";
import IconTrash from "../../components/icons/IconTrash.vue";

const accountStore = useAccountStore();

const accounts = computed<Account[]>(() => accountStore.accounts);

const tagsToString = (tags: Tag[]): string => {
  return tags
    .map((tag) => tag.text.trim())
    .filter(Boolean)
    .join(";");
};

const deleteAccount = (account: Account): void => {
  accountStore.deleteAccount(account)
}

onMounted(() => {
  accountStore.getAccountsFroStorage();
});
</script>
