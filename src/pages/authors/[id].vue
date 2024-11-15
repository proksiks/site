<template>
  <div class="page">
    <h1 class="page-title">Автор</h1>

    <nuxt-link class="back" to="/articles">Назад</nuxt-link>

    <div class="page-content">
      <skeleton-ui class="page-intro" width="100%" height="15.625rem" />
    </div>
    <!--<ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link class="articles-link" :to="`/articles/${post.id}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>-->
  </div>
</template>

<script lang="ts" setup>
  //const route = useRoute();
  //const api = "https://jsonplaceholder.typicode.com";

  //const { data: posts } = await useAsyncData("posts", () => $fetch(`${api}/posts?userId=${route.params.id}`));
</script>

<style scoped>
  .page-intro {
    margin-top: 1.25rem;
  }
</style>
