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
        d="M5 7.5H19L18 21H6L5 7.5Z"
        :stroke="color"
        stroke-linejoin="round"
      ></path>
      <path
        d="M15.5 9.5L15 19"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12 9.5V19"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M8.5 9.5L9 19"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8"
        :stroke="color"
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
  color: "#ff5733",
  iconClass: "h-7",
});
</script>

