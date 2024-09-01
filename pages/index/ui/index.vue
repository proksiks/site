<template>
  <div class="sidebar-nav">
    <div class="sidebar" ref="sidebarEl" :class="{ active: isMenuOpen }">
      <div class="sidebar-head">
        <a class="sidebar-title" href="https://t.me/ProKsiKzzz" target="_blank">
          <i class="sidebar-menu-icon bx bxl-telegram"></i>
        </a>

        <button class="sidebar-button sidebar-menu-button reset-btn" @click="openMenu">
          <i class="sidebar-menu-icon bx bx-menu"></i>
        </button>
      </div>
      <ul class="sidebar-list">
        <li class="sidebar-item" v-for="route in items" :key="route.id">
          <nuxt-link class="sidebar-button" :to="route.href">
            <span class="sidebar-button-content">
              <i class="sidebar-button-icon bx" :class="route.classIcon"></i>
              <span class="sidebar-name">
                <span class="sidebar-name-text">{{ route.title }}</span>
                <span class="sidebar-name-text sidebar-name-text-dublicate">{{ route.title }}</span>
              </span>
            </span>
          </nuxt-link>
        </li>

        <li class="sidebar-item sidebar-item-bottom">
          <a class="sidebar-button" href="https://t.me/ProKsiKzzz">
            <span class="sidebar-button-content">
              <i class="sidebar-button-icon bx bxl-telegram"></i>
              <span class="sidebar-name">
                <span class="sidebar-name-text">Телеграмм</span>
                <span class="sidebar-name-text sidebar-name-text-dublicate">Телеграмм</span>
              </span>
            </span>
          </a>
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
<style>
  @import "./index.css";
</style>
