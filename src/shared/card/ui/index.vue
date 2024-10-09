<template>
  <div class="card">
    <nuxt-link class="card-link" :to="`/articles/${post.id}`">
      <div class="card-picture" v-if="false">
        <img
          class="card-image"
          :src="`https://loremflickr.com/500/500?random=${post.id}`"
          width="100%"
          alt="image"
          loading="lazy"
        />
      </div>
      <skeleton-ui width="100%" height="150px" v-else />
      <div class="card-title">
        {{ post.title }}
      </div>
      <div class="card-body">
        <p class="card-text">{{ post.body }}</p>
      </div>
      <span class="card-text">
        {{ post.author }}
      </span>
      <span class="card-prompt" v-if="post.checked">Прочитано</span>
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
  import type { Card } from "../model/index";
  defineProps<Card>();
</script>

<style lang="scss">
  @import "index.scss";
</style>
