<template>
  <div class="page">
    <h1 class="page-title">Автор</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link class="articles-link" :to="`/articles/${post.id}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const api = "https://jsonplaceholder.typicode.com";

  const { data: posts } = await useAsyncData("posts", () => $fetch(`${api}/posts?userId=${route.params.id}`));
</script>
