<template>
  <div class="wrapper">
    <navigation-ui></navigation-ui>
    <main class="main">
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
  useSeoMeta({
    title: "Site",
    ogTitle: "Site",
    description: "site",
    ogDescription: "site",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  });
</script>

<style lang="scss"></style>
