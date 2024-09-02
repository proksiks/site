<template>
  <div class="sidebar-nav">
    <div class="sidebar" ref="sidebarEl" :class="{ active: isMenuOpen }">
      <div class="sidebar-head">
        <a class="sidebar-title" href="https://t.me/ProKsiKzzz" target="_blank">
          <i class="sidebar-menu-icon bx bxl-telegram"></i>
        </a>
        <button-ui
          class="sidebar-menu-button"
          class-icon="bx-menu"
          :class="{ active: isMenuOpen }"
          @click="openMenu"
        ></button-ui>
      </div>
      <ul class="sidebar-list">
        <li class="sidebar-item" v-for="route in items" :key="route.id">
          <button-ui class="sidebar-item-button" :class-icon="route.icon" :title="route.title"></button-ui>
        </li>
        <li class="sidebar-item sidebar-item-bottom">
          <button-ui
            class="sidebar-item-button"
            class-icon="bxl-telegram"
            title="Телеграмм"
            href="https://t.me/ProKsiKzzz"
          ></button-ui>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { items } from "~/content/Header.json";
  const isMenuOpen = ref(false);
  const sidebarEl = ref();

  const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
