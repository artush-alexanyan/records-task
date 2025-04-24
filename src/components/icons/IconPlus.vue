<template>
  <svg :class="iconClass" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
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
  iconClass: "h-10",
});
</script>
