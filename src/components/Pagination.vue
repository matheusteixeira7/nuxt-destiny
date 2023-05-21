<template>
  <div class="flex items-center justify-between border-t border-divider dark:border-divider-dark py-3">
    <div class="flex flex-1 justify-between sm:hidden">
      <a href="#"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
      <a href="#"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-body dark:text-body-dark">
          Mostrando
          {{ ' ' }}
          <span class="font-medium">1</span>
          {{ ' ' }}
          de
          {{ ' ' }}
          <span class="font-medium">10</span>
          {{ ' ' }}
          de
          {{ ' ' }}
          <span class="font-medium">97</span>
          {{ ' ' }}
          resultados
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a href="#"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-body dark:text-body-dark ring-1 ring-inset ring-divider dark:ring-divider-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a>
          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
          <a href="#" aria-current="page"
            class="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">1</a>
          <a href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-body dark:text-gray-400 ring-1 ring-inset ring-divider dark:ring-divider-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">2</a>
          <a href="#"
            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-body dark:text-gray-400 ring-1 ring-inset ring-divider dark:ring-divider-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
          <span
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-divider dark:ring-divider-dark focus:outline-offset-0">...</span>
          <a href="#"
            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-body dark:text-gray-400 ring-1 ring-inset ring-divider dark:ring-divider-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
          <a href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-body dark:text-gray-400 ring-1 ring-inset ring-divider dark:ring-divider-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">9</a>
          <a href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-body dark:text-gray-400 ring-1 ring-inset ring-divider dark:ring-divider-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">10</a>
          <a href="#"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-divider dark:ring-divider-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]
</script>
