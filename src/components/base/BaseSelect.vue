<template>
  <div class="flex flex-col space-y-1.5">
    <label class="block text-sm">{{ label }}</label>
    <select
      :value="modelValue"
      @blur="handleBlur"
      @change="handleSelect"
      :disabled="disabled"
      :class="[
        customClass,
        touched && errorMessage ? 'border-red-primary' : 'border-gray-200',
      ]"
      class="border w-full px-5 py-2.5 bg-white rounded-lg outline-none focus:border-primary transition-all duration-300"
    >
      <option disabled value="">Выберите тип записи</option>
      <option v-for="item in items" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
    <span
      v-if="touched && errorMessage"
      class="text-xs text-red-primary font-semibold"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  "select-item": [string];
}>();

interface Props {
  modelValue: string;
  label?: string;
  items?: string[];
  errorMessage?: string | null;
  customClass?: string;
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
  label: "",
  errorMessage: null,
  items: () => [] as string[],
  customClass: "",
  disabled: false
});

const handleSelect = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("select-item", target.value);
};

const touched = ref<boolean>(false);

const handleBlur = () => {
  touched.value = true;
};
</script>
