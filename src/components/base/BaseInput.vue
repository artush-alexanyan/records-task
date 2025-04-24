<template>
  <div class="flex flex-col" :class="label ? 'space-y-1.5' : ''">
    <label :for="id" class="text-black  text-sm">{{
      label
    }}</label>
    <div class="relative">
      <input
      :class="[customClass,touched && errorMessage ? 'border-red-primary' : 'border-gray-200']"
        class="border-2  w-full px-5 py-2.5 bg-white rounded-lg outline-none focus:border-primary transition-all duration-300"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        :disabled="disabled"
        :id="id"
        :value="modelValue"
        @input="updateModelValue"
        @blur="handleBlur"
      />
      <div class="absolute top-1/2 right-2.5 transform -translate-y-1/2">
        <slot name="right-icon"></slot>
      </div>
    </div>
    <span v-if="touched && errorMessage" class="text-xs text-red-primary font-semibold">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const updateModelValue = (e: Event): void => {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', isNaN(Number(value)) ? value : Number(value));
}

interface Props {
  id: string,
  label: string,
  modelValue: string | number,
  type?: string,
  placeholder: string,
  required?:boolean,
  disabled?:boolean,
  errorMessage: string | null,
  isValid?: boolean,
  focused?: boolean,
  customClass: string
}

withDefaults(
defineProps<Props>(), {
  id:'',
  label: '',
  modelValue: '',
  type: 'text',
  placeholder: 'Type value here',
  required: false,
  disabled: false,
  isValid: true,
  errorMessage: null,
  focused: false,
  customClass:''
})

const touched = ref<boolean>(false);

const handleBlur = () => {
  touched.value = true;
};
</script>
