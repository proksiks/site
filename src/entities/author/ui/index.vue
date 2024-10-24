<template>
  <div class="author">
    <nuxt-link class="author-link" :to="`/authors/${id}`">
      {{ name }}
    </nuxt-link>

    <div class="author-body">
      <p class="author-text">{{ body }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
  defineProps<Author>();
</script>
<style lang="scss" scoped></style>
