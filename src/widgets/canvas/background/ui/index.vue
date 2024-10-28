<template>
  <canvas class="canvas" ref="appCanvas" resize></canvas>
</template>

<script lang="ts" setup>
  import paper from "paper";
  import { useWindowSize, usePointer } from "@vueuse/core";

  const { width, height } = useWindowSize();
  const pointer = reactive(usePointer());

  const appCanvas = ref();
  const count = ref(200);

  if(width.value < 480) {
    count.value = 100
  }

  function startAnimatedBackground() {
    paper.setup(appCanvas.value);

    let path = new paper.Path.Circle({
      center: [0, 0],
      radius: 5,
      fillColor: "rgba(255,255,255, 0.5)",
    });

    let symbol = new paper.SymbolDefinition(path);

    for (let index = 0; index < count.value; index++) {
      let center = paper.Point.random();
      let position = { x: center.x * width.value, y: center.y * height.value };
      let placed = symbol.place(position);

      placed.scale(index / count.value + 0.1);
      placed.data.vector = new paper.Point({
        angle: Math.random() * 360,
        length: ((index / count.value) * Math.random()) / 5,
      });
    }

    let vector = new paper.Point({
      angle: 45,
      length: 0,
    });

    let mouseVector = vector.clone();

    window.addEventListener("mousemove", (e) => {
      mouseVector.x = width.value / 2 - pointer.x;
      mouseVector.y = height.value / 2 - pointer.y;
    });
    document.addEventListener("click", (e) => {
      mouseVector.x = width.value / 2 - e.clientX;
      mouseVector.y = height.value / 2 - e.clientY;
    });

    function keepInView(item: { position: paper.Point; bounds: paper.Rectangle }) {
      var position = item.position;
      var viewBounds = paper.view.bounds;
      if (position.isInside(viewBounds)) return;
      var itemBounds = item.bounds;
      if (position.x > viewBounds.width + 5) {
        position.x = -item.bounds.width;
      }

      if (position.x < -itemBounds.width - 5) {
        position.x = viewBounds.width;
      }

      if (position.y > viewBounds.height + 5) {
        position.y = -itemBounds.height;
      }

      if (position.y < -itemBounds.height - 5) {
        position.y = viewBounds.height;
      }
    }

    paper.view.onFrame = function () {
      vector.x = vector.x + (mouseVector.x - vector.x) / 30;
      vector.y = vector.y + (mouseVector.y - vector.y) / 30;

      for (let index = 0; index < count.value; index++) {
        let item = paper.project.activeLayer.children[index];
        let size = item.bounds.size;
        let moveX = ((vector.length / 50) * size.width) / 50;
        let moveY = ((vector.length / 50) * size.height) / 50;
        item.position.x += vector.normalize(moveX).x + item.data.vector.x;
        item.position.y += vector.normalize(moveY).y + item.data.vector.y;
        keepInView(item);
      }
    };
  }

  onMounted(() => { startAnimatedBackground() });
</script>

<style lang="scss" scoped>
  @use "index.scss" as *;
</style>
