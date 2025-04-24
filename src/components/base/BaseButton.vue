<template>
  <button
    :disabled="disabled"
    :name="name"
    :class="btnClass"
    class="cursor-pointer  flex w-full items-center justify-center px-5 py-3 space-x-2 transition-all duration-300 rounded-lg"
    :type="type"
    @click="emit('button-action')"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  'button-action': []
}>()

interface Props {
  type?: 'button' | 'submit' | 'reset',
  label?: string,
  name?: string,
  disabled?: boolean,
  btnClass?: string,
}


withDefaults(defineProps<Props>(), {
  label: '',
  name: '',
  type: 'button',
  disabled: false,
  btnClass: 'bg-primary text-white'
})
</script>
