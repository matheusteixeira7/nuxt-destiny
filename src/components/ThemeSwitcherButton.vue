<template>
  <SwitchGroup as="div" class="flex items-center mb-4">
    <Switch v-model="enabled" @click="toggleTheme"
      :class="[enabled ? 'bg-primary' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2']">
      <span aria-hidden="true"
        :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
    </Switch>
    <SwitchLabel as="span" class="ml-3 text-sm">
      <span class="font-medium text-gray-900 dark:text-gray-400">{{ enabled ? 'Tema escuro' : 'Tema claro' }}</span>
      {{ ' ' }}
    </SwitchLabel>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

useHead({
  script: [{
    children: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }`
  }]
})

const { enabled, toggleTheme } = useTheme()

</script>
