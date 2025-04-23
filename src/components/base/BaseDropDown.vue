<template>
  <div class="relative">
    <button
      @click="emit('toggle-dropdown')"
      :class="[btnClass, btnColors]"
      class="flex items-center justify-between border cursor-pointer rounded-lg dark:bg-dark-100 px-5 py-3.5"
      type="button"
    >
      <span class="text-base">{{ label }}</span>
    </button>
    <div
      v-if="showDropdownContent"
      class="absolute z-50 w-full h-auto top-14 bg-white dark:bg-dark-200 dark:border-gray rounded shadow-2xl border border-gray-200 dark:border-dark-light"
    >
      <div class="items">
        <div
          @click="emit('select-item', item)"
          class="item text-black dark:text-primary-dark-text hover:bg-gray-100 dark:hover:bg-gray dark:text-gray-primary hover:text-primary hover:cursor-pointer transition-all duration-300 p-2.5"
          v-for="item in filteredItems"
          :key="item.id"
        >
          <slot name="dropdownItem" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['toggle-dropdown', 'select-item'])

const props = defineProps({
  label: {
    type: String,
    default: 'Select item',
  },
  items: {
    type: Array,
    default: [],
  },
  showDropdownContent: {
    type: Boolean,
    default: false,
  },
  contentClass: {
    type: String,
    default: 'min-h-20',
  },
  showSearch: {
    type: Boolean,
    default: true,
  },
  contentPosition: {
    type: String,
    default: 'top-14',
  },
})

</script>
