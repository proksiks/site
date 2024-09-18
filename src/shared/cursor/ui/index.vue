<template>
  <div class="custom-cursor" ref="cursor"></div>
</template>

<script lang="ts" setup>
  import { usePointer, useWindowSize } from "@vueuse/core";
  import { reactive } from "vue";

  const { $gsap: gsap } = useNuxtApp();

  const pointer = reactive(usePointer());
  const cursor = ref();

  const { width } = useWindowSize();
  const centerX = width.value / 2;
  const scale = computed(() => {
    if (centerX / pointer.x < 1) {
      return centerX / pointer.x;
    }
    if (width.value / pointer.x > 1) {
      const x = Math.abs(centerX - pointer.x) + centerX;
      return centerX / x;
    }
  });

  watch(pointer, () => {
    gsap.set(cursor.value, { xPercent: -50, yPercent: -50 });
    let xTo = gsap.quickTo(cursor.value, "x", { duration: 1, ease: "power3" });
    let yTo = gsap.quickTo(cursor.value, "y", { duration: 1, ease: "power3" });
    xTo(pointer.x);
    yTo(pointer.y);
    gsap.to(cursor.value, { scale: scale.value });
  });
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
