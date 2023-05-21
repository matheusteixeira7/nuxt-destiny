<template>
  <div class="mt-8">
    <Disclosure as="section" aria-labelledby="filter-heading" class="grid items-center">
      <h2 id="filter-heading" class="sr-only">Filters</h2>
      <div class="relative col-start-1 row-start-1 py-4">
        <div class="mx-auto flex space-x-6 divide-x divide-gray-200 text-sm">
          <div>
            <DisclosureButton class="group flex items-center font-medium text-gray-700 dark:text-gray-300">
              <FunnelIcon class="mr-2 h-5 w-5 flex-none text-gray-400 dark:text-gray-300 group-hover:text-gray-500"
                aria-hidden="true" />
              2 Filtros
            </DisclosureButton>
          </div>
          <div class="pl-6">
            <button type="button" class="text-gray-500 dark:text-gray-300">Limpar tudo</button>
          </div>
        </div>
      </div>
      <DisclosurePanel class="border-t border-divider dark:border-divider-dark py-10">
        <div class="md:flex md:justify-between md:space-y-4 text-sm">
          <div class="mb-4 md:mb-0 md:flex md:space-x-4 space-y-4 md:space-y-0">
            <InputWithLabel id="search" type="text" placeholder="Buscar" label="Razão Social" />
            <SelectWithLabel :items="contract" label="Contrato/ Modelo" />
            <SelectWithLabel :items="providerType" label="Tipo de Prestador" />
            <SelectWithLabel :items="category" label="Categoria" />
            <SelectWithLabel :items="status" label="Status" />
          </div>

          <ButtonPrimary class="self-end">
            Filtrar prestadores
          </ButtonPrimary>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { FunnelIcon } from '@heroicons/vue/20/solid'

const contract = [
  { id: 'uuid', value: '', name: 'Selecione um tipo de contrato' },
  { id: '1', value: 'ADESAO', name: 'Adesão' },
  { id: '2', value: 'CATEGORIA_FUNCIONAL_CBO', name: 'Categoria Funcional CBO' },
  { id: '3', value: 'COMPULSORIO_POR_ENCAMPACAO', name: 'Compulsório Por Encampação' },
  { id: '4', value: 'COMPULSORIO_TITULARES', name: 'Compulsório Titulares' },
  { id: '5', value: 'COMPULSORIO_TITULARES_DEPENDENTES', name: 'Compulsório Titulares Dependentes' },
  { id: '6', value: 'CAPTADO', name: 'Captado' },
]

const providerType = [
  { id: 'uuid', value: '', name: 'Selecione um tipo de prestador' },
  { id: 1, value: 'Consultório', name: 'Consultório' },
  { id: 2, value: 'Pronto Socorro', name: 'Pronto Socorro' },
  { id: 3, value: 'Laboratório', name: 'Laboratório' },
  { id: 4, value: 'Outros', name: 'Outros' },
  { id: 5, value: 'Hospital', name: 'Hospital' },
  { id: 6, value: 'Clínica Odontológica', name: 'Clínica Odontológica' },
  { id: 6, value: 'Farmácia', name: 'Farmácia' },
  { id: 6, value: 'Teleconsulta', name: 'Teleconsulta' },
  { id: 6, value: 'Pronto Atendimento Digital', name: 'Pronto Atendimento Digital' },
  { id: 6, value: 'Avaliação Médica', name: 'Avaliação Médica' },
]

const category = [
  { id: 'uuid', value: '', name: 'Selecione uma categoria' },
  { id: 1, value: 'Vitta Network', name: 'Vitta Network' },
  { id: 2, value: 'Referenciado', name: 'Referenciado' },
  { id: 3, value: 'Credenciado', name: 'Credenciado' },
  { id: 4, value: 'Contratado', name: 'Contratado' },
  { id: 5, value: 'Horista', name: 'Horista' },
  { id: 6, value: 'Agendamento', name: 'Agendamento' },
  { id: 6, value: 'Médico Pessoal', name: 'Médico Pessoal' },
]

const status = [
  { id: 'uuid', value: '', name: 'Selecione um status' },
  { id: 1, value: 'ATIVADO', name: 'Ativado' },
  { id: 2, value: 'DESATIVADO', name: 'Desativado' },
  { id: 3, value: 'VALIDAR', name: 'Validar' },
  { id: 4, value: 'EM_ANALISE', name: 'Em Análise' },
]
</script>
