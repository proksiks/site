<template>
  <div class="page">
    <ul class="articles">
      <li class="articles-item" v-for="author in data" :key="author.id">
        <nuxt-link class="articles-link" :to="`/articles/${author.id}`">{{ author }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  const api = "https://jsonplaceholder.typicode.com";

  const { data, status, error, refresh, clear } = await useAsyncData("users", () => $fetch(`${api}/users`));
</script>
