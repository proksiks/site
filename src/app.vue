<template>
  <nuxt-pwa-manifest v-if="isCurrentBranch" />
  <lazy-cursor-ui v-if="showCursor" />
  <lazy-canvas-background-ui v-if="showBackground" />
  <lazy-loader-ui v-if="showLoader" />
  <transition name="page-preloader">
    <loading-ui v-if="loading" />
  </transition>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const isCurrentBranch = computed(() => runtimeConfig.public.CURRENT_BRANCH === "prod");
const showBackground = ref(false);
const showCursor = ref(false);
const showLoader = ref(false);
const loading = ref(false);

onMounted(() => {
  showBackground.value = true;
  showCursor.value = true;
  showLoader.value = true;
})

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<style lang="scss">
.page-preloader-enter-active,
.page-preloader-leave-active {
  transition: opacity 0.15s ease;
}

.page-preloader-enter,
.page-preloader-leave-to {
  opacity: 0;
}
</style>