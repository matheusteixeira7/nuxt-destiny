<template>
  <div class="flex min-h-screen flex-1 justify-center">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <VittaLogo class="h-7 w-auto" />
          <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Entre com sua conta</h2>
        </div>

        <div class="mt-10">
          <div>
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="cpf" class="block text-sm font-medium leading-6 text-gray-900">CPF</label>
                <div class="mt-2">
                  <input v-model="cpfField" id="cpf" name="cpf" type="text" autocomplete="cpf" maxlength="14"
                    @blur="handleCpfBlur" :required="true"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  <span v-if="invalidCpf" class="text-red-500 text-sm">CPF inválido</span>
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                <div class="mt-2">
                  <input v-model="passwordField" id="password" name="password" type="password"
                    @blur="handlePasswordInputBlur" autocomplete="current-password" :required="true"
                    class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  <div v-if="passwordErrors.length >= 1">
                    <span class="text-red-500 text-sm">Sua senha precisa conter:</span>
                    <ul>
                      <li v-for=" error  in  passwordErrors " class="text-red-500 text-sm">{{ error }}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-700">Lembrar-me</label>
                </div>

                <div class="text-sm leading-6">
                  <a href="#" class="font-semibold text-primary hover:text-primary-400">Esqueceu sua senha?</a>
                </div>
              </div>

              <div>
                <button type="submit" @click.prevent="handleSubmit"
                  class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <img src="/img/hero.png" alt="Pattern" class="relative hidden w-0 flex-1 lg:block max-w-7xl object-contain" />
  </div>
</template>

<script setup lang="ts">
import { cpf } from 'cpf-cnpj-validator';

definePageMeta({
  layout: false,
})

const cpfField = ref<string>('')
const passwordField = ref<string>('')
const invalidCpf = ref<boolean>(false)
const passwordErrors = ref<string[]>([])
const showPasswordErrors = ref<boolean>(false)

watch(cpfField, (value) => {
  if (value) {
    cpfField.value = value.replace(/\D/g, "") // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, "$1.$2") // Insere um ponto após os primeiros 3 dígitos
      .replace(/(\d{3})(\d)/, "$1.$2") // Insere um ponto após os próximos 3 dígitos
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2") // Insere um traço antes dos últimos 2 dígitos
  }
})

watch(cpfField, (value) => {
  if (value.length >= 14) {
    handleCpfBlur()
  } else {
    invalidCpf.value = false
  }
})

watch(passwordField, () => {
  handlePasswordShowErrors()
})

const handlePasswordShowErrors = () => {
  passwordErrors.value = []

  if (passwordField.value.length < 8 && showPasswordErrors.value) {
    passwordErrors.value.push('8 caracteres')
  }

  if (!RegExp(/[a-z]/).exec(passwordField.value) && showPasswordErrors.value) {
    passwordErrors.value.push('1 letra minúscula')
  }

  if (!RegExp(/[A-Z]/).exec(passwordField.value) && showPasswordErrors.value) {
    passwordErrors.value.push('1 letra maiúscula')
  }

  if (!/\d/.test(passwordField.value) && showPasswordErrors.value) {
    passwordErrors.value.push('1 número');
  }

  if (!RegExp(/[^a-zA-Z0-9]/).exec(passwordField.value) && showPasswordErrors.value) {
    passwordErrors.value.push('1 caractere especial')
  }
}

const handlePasswordInputBlur = () => {
  showPasswordErrors.value = true
  handlePasswordShowErrors()
}

const handleCpfBlur = () => {
  if (cpfField.value) {
    if (!cpf.isValid(cpfField.value)) {
      invalidCpf.value = true
    } else {
      invalidCpf.value = false
    }
  }
}

const handleSubmit = (event: Event) => {
  showPasswordErrors.value = true

  if (!cpfField.value) {
    invalidCpf.value = true
  }
}
</script>
