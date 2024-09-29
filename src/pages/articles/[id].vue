<template>
  <div>
    <nuxt-link class="back" to="/articles">Назад</nuxt-link>
    <div class="page-content">
      <nuxt-link :to="`/authors/${getActiveArticle?.id}`">
        {{ getActiveArticle?.name }}
      </nuxt-link>
      <h1>
        {{ getActiveArticle?.title }}
      </h1>
      <p>
        {{ getActiveArticle?.body }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const api = "https://jsonplaceholder.typicode.com";
  const { id } = useRoute().params;
  const { data: posts, data: users } = useNuxtData("posts");
  const getActiveArticle = computed(() => {
    if (posts.value) {
      return posts.value.data.find((post: any) => Number(post.id) === Number(id));
    }
  });
</script>

<style lang="scss" scoped>
  .back {
    display: block;
    margin: 1rem 0;
  }
  .page-content {
    background-color: var(--dark);
    padding: 0.625rem;
    border-radius: 0.5rem;
  }
</style>
