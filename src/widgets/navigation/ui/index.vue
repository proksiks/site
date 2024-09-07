<template>
  <div class="sidebar-nav">
    <div class="sidebar" ref="sidebarEl" :class="{ active: isMenuOpen }">
      <div class="sidebar-head">
        <a class="sidebar-title" href="https://t.me/ProKsiKzzz">
          <i class="sidebar-menu-icon bx bxl-telegram"></i>
        </a>
        <button-ui
          aria-label="Открыть меню"
          class="sidebar-menu-button"
          class-icon="bx-menu"
          :class="{ active: isMenuOpen }"
          @click="openMenu"
        ></button-ui>
      </div>
      <ul class="sidebar-list" v-if="navigation">
        <li class="sidebar-item" v-for="route in navigation" :key="route.id">
          <button-ui
            class="sidebar-item-button"
            :class-icon="route.icon"
            :title="route.title"
            :to="route.href"
          ></button-ui>
        </li>
        <li class="sidebar-item sidebar-item-bottom">
          <button-ui
            class="sidebar-item-button"
            class-icon="bxl-telegram"
            title="Телеграмм"
            to="https://t.me/ProKsiKzzz"
            target="_blank"
          ></button-ui>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { NavigationListItem } from "../model/index";

  defineProps<{
    navigation: NavigationListItem[];
  }>();

  const isMenuOpen = ref(false);
  const sidebarEl = ref();

  const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
