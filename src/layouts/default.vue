<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-navbar dark:bg-navbar-darkbg px-6 pb-2">
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company" />
                </div>
                <nav class="flex flex-1 flex-col" aria-label="nav">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a v-if="!item.children" :href="item.href"
                            :class="[item.current ? 'bg-navbar dark:bg-navbar-dark' : 'hover:bg-navbar dark:hover:bg-navbar-dark', 'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-navbar dark:text-navbar-dark']">{{
                              item.name }}</a>
                          <Disclosure as="div" v-else v-slot="{ open }">
                            <DisclosureButton
                              :class="[item.current ? 'bg-navbar dark:bg-navbar-dark' : 'hover:bg-navbar dark:hover:bg-navbar-dark', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-navbar dark:text-navbar-dark']">
                              <ChevronRightIcon
                                :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'h-5 w-5 shrink-0']"
                                aria-hidden="true" />
                              {{ item.name }}
                            </DisclosureButton>
                            <DisclosurePanel as="ul" class="mt-1 px-2">
                        <li v-for="subItem in item.children" :key="subItem.name">
                          <DisclosureButton as="a" :href="subItem.href"
                            :class="[subItem.current ? 'bg-navbar dark:bg-navbar-dark' : 'hover:bg-navbar dark:hover:bg-navbar-dark', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-navbar dark:text-navbar-dark']">
                            {{ subItem.name }}</DisclosureButton>
                        </li>
                        </DisclosurePanel>
                        </Disclosure>
                    </li>
                  </ul>
                  </li>
                  <li class="-mx-6 mt-auto">
                    <ThemeSwitcherButton class="px-6 py-3" />
                    <a href="#"
                      class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-50">
                      <img class="h-8 w-8 rounded-full bg-gray-50" :src="user.img" alt="" />
                      <span class="sr-only">Your profile</span>
                      <span aria-hidden="true">{{ user.name }}</span>
                    </a>
                  </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col" aria-label="nav">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a v-if="!item.children" :href="item.href"
                    :class="[item.current ? 'bg-navbar dark:bg-navbar-dark' : 'hover:bg-navbar dark:hover:bg-navbar-dark', 'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-navbar dark:text-navbar-dark']">{{
                      item.name }}</a>
                  <Disclosure as="div" v-else v-slot="{ open }">
                    <DisclosureButton
                      :class="[item.current ? 'bg-navbar dark:bg-navbar-dark' : 'hover:bg-navbar dark:hover:bg-navbar-dark', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-navbar dark:text-navbar-dark']">
                      <ChevronRightIcon :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'h-5 w-5 shrink-0']"
                        aria-hidden="true" />
                      {{ item.name }}
                    </DisclosureButton>
                    <DisclosurePanel as="ul" class="mt-1 px-2">
                <li v-for="subItem in item.children" :key="subItem.name">
                  <DisclosureButton as="a" :href="subItem.href"
                    :class="[subItem.current ? 'bg-navbar dark:bg-navbar-dark' : 'hover:bg-navbar dark:hover:bg-navbar-dark', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-navbar dark:text-navbar-dark']">
                    {{ subItem.name }}</DisclosureButton>
                </li>
                </DisclosurePanel>
                </Disclosure>
            </li>
          </ul>
          </li>
          <li class="-mx-6 mt-auto">
            <ThemeSwitcherButton class="px-6 py-3" />
            <div class="hover:bg-navbar dark:hover:bg-navbar-dark px-6 py-3">
              <a href="#" class="flex items-center gap-x-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                <img class="h-8 w-8 rounded-full bg-gray-50" :src="user.img" alt="" />
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">{{ user.name }}</span>
              </a>
            </div>
          </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="sticky top-0 z-40 flex items-center gap-x-6 bg-white dark:bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button type="button" class="-m-2.5 p-2.5 text-gray-700 dark:text-gray-400 lg:hidden" @click="sidebarOpen = true">
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img class="h-8 w-8 rounded-full bg-gray-50" :src="user.img" alt="" />
      </a>
    </div>

    <main class="py-10 lg:pl-72 h-full">
      <div class="px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot, DisclosureButton, DisclosurePanel, Disclosure } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  {
    name: 'Prestadores',
    current: false,
    children: [
      { name: 'Todos', href: '#', current: true },
      { name: 'Ativos', href: '#', current: false },
      { name: 'Inativos', href: '#', current: false },
      { name: 'Divergentes', href: '#', current: false },
    ],
  },
  { name: 'Convênios', href: '#', current: false },
  { name: 'Planos', href: '#', current: false },
]

const user = ref({
  name: 'Matheus Teixeira',
  img: '/img/avatar.png'
})

const sidebarOpen = ref(false)
</script>
