<template>
  <div class="page">
    <h1 class="page-title">Список статей</h1>
    <ul class="articles" v-if="articles">
      <li class="articles-item" v-for="post in articles" :key="post.id" :class="{ checked: post.checked }">
        <lazy-card-ui class="articles-card" :post="post" v-if="post" />
      </li>
    </ul>
    <div v-else>
      <skeleton-ui class="page-intro" width="100%" height="250px" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Body } from "./model";
  const getCheckedArticlesFromStorage = localStorage.getItem("checkedArticlesId");

  // TODO вынести в env
  // OR https://jsonplaceholder.org
  const postsApi = "https://jsonplaceholder.typicode.com/posts?_limit=20";
  const usersApi = "https://jsonplaceholder.typicode.com/users?_limit=20";

  const [{ data: posts }, { data: users }] = await Promise.all([
    useCustomFetch(postsApi),
    useCustomFetch(usersApi),
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
          for (const user of users.value?.data as Body[]) {
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
