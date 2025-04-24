<template>
  <div class="flex flex-col space-y-1.5">
    <label :for="id" class="text-black text-sm">{{ label }}</label>
    <div class="relative">
      <input
        :class="[
          customClass,
          touched && errorMessage ? 'border-red-primary' : 'border-gray-200',
        ]"
        class="border w-full px-3 py-2.5 bg-white rounded-lg outline-none focus:border-primary transition-all duration-300"
        :placeholder="placeholder"
        :type="showPassword && showEyeIcon ? 'password' : 'text'"
        :required="required"
        :disabled="disabled"
        :id="id"
        :value="modelValue"
        @input="updateModelValue"
        @blur="handleBlur"
        @keydown.space.prevent
      />
      <div
        v-if="showEyeIcon"
        class="absolute top-2.5 right-2.5"
      >
        <button class="cursor-pointer" type="button" @click="togglePassword">
          <IconEye v-if="showPassword" />
          <IconEyeSlash v-else />
        </button>
      </div>
    </div>
    <span
      v-if="touched && errorMessage"
      class="text-xs text-red-primary font-semibold"
      >{{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconEye from "../icons/IconEye.vue";
import IconEyeSlash from "../icons/IconEyeSlash.vue";


const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const updateModelValue = (e: Event): void => {
  const value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};

interface Props {
  id?: string;
  label?: string;
  modelValue: string | null;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string | null;
  isValid?: boolean;
  focused?: boolean;
  customClass?: string;
  showEyeIcon?: boolean;
}

withDefaults(defineProps<Props>(), {
  id: "",
  label: "",
  modelValue: "",
  placeholder: "Type value here",
  required: false,
  disabled: false,
  isValid: true,
  errorMessage: null,
  focused: false,
  customClass: "",
  showEyeIcon: false,
});

const touched = ref<boolean>(false);
const showPassword = ref<boolean>(false);

const togglePassword = (): void => {
  showPassword.value = !showPassword.value;
};
const handleBlur = (): void => {
  touched.value = true;
};
</script>
