<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-title dark:text-title-dark">Prestadores</h1>
        <p class="mt-2 text-sm text-subtitle dark:text-subtitle-dark">Lista de todos os prestadores de serviço da Vitta.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <ButtonPrimary>
          Adicionar Prestador
        </ButtonPrimary>
      </div>
    </div>

    <div>
      <SearchBar />
    </div>

    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="relative">
            <div v-if="selectedProvider.length > 0"
              class="absolute left-14 top-0 flex h-12 items-center space-x-3 white sm:left-12">
              <button type="button"
                class="inline-flex items-center rounded bg-white dark:bg-gray-700 px-2 py-1 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">Editar
                Todos</button>
              <button type="button"
                class="inline-flex items-center rounded bg-white dark:bg-gray-700 px-2 py-1 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">Deletar
                todos</button>
            </div>
            <table class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
                    <input type="checkbox"
                      class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary"
                      :checked="indeterminate || selectedProvider.length === providers.length"
                      :indeterminate="indeterminate"
                      @change="selectedProvider = (<HTMLInputElement>$event.target).checked ? providers.map((p) => p.id) : []" />
                  </th>
                  <th scope="col"
                    class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Razão
                    Social</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Nome Fantasia</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                    CPF/CNPJ</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                    CNES</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Modelo/ Contrato</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span class="sr-only">Editar</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr v-for=" provider in providers" :key="provider.id"
                  :class="[selectedProvider.includes(provider.id) && 'bg-gray-100 dark:bg-slate-700']">
                  <td class="relative px-7 sm:w-12 sm:px-6">
                    <div v-if="selectedProvider.includes(provider.id)" class="absolute inset-y-0 left-0 w-0.5 bg-primary">
                    </div>
                    <input type="checkbox"
                      class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      :value="provider.id" v-model="selectedProvider" />
                  </td>
                  <td
                    :class="['whitespace-nowrap py-4 pr-3 text-sm font-medium', selectedProvider.includes(provider.id) ? 'text-primary' : 'text-body dark:text-body-dark']">
                    {{ provider.corporateName }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {{ provider.fantasyName }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {{ provider.cpfCnpj }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {{ provider.cnes }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {{ provider.contract }}
                  </td>
                  <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                    <a href="#" class="text-primary hover:text-primary-900">
                      Editar<span class="sr-only">, {{ provider.corporateName }}</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <Pagination />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { pending, data } = await useLazyAsyncData('providers', () => $fetch('/api/providers'), {
  transform: (data) => data.data,
})

const providers = computed(() => data.value ?? [])

const selectedProvider = ref<string[]>([])
const indeterminate = computed(() => selectedProvider.value.length > 0 && selectedProvider.value.length < providers.value.length)
</script>
