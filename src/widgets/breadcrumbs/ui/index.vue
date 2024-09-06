<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs-list" v-if="breadcrumbs">
      <li class="breadcrumbs-item" v-for="breadcrumb in breadcrumbs" :key="breadcrumb.href">
        <nuxt-link class="breadcrumbs-link" :to="breadcrumb.href" v-if="breadcrumb.href">
          {{ breadcrumb.title }}
        </nuxt-link>
        <span class="breadcrumbs-link" v-else>{{ breadcrumb.title }}</span>
      </li>
    </ul>
    <span class="breadcrumbs-error" v-else>Данные отсутствуют</span>
  </nav>
</template>

<script lang="ts" setup>
  import type Breadcrumb from "../model/index";
  defineProps<{
    breadcrumbs: Breadcrumb[];
  }>();
</script>

<style scoped>
  @import "./index.scss";
</style>
