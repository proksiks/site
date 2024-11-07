<template>
  <div class="page">
    <h1 class="page-title">Список статей</h1>
    <ul class="articles" v-if="articles">
      <li class="articles-item" v-for="(post, index) in articles" :key="post.id" :class="{ checked: post.checked }">
        <!--@mouseout="mouseMoveEvent($event, index)"-->
        <lazy-card-ui class="articles-card" :post="post" v-if="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  //import { useEventListener } from "@vueuse/core";
  import type { Body } from "./model";

  const myPost = {
    id: 0,
    image: "/images/photos/cover.jpg",
    title: "Разработчик",
    body: "С 14 лет занимаюсь программированием",
    userId: 0,
    author: "Хлюпнев Владимир",
  };

  const eachNElement = ref(7);
  const eachNElements = ref<number[]>([]);
  const nuxt = useNuxtApp();
  const getCheckedArticlesFromStorage = localStorage.getItem("checkedArticlesId");

  // Туду переделать в звёздные войны
  // https://swapi.dev/documentation
  // https://swapi.dev/api/
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
        if (article.id === 1) {
          article.title = myPost.title;
          article.body = myPost.body;
          article.image = myPost.image;
          article.userId = myPost.userId;
          article.author = myPost.author;
          article.id = myPost.id;
        }
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

  //function mouseDownEvent(e: MouseEvent) {
  //  console.log(123);
  //}
  //function mouseMoveEvent(e: MouseEvent, index: number) {
  //  for (let i = 0; i < articles.value.length; i *= eachNElement.value)
  //    eachNElements.value.push(articles.value[eachNElement.value].id);
  //}
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
    @media (max-width: 350px) {
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
    display: flex;
    flex-direction: column;
    z-index: 23;
  }
  .articles-card {
    flex: 1;
  }
</style>
