<template>
  <nuxt-pwa-manifest v-if="isCurrentBranch" />
  <lazy-cursor-ui v-if="showCursor" />
  <lazy-canvas-background-ui v-if="showBackground" />
  <lazy-loader-ui v-if="showLoader" />
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup> 
const runtimeConfig = useRuntimeConfig();
const isCurrentBranch = computed(() => runtimeConfig.public.CURRENT_BRANCH === "prod");
const showBackground = ref(false);
const showCursor = ref(false);
const showLoader = ref(false);

onMounted(() => {
  showBackground.value = true;
  showCursor.value = true;
  showLoader.value = true;
})
</script>
