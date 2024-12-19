<template>
  <div class="page">
    <h1 class="page-title">Список авторов</h1>
    <ul class="authors" v-if="myPost">
      <li class="authors-item" v-for="post in myPost" :key="post.id">
        <lazy-card-ui class="authors-card" :post="post" />
      </li>
    </ul>
    <div v-else>
      <skeleton-ui class="page-intro" width="100%" height="250px" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const myPost = [
    {
      id: '0',
      to: "/authors/0",
      image: "/images/photos/cover.jpg",
      title: "Разработчик",
      body: "С 14 лет увлекаюсь программированием",
      userId: 0,
      author: "Хлюпнев Владимир",
    },
  ];
</script>

<style lang="scss" scoped>
  @use "ui/index.scss" as *;
</style>
