<template>
  <canvas class="canvas" ref="appCanvas" resize></canvas>
</template>

<script lang="ts" setup>
  import paper from "paper";
  import { useWindowSize } from "@vueuse/core";
  import { view } from "paper/dist/paper-core";

  const { width, height } = useWindowSize();

  const appCanvas = ref();
  const count = ref(100);

  function startAnimatedBackground() {
    paper.setup(appCanvas.value);

    let path = new paper.Path.Circle({
      center: [0, 0],
      radius: 5,
      fillColor: "white",
      strokeColor: "yellow",
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

    paper.view.onMouseMove = function (event: any) {
      mouseVector.x = paper.view.center.x - event.point.x;
      mouseVector.y = paper.view.center.y - event.point.y;
      return false;
    };

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

      // как то воркает
      for (let index = 0; index < count.value; index++) {
        let item = paper.project.activeLayer.children[index];
        let vector = item.data.vector;
        let position = item.position;
        position.x = position.x + vector.x;
        position.y = position.y + vector.y;
        keepInView(item);
      }
    };
  }

  onMounted(() => {
    startAnimatedBackground();
  });
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
