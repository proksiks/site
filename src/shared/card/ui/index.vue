<template>
  <div class="card" v-if="post.id">
    <nuxt-link class="card-link" :to="`${post.to}`" :aria-label="post.title" :target="post?.target">
      <div class="card-picture">
        <nuxt-picture
          class="card-image"
          format="avif,webp"
          placeholder
          loading="lazy"
          :img-attrs="{ alt: '', fetchpriority: 'high' }"
          :src="post.image"
          v-if="post.image"
        />
        <skeleton-ui class="card-image" width="100%" height="100%" v-else />
      </div>
    </nuxt-link>
    <nuxt-link class="card-title" v-if="post.title" :to="`${post.to}`">{{ post.title }}</nuxt-link>
    <div class="card-body" v-if="post.body">
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
