<template>
  <canvas class="canvas" ref="appCanvas" resize></canvas>
</template>

<script lang="ts" setup>
  import paper from "paper";
  import { useWindowSize } from "@vueuse/core";

  const { width, height } = useWindowSize();

  const appCanvas = ref();
  const circle_diameter = ref(20);

  function startAnimatedBackground() {
    paper.setup(appCanvas.value);

    let count = 50;

    let path = new paper.Path.Circle({
      center: [0, 0],
      radius: 5,
      fillColor: "white",
      strokeColor: "yellow",
    });

    let symbol = new paper.SymbolDefinition(path);

    for (let index = 0; index < count; index++) {
      let center = paper.Point.random();
      let position = { x: center.x * width.value, y: center.y * height.value };
      let placed = symbol.place(position);

      placed.scale(index / count + 0.1);
      placed.data.vector = new paper.Point({
        angle: Math.random() * 360,
        length: ((index / count) * Math.random()) / 5,
      });
    }

    let vector = new paper.Point({
      angle: 45,
      length: 0,
    });
  }
  onMounted(() => {
    startAnimatedBackground();
  });
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
