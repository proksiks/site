<template>
  <div class="custom-cursor" ref="cursor" :style="{ left: getXCoordinates, top: getYCoordinates }"></div>
</template>

<script lang="ts" setup>
  import { usePointer } from "@vueuse/core";
  import { reactive } from "vue";

  const pointer = reactive(usePointer());
  const cursor = ref();

  const getXCoordinates = computed(() => {
    return pointer.x - 100 + "px";
  });
  const getYCoordinates = computed(() => {
    return pointer.y - 100 + "px";
  });
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
