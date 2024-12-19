<template>
  <div class="wrapper">
    <lazy-navigation-ui />
    <main class="main">
      <div class="screen">
        <div class="screen-inner">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import Lenis from "@studio-freight/lenis";
  import { useWindowSize } from "@vueuse/core";
  const { width } = useWindowSize();

  onNuxtReady(() => {
    if (width.value > 1024) {
      const lenis = new Lenis({
        duration: 1.2,
        lerp: 0.05,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  });
</script>
