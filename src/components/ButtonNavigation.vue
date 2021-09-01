<template>
  <router-link :to="path" class="btn btn--transparent">
    <span>{{ text }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 11.871l-5-4.871v3h-19v4h19v3z" />
    </svg>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps<{ path: string; text: string }>();
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  padding: 0.2em;

  svg {
      height: 1.5em;
      width: 1.5em;
  }
}
</style>
