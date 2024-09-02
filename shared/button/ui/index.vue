<template>
  <nuxt-link class="button" :to="to" v-if="to">
    <span class="button-content">
      <i class="button-icon bx" :class="classIcon" v-if="classIcon"></i>
      <span class="button-name" v-if="title">
        <span class="button-name-text">{{ title }}</span>
        <span class="button-name-text button-name-text-dublicate">{{ title }}</span>
        <slot />
      </span>
      <slot />
    </span>
  </nuxt-link>
  <a class="button" :href="href" v-else-if="href" :target="target">
    <span class="button-content">
      <i class="button-icon bx" :class="classIcon" v-if="classIcon"></i>
      <span class="button-name" v-if="title">
        <span class="button-name-text">{{ title }}</span>
        <span class="button-name-text button-name-text-dublicate">{{ title }}</span>
        <slot />
      </span>
      <slot />
    </span>
  </a>
  <button class="button" v-else>
    <span class="button-content">
      <i class="button-icon bx" :class="classIcon" v-if="classIcon"></i>
      <span class="button-name" v-if="title">
        <span class="button-name-text">{{ title }}</span>
        <span class="button-name-text button-name-text-dublicate">{{ title }}</span>
        <slot />
      </span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
  import type Button from "../model";
  defineProps<Button>();
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
