<template>
  <div>
    <teleport to="body">
      <nav class="pagination-nav">
        <button-ui class="pagination-nav-button pagination-nav-prev" :to="`/articles/${Number(id) - 1}`" v-if="Number(id) > 1">
          <template #icon>
            <icon name="icon:prev" />
          </template>
        </button-ui>
        <button-ui class="pagination-nav-button pagination-nav-next" :to="`/articles/${Number(id) + 1}`">
          <template #icon>
            <icon name="icon:next" />
          </template>
        </button-ui>
      </nav>
    </teleport>
    <h1 class="page-title">Статья</h1>
    <div class="page-content" v-if="article">
      <img
        class="page-intro"
        :src="article.image"
        width="1366"
        height="768"
        alt="image"
        loading="lazy"
        v-if="article.image"
      />
      <skeleton-ui class="page-intro" v-else width="100%" height="15.625rem" />

      <nuxt-link :to="`/authors/${article?.id}`" class="page-author">
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
      <skeleton-ui class="page-intro" width="100%" height="15.625rem" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const watchedArticles = localStorage.getItem("checkedArticlesId");
  const storageArticle = sessionStorage.getItem("article");
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
    sessionStorage.setItem("article", JSON.stringify(post));
  }

  onMounted(() => {
    if (!watchedArticles) {
      localStorage.setItem("checkedArticlesId", JSON.stringify([id]));
    } else {
      let data = JSON.parse(watchedArticles);
      data.push(id);
      localStorage.setItem("checkedArticlesId", JSON.stringify([...new Set(data)]));
    }
  });

  if (article.value === undefined) {
    if (storageArticle !== null) {
      article.value = JSON.parse(storageArticle);
    } else {
      // console.log("if (article.value === undefined)");
    }
  }

  //if (storeArticle === "undefined" || null) {
  //  const [{ data: fetchedPosts }] = await Promise.all([useFetch(`${api}/posts?id=${id}`, { key: "post" })]);
  //  console.log(fetchedPosts.value, "post");
  //}

  definePageMeta({
    pageTransition: {
      name: "slide-right",
      mode: "out-in",
    },
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
  .page-intro {
    display: block;
    max-width: 82.5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.5rem;
    width: 100%;
    object-fit: cover;
    //aspect-ratio: 16 / 9;
  }
  .page-author {
    display: block;
    margin-top: 0.625rem;
  }
  .pagination-nav {
    position: fixed;
    right: 0;
    top: 0.625rem;
    z-index: 1;
    //z-index: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0 0.25rem;
    @media (max-width: 480px) {
      left: 50%;
      transform: translateX(-50%);
      top: auto;
      bottom: 4.125rem;
      justify-content: space-between;
      width: 100%;
      z-index: 4;
    }
  }
  .pagination-nav-button {
    padding: 0.5rem;
  }
</style>
