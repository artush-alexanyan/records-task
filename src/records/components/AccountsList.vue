<template>
  <div class="mt-10">
    <div v-if="accounts.length > 0">
      <div
        class="grid lg:grid-cols-9 md:grid-cols-3 sm:grid-cols-2 text-left grid-cols-1 gap-5"
      >
        <div class="col-span-2" v-for="title in titles" :key="title">
          <p>{{ title }}</p>
        </div>
      </div>
      <div
        class="grid grid-cols-9 gap-5 mb-5"
        v-for="(account, index) in accounts"
      >
        <div class="col-span-2">
          <div class="px-5 py-2.5 rounded-lg border border-gray-200 mt-1.5">
            <span>{{ tagsToString(account.tags) || "Меток нет" }}</span>
          </div>
        </div>
        <div class="col-span-2">
          <BaseSelect
            v-model="account.recordType"
            :items="recordTypes"
            :label="''"
            :disabled="true"
            :id="`disabledInput_${index}`"
          />
        </div>

        <div
          :class="account.recordType === 'LDAP' ? 'col-span-4' : 'col-span-2'"
        >
          <BaseInput
            :disabled="true"
            :placeholder="''"
            v-model="account.login"
            :id="`disabledInput_${index}`"
          />
        </div>
        <div class="col-span-2" v-if="account.recordType !== 'LDAP'">
          <BaseInput
            :disabled="true"
            :show-eye-icon="true"
            v-model="account.password"
            :id="`disabledInput_${index}`"
          />
        </div>
        <div class="col-span-1 flex items-center justify-center">
          <button
            @click="deleteAccount(account)"
            class="cursor-pointer"
            type="button"
            title="Удалить запись"
            name="Record deletion button"
          >
            <IconTrash />
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-center text-lg">
        Нет добавленных записей.
        <span v-if="!showAccountForm"
          >Нажмите кнопку «Плюс», чтобы добавить.</span
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useAccountStore } from "../../pinia/account";
import type { Account } from "../../pinia/account";
import type { Tag } from "../../pinia/account";
import IconTrash from "../../components/icons/IconTrash.vue";
import BaseSelect from "../../components/base/BaseSelect.vue";
import BaseInput from "../../components/base/BaseInput.vue";

const accountStore = useAccountStore();

const accounts = computed<Account[]>(() => accountStore.accounts);
const showAccountForm = computed<boolean>(() => accountStore.showAccountForm);

const recordTypes = ref<string[]>(["LDAP", "Локальная"]);
const titles = ref<string[]>(["Метки", "Тип записи", "Логин", "Пароль"]);

const tagsToString = (tags: Tag[]): string => {
  return tags
    .map((tag) => tag.text.trim())
    .filter(Boolean)
    .join(";");
};

const deleteAccount = (account: Account): void => {
  accountStore.deleteAccount(account);
};

onMounted(() => {
  accountStore.getAccountsFroStorage();
});
</script>
