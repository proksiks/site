<template>
  <div class="post">
    <nuxt-link class="articles-link" :to="`/articles/${post.id}`" @click="checkArticle(post.id)">
      {{ post.title }}
    </nuxt-link>
    <p>{{ post.body }}</p>
    <nuxt-link class="articles-link articles-link-author" :to="`/authors/${post.userId}`">
      {{ post.author }}
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
  import type { Post } from "./model";

  const props = defineProps<{
    post: Post;
  }>();
</script>
