<template>
  <form class="mt-5" v-if="showAccountForm" @submit.prevent="addNewAccount">
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5"
    >
      <div class="label_wrapper">
        <p class="text-sm mb-1.5">Добавьте метку</p>
        <div class="">
          <div class="flex items-center space-x-2.5">
            <BaseInput
            :label="''"
              :id="'tagInput'"
              v-model="tag"
              :placeholder="'Enter tag name'"
            />
            <BaseButton :label="'Добавить'" @button-action="addtag" />
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-1.5">
        <label class="text-black text-sm">Тип записи</label>
        <BaseDropDown
          :items="recordTypes"
          :show-content="showContent"
          :label="recordType.text"
          @toggle-dropdown="toggleDropdown"
          @select-item="selectRecordType"
        >
          <template #dropdownItem="{ item }">
            <span>{{ item.text }}</span>
          </template>
        </BaseDropDown>
      </div>
      <BaseInput
        :label="'Логин'"
        v-model="login"
        :placeholder="'Введите логин'"
        :id="'newwLoginInput'"
      />
      <BaseInput
        :label="'Пароль'"
        v-model="password"
        :placeholder="'Введите пароль'"
        :id="'newwPasswordInput'"
      />
    </div>

    <div class="flex items-center justify-between mt-2.5">
      <ul class="flex items-center space-x-0.5">
        <li class="" v-for="(tag, index) in tags" :key="tag.id">
          {{ tag.text }} <span v-if="tags.length > 1 && index < tags.length">;</span>
        </li>
      </ul>
      <button type="button" class="cursor-pointer" @click="closeNewAccountForm">
        Cancel
      </button>
      <div class="w-48">
        <BaseButton :type="'submit'" :label="'Add account'" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAccountStore } from "../../pinia/account";
import BaseInput from "../../components/base/BaseInput.vue";
import BaseDropDown from "../../components/base/BaseDropDown.vue";
import BaseButton from "../../components/base/BaseButton.vue";
const accountStore = useAccountStore();

const login = ref<string | number>("");
const password = ref<string | number>("");
const showContent = ref<boolean>(false);
const tag = ref<string>("");

interface Tag {
  id: string | number;
  text: string;
}

const tags = ref<Tag[]>([]);

interface Item {
  id: number | string;
  text: string;
}
const recordType = ref<{ id: string | number; text: string }>({
  id: 0,
  text: "Выберите тип записи",
});

const recordTypes = ref<Item[]>([
  { id: 1, text: "LDAP" },
  { id: 2, text: "Локальная" },
]);

const showAccountForm = computed<boolean>(() => accountStore.showAccountForm);

const addtag = (): void => {
  console.log("tag", tag);
  tags.value.push({
    id: new Date().getTime(),
    text: tag.value,
  });
  tag.value = "";
};

const closeNewAccountForm = (): void => {
  accountStore.closeNewAccountForm();
};

const addNewAccount = (): void => {
  accountStore.addNewAccount({ 
    id: new Date().getTime(),
    tags: tags.value,
    login: login.value,
    password: password.value,
    recordType: recordType.value
   });
};

const toggleDropdown = (): void => {
  showContent.value = !showContent.value;
};

const selectRecordType = (item: Item) => {
  recordType.value = item;
  showContent.value = false;
};
</script>
