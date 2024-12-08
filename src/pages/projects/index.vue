<template>
  <div class="page">
    <h1 class="page-title">Проекты ~ {{ projects.list.length }}</h1>
    <ul class="projects">
      <li
        class="projects-item"
        v-for="project in projects.list"
        :key="project.link"
      >
        <a class="projects-link" :href="project.link" target="_blank">
          <nuxt-picture
            v-if="project.img"
            :src="project.img"
            class="projects-image"
            width="420"
            height="190"
            fit="cover"
            format="avif,webp"
            sizes="100vw md:420px"
            loading="lazy"
            :img-attrs="{ alt: '', fetchpriority: 'high' }"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import projects from "~/app/content/Projects.json";
</script>

<style lang="scss" scoped>
@use "ui/index.scss" as *;
</style>
