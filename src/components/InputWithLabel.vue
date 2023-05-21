<template>
  <div>
    <label :for="id" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">{{ label
    }}</label>
    <div class="mt-2">
      <input :type="type" :name="id" :id="id"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})
</script>
