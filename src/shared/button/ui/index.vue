<template>
  <nuxt-link class="button" :to="to" v-if="to && target !== '_blank'">
    <span class="button-content">
      <span class="button-icon" v-if="!!slots.icon">
        <slot name="icon" />
      </span>
      <span class="button-name" v-if="title">
        <span class="button-name-text">{{ title }}</span>
        <span class="button-name-text button-name-text-dublicate">{{ title }}</span>
        <slot />
      </span>
    </span>
  </nuxt-link>
  <a class="button" :href="to" :target="target" v-else-if="target === '_blank'">
    <span class="button-content">
      <span class="button-icon" v-if="!!slots.icon">
        <slot name="icon" />
      </span>
      <span class="button-name" v-if="title">
        <span class="button-name-text">{{ title }}</span>
        <span class="button-name-text button-name-text-dublicate">{{ title }}</span>
        <slot />
      </span>
    </span>
  </a>
  <button class="button" v-else>
    <span class="button-content">
      <span class="button-icon" v-if="!!slots.icon">
        <slot name="icon" />
      </span>
      <span class="button-name" v-if="title">
        <span class="button-name-text">{{ title }}</span>
        <span class="button-name-text button-name-text-dublicate">{{ title }}</span>
        <slot />
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
  import type Button from "../model/index";
  defineProps<Button>();
  const slots = useSlots();
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
