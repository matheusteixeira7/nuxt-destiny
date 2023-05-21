<template>
  <button type="button"
    class="block rounded-md bg-primary px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Button',
  },
})
</script>
