<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'html-class'
  },
  bodyAttrs: {
    class: 'body-class'
  }
})
</script>

<style>
.html-class {
  height: 100%;
  background-color: white;
}

.body-class {
  height: 100%;
}
</style>
