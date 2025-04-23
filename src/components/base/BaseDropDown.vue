<template>
  <div class="relative">
    <button
      @click="emit('toggle-dropdown')"
      :class="showContent ? 'border-primary' : 'border-gray-200'"
      class="flex items-center justify-between min-w-48 w-full border-2 cursor-pointer rounded-lg  px-5 py-3.5"
      type="button"
    >
      <span class="text-base">{{ label }}</span>
    </button>
    <div
      v-if="showContent"
      class="absolute z-50 w-full h-auto top-14 bg-white  border-gray rounded shadow-2xl border border-gray-200"
    >
      <div class="items">
        <div
          @click="selectItem(item)"
          class="item text-black text-primary-dark-text hover:bg-gray-100 hover:bg-gray text-gray-primary hover:text-primary hover:cursor-pointer transition-all duration-300 p-2.5"
          v-for="item in items"
          :key="item.id"
        >
          <slot name="dropdownItem" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  "toggle-dropdown": [];
  "select-item": [Item];
}>();


interface Item {
  id: number | string;
  text: string
}

interface Props {
  label: string;
  items?: Item[];
  showContent?: boolean;
}

withDefaults(defineProps<Props>(), {
  label: "",
  items: () => [] as Item[],
  showContent: false,
});

const selectItem = (item: Item) => {
  emit("select-item", item);
};
</script>
