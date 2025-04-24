<template>
  <form class="mt-5" v-if="showAccountForm" @submit.prevent="addNewAccount">

    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5"
    >
      <BaseInput
        :custom-class="'required'"
        :error-message="tagError"
        :label="'Добавьте метку'"
        :id="'tagInput'"
        v-model="tag"
        :placeholder="'Enter tag name'"
      />
      <BaseSelect
        v-model="recordType"
        :custom-class="'required'"
        :error-message="recordTypeError"
        :items="recordTypes"
        :label="'Тип записи'"
        @select-item="selectRecordType"
      />
      <BaseInput
        :custom-class="'required'"
        :error-message="loginError"
        :label="'Логин'"
        v-model="login"
        :placeholder="'Введите логин'"
        :id="'newwLoginInput'"
      />
      <BaseInput
      :show-eye-icon="true"
        :custom-class="'required'"
        v-if="recordType !== 'LDAP'"
        :error-message="passwordError"
        :label="'Пароль'"
        v-model="password"
        :placeholder="'Введите пароль'"
        :id="'newPasswordInput'"
      />

    </div>

    <div class="flex items-center justify-start mt-2.5">
      <div class="flex items-center space-x-5 w-sm">
        <BaseButton
          :btn-class="'bg-primary text-white'"
          :type="'submit'"
          :label="'Сохранить'"
        />
        <BaseButton
          :btn-class="'bg-red-primary text-white'"
          @button-action="closeNewAccountForm"
          :type="'button'"
          :label="'Отменить'"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAccountStore } from "../../pinia/account";
import BaseInput from "../../components/base/BaseInput.vue";
import BaseSelect from "../../components/base/BaseSelect.vue";
import BaseButton from "../../components/base/BaseButton.vue";
import type { Tag } from "../../pinia/account";
import { useValidationStore } from "../../pinia/validation";


const accountStore = useAccountStore();
const validation = useValidationStore();
const login = ref<string>("");
const password = ref<string>("");
const tag = ref<string>("");

const recordType = ref<string>("");

const recordTypes = ref<string[]>(["LDAP", "Локальная"]);

const showAccountForm = computed<boolean>(() => accountStore.showAccountForm);

const loginError = computed<string | null>(() =>
  validation.validateLogin(login.value)
);

const passwordError = computed<string | null>(() =>
  validation.validatePassword(password.value)
);

const tagError = computed<string | null>(() => validation.validateTag(tag.value))

const recordTypeError = computed<string | null>(() =>
  validation.validateRecordType(recordType.value)
);

const triggerBlur = (): void => {
  const inputs = document.querySelectorAll(".required");
  inputs.forEach((input) => {
    (input as HTMLInputElement).focus();
    setTimeout(() => {
      (input as HTMLInputElement).blur();
    }, 0);
  });
};

const stringToTags = (input: string): Tag[] => {
  return input
    .split(";")
    .map((tag, index) => ({
      id: Date.now() + index,
      text: tag.trim(),
    }))
    .filter((tag) => tag.text.length > 0);
};

const closeNewAccountForm = (): void => {
  accountStore.closeNewAccountForm();
};

const resetForm = ():void => {
  login.value = ""
  password.value = "",
  recordType.value = ""
  tag.value = ""
}

const addNewAccount = (): void => {
  triggerBlur();


  if (loginError.value || recordTypeError.value || tagError.value) {
    return;
  }

  
  if(recordType.value !== "LDAP" && !password.value){
    return
  }

  const tags = stringToTags(tag.value);

  const passwordValue = recordType.value === "LDAP" ? null : password.value;
  accountStore.addNewAccount({
    id: new Date().getTime(),
    tags,
    login: login.value,
    password: passwordValue,
    recordType: recordType.value,
  });
  resetForm()
  accountStore.closeNewAccountForm()
};

const selectRecordType = (item: string) => {
  recordType.value = item;
};
</script>
