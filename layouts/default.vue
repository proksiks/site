<template>
  <div class="wrapper">
    <navigation-ui />
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
  useHead({
    meta: [{ name: "description", content: "Site." }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/site/favicon.ico" },
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
