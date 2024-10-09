<template>
  <div class="skeleton" :width="width" :style="{ width: width, height: height }">
    <div class="skeleton-shadow"></div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    width?: string;
    height?: string;
  }>();
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
