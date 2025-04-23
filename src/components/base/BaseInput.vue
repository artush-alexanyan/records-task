<template>
  <div class="flex flex-col space-y-1.5">
    <label :for="id" class="text-black dark:text-gray-primary text-sm">{{
      label
    }}</label>
    <div class="relative">
      <input
        class="border-[1.5px] w-full bg-white dark:bg-dark-100 dark:text-gray-primary !dark:autofill:bg-dark-100 rounded-lg outline-none focus:border-primary placeholder:text-sm'"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        :disabled="disabled"
        :id="id"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
      <div class="absolute top-1/2 left-2.5 transform -translate-y-1/2">
        <slot name="left-icon"></slot>
      </div>
      <div class="absolute top-1/2 right-2.5 transform -translate-y-1/2">
        <slot name="right-icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: "Input label",
  },
  id: String,
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Type here...",
  },
  required: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  globalClasses: {
    type: String,
    default: "px-10 py-3.5",
  },
});
</script>
