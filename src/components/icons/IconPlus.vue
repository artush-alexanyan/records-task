<template>
  <svg :class="iconClass" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="iconPlus" stroke-width="0"></g>
    <g
      id="iconPlus"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="iconPlus">
      <rect width="24" height="24" fill="white"></rect>
      <path
        d="M12 6V18"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6 12H18"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  color?: string;
  iconClass?: string;
}
withDefaults(defineProps<Props>(), {
  color: "#323232",
  iconClass: "h-7",
});
</script>
