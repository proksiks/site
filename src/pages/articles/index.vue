<template>
  <div class="page">
    <h1 class="page-title">Список статей</h1>
    <ul class="articles" v-if="articles">
      <li class="articles-item" v-for="post in articles" :key="post.id" :class="{ checked: post.checked }">
        <card-ui class="articles-card" :post="post" v-if="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import type { Body } from "./model";

  const nuxt = useNuxtApp();
  const getCheckedArticlesFromStorage = localStorage.getItem("checkedArticlesId");
  // TODO вынести в env
  const api = "https://jsonplaceholder.typicode.com";
  const options = {
    headers: { Accept: "application/json" },
    transform(input: Body[]) {
      return { data: input, fetchedAt: new Date() };
    },
    getCachedData: cachedData,
  };

  function cachedData(key: string) {
    const data = nuxt.payload.data[key] || nuxt.static.data[key];
    if (!data) return;

    const expirationDate = new Date(data.fetchedAt);
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
    const isExpired = expirationDate.getTime() < Date.now();
    if (isExpired) return;

    return data;
  }

  const [{ data: posts }, { data: users }] = await Promise.all([
    useFetch(`${api}/posts?_limit=20`, { ...options, key: "posts" }),
    useFetch(`${api}/users?_limit=20`, { ...options, key: "users" }),
  ]);

  const articles = computed(() => {
    let result = [];
    if (posts.value) {
      for (const article of posts.value?.data as Body[]) {
        if (getCheckedArticlesFromStorage) {
          for (const checked of JSON.parse(getCheckedArticlesFromStorage)) {
            if (Number(checked) === Number(article.id)) {
              article.checked = true;
              break;
            }
          }
        }
        if (users.value?.data) {
          for (const user of users.value?.data) {
            if (Number(user.id) === Number(article.userId)) {
              article.author = user.name;
              break;
            }
          }
        }
        result.push(article);
      }
    }
    return result;
  });
</script>

<style lang="scss" scoped>
  .page {
    padding: 1.25rem;
    @media (max-width: 480px) {
      padding: 0.625rem;
      padding-bottom: 8.75rem;
    }
  }
  .articles {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    @media (max-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
      gap: 0.625rem;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 360px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .page-title {
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  .articles-item {
    position: relative;
  }
</style>
