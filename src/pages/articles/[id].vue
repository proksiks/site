<template>
  <div>
    <nuxt-link class="back" to="/articles">Назад</nuxt-link>
    <div class="page-content" v-if="article">
      <nuxt-link :to="`/authors/${article?.id}`">
        {{ article?.name }}
      </nuxt-link>
      <h1>
        {{ article?.title }}
      </h1>
      <p>
        {{ article?.body }}
      </p>
    </div>
    <div v-else>
      <skeleton-ui />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const watchedArticles = localStorage.getItem("checkedArticlesId");
  const storeArticle = sessionStorage.getItem("article");

  const { id } = useRoute().params;
  const api = ref(`https://jsonplaceholder.typicode.com/posts?id=${id}`);

  const { data: posts } = useNuxtData("posts");
  const { data: users } = useNuxtData("users");
  const article = ref();

  if (posts.value) {
    const post = posts.value?.data.find((post: any) => Number(post.id) === Number(id));
    if (users.value?.data) {
      for (const user of users.value?.data) {
        if (Number(user.id) === Number(post.userId)) {
          post.name = user.name;
          break;
        }
      }
    }
    article.value = post;
  }

  sessionStorage.setItem("article", JSON.stringify(article.value));

  onMounted(() => {
    if (!watchedArticles) {
      localStorage.setItem("checkedArticlesId", JSON.stringify([id]));
    } else {
      let data = JSON.parse(watchedArticles);
      data.push(id);
      localStorage.setItem("checkedArticlesId", JSON.stringify([...new Set(data)]));
    }
  });

  //if (storeArticle === "undefined" || null) {
  //  const [{ data: fetchedPosts }] = await Promise.all([useFetch(`${api}/posts?id=${id}`, { key: "post" })]);
  //  console.log(fetchedPosts.value, "post");
  //}
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
