<template>
  <nuxt-link class="sidebar-button" :to="href" v-if="href">
    <span class="sidebar-button-content">
      <i class="sidebar-button-icon bx" :class="classIcon"></i>
      <span class="sidebar-name">
        <span class="sidebar-name-text">{{ title }}</span>
        <span class="sidebar-name-text sidebar-name-text-dublicate">{{ title }}</span>
      </span>
    </span>
  </nuxt-link>
  <a class="sidebar-button" :to="href" v-else-if="href && target">
    <span class="sidebar-button-content">
      <i class="sidebar-button-icon bx" :class="classIcon"></i>
      <span class="sidebar-name">
        <span class="sidebar-name-text">{{ title }}</span>
        <span class="sidebar-name-text sidebar-name-text-dublicate">{{ title }}</span>
      </span>
    </span>
  </a>
  <button v-else>
    <span class="sidebar-button-content">
      <i class="sidebar-button-icon bx" :class="classIcon"></i>
      <span class="sidebar-name">
        <span class="sidebar-name-text">{{ title }}</span>
        <span class="sidebar-name-text sidebar-name-text-dublicate">{{ title }}</span>
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
  import type Button from "../model";
  defineProps<Button>();
</script>

<style lang="scss">
  @import "./index.scss";
</style>
