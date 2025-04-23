<template>
  <div class="flex flex-col" :class="label ? 'space-y-1.5' : ''">
    <label :for="id" class="text-black  text-sm">{{
      label
    }}</label>
    <div class="relative">
      <input
        class="border-2 border-gray-200 w-full px-5 py-2.5 bg-white rounded-lg outline-none focus:border-primary transition-all duration-300'"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        :disabled="disabled"
        :id="id"
        :value="modelValue"
        @input="updateModelValue"
      />
      <div class="absolute top-1/2 right-2.5 transform -translate-y-1/2">
        <slot name="right-icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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

}

withDefaults(
defineProps<Props>(), {
  id:'',
  label: '',
  modelValue: '',
  type: 'text',
  placeholder: 'Type value here',
  required: false,
  disabled: false
})
</script>
