<template>
  <div class="card">
    <nuxt-link class="card-link" :to="`/articles/${post.id}`">
      <div class="card-picture">
        <NuxtPicture
          class="card-image"
          format="avif,webp"
          placeholder
          loading="lazy"
          width="260"
          height="260"
          sizes="xs:160px sm:260px"
          fit="cover"
          :img-attrs="{ alt: '' }"
          :src="post.image"
          v-if="post.image"
        />
        <skeleton-ui class="card-image" width="100%" height="100%" v-else />
      </div>
      <div class="card-title">{{ post.title }}</div>
    </nuxt-link>
    <div class="card-body">
      <p class="card-text">{{ post.body }}</p>
    </div>
    <nuxt-link v-if="post.author" class="card-author" :to="`/authors/${post.userId}`">
      {{ post.author }}
    </nuxt-link>
    <span class="card-prompt" v-if="post.checked">Прочитано</span>
  </div>
</template>

<script lang="ts" setup>
  import type { Card } from "../model/index";
  defineProps<Card>();
</script>

<style lang="scss" scoped>
  @use "index.scss" as *;
</style>
