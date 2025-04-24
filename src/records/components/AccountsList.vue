<template>
  <div class="mt-10">
    <div class="grid grid-cols-4 gap-5 mb-5" v-for="account in accounts">
      <AccountField
        ><template #field-value>
          <ul class="flex items-center space-x-0.5">
            <li class="" v-for="(tag, index) in account.tags">
              {{ tag.text }}
              <span
                v-if="account.tags.length > 0 && index < account.tags.length - 1"
                >;</span
              >
            </li>
          </ul>
        </template></AccountField
      >
      <AccountField
        ><template #field-value>
          {{ account.recordType.text }}
        </template>
      </AccountField>
      <AccountField
        ><template #field-value>
          {{ account.login }}
        </template>
      </AccountField>
      <AccountField
        ><template #field-value>
          {{ account.password }}
        </template></AccountField
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { computed } from "vue";
import { useAccountStore } from "../../pinia/account";
import type { Account } from "../../pinia/account";
import AccountField from "./AccountField.vue";

const accountStore = useAccountStore();

const accounts = computed<Account[]>(() => accountStore.accounts);

onMounted(() => {
  accountStore.getAccountsFroStorage();
});
</script>
