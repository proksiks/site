<template>
  <div class="wrapper">
    <navigation-ui></navigation-ui>
    <main style="background-color: black; padding: 1.25rem; flex: 1;">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  useHead({
    meta: [{ name: "description", content: "My amazing site." }],
    link: [
      //{ rel: "icon", type: "image/x-icon", href: "/my-pet-projects/favicon.ico" },
      { rel: "stylesheet", href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" },
    ],
  });
</script>

<style lang="scss"></style>
