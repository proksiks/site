<template>
  <div class="skeleton">
    <div class="skeleton-holder" :style="{ width: width, height: height }">
      <div class="skeleton-shadow"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    width?: string;
    height?: string;
  }>();
</script>

<style lang="scss" scoped>
  @use "index.scss" as *;
</style>
