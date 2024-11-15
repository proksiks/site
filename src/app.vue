<template>
  <nuxt-pwa-manifest v-if="useRuntimeConfig().public.CURRENT_BRANCH === 'prod'" />
  <lazy-cursor-ui />
  <lazy-canvas-background-ui />
  <nuxt-layout>
    <loader-ui />
    <nuxt-page />
  </nuxt-layout>
</template>
