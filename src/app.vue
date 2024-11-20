<template>
  <nuxt-pwa-manifest v-if="isCurrentBranch" />
  <lazy-cursor-ui />
  <lazy-canvas-background-ui />
  <nuxt-layout>
    <loader-ui />
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup> 
const runtimeConfig = useRuntimeConfig();
const isCurrentBranch = computed(() => runtimeConfig.public.CURRENT_BRANCH === "prod");
</script>
