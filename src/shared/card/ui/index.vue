<template>
  <div class="card">
    <nuxt-link class="card-link" :to="`/articles/${id}`">
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
          :img-attrs="{ alt: '', fetchpriority: 'high' }"
          :src="image"
          v-if="image"
        />
        <skeleton-ui class="card-image" width="100%" height="100%" v-else />
      </div>
      <div class="card-title" v-if="title">{{ title }}</div>
    </nuxt-link>
    <div class="card-body" v-if="body">
      <p class="card-text">{{ body }}</p>
    </div>
    <nuxt-link v-if="author" class="card-author" :to="`/authors/${userId}`">
      {{ author }}
    </nuxt-link>
    <span class="card-prompt" v-if="checked">Прочитано</span>
  </div>
</template>

<script lang="ts" setup>
  import type { Card } from "../model/index";
  defineProps<Card>();
</script>

<style lang="scss" scoped>
  @use "index.scss" as *;
</style>
