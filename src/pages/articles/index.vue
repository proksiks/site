<template>
  <div class="page">
    <h1 class="page-title">Список статей</h1>
    <ul class="articles" v-if="posts">
      <li class="articles-item" v-for="post in checkedArticles" :key="post.id" :class="{ checked: post.checked }">
        <!--<nuxt-link class="articles-link" :to="`/articles/${post.id}`" @click="checkArticle(post.id)">-->
        <nuxt-link class="articles-link" :to="`/articles/${post.id}`" @click="checkArticle(post.id)">
          {{ post?.title }}
        </nuxt-link>
        <p>{{ post.body }}</p>
        <nuxt-link class="articles-link articles-link-author" :to="`/authors/${post.userId}`">
          {{ post.author }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import type { Body } from "./model";

  const nuxt = useNuxtApp();
  const getCheckedArticlesFromStorage = localStorage.getItem("checkedArticlesId");
  const checkedArticlesId = ref<number[]>([]);
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
    useFetch(`${api}/posts`, { ...options, key: "posts" }),
    useFetch(`${api}/users`, { ...options, key: "users" }),
  ]);

  const checkArticle = (id: number) => {
    if (getCheckedArticlesFromStorage) {
      checkedArticlesId.value = JSON.parse(getCheckedArticlesFromStorage);
    }
    if (!checkedArticlesId.value.includes(id)) {
      checkedArticlesId.value.push(id);
      localStorage.setItem("checkedArticlesId", JSON.stringify(checkedArticlesId.value));
    }
  };

  const checkedArticles = computed(() => {
    let result = [];
    if (posts.value) {
      
      for (const article of posts.value?.data as Body[]) {
        // Не очень хороший способ, можно лучше
        if (getCheckedArticlesFromStorage?.includes(String(article.id))) {
          article.checked = true;
          result.push(article);
        } else {
          article.checked = false;
          result.push(article);
        }
        for (const user of users.value?.data as Body[]) {
          if (user.id === article.userId) {
            article.author = user.name;
          }
        }
      }
    }
    return result;
  });
</script>

<style lang="scss" scoped>
  .page {
    padding: 10px;
    @media (max-width: 480px) {
      padding-bottom: 140px;
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
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .articles-item {
    display: flex;
    flex-direction: column;
    background-color: var(--dark-2);
    border-radius: 0.3125rem;
    padding: 0.625rem;
    &.checked {
      background-color: var(--cyanide-dark);
    }
  }
  .articles-link {
    padding: 0.3125rem;
    border-radius: 0.25rem;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease;
    color: var(--light);
    &:hover {
      background-color: var(--dark-blue);
    }
    &:active {
      background-color: var(--dark);
    }
    &-author {
      margin-top: auto;
    }
  }

  .page-title {
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
</style>
