<template>
  <div class="sidebar-nav">
    <button-ui id="installApp" class="sidebar-install-button" title="Установить приложение" class-icon="bx-download" />
    <div class="sidebar" ref="sidebarEl" :class="{ active: isMenuOpen }">
      <div class="sidebar-head">
        <a class="sidebar-title" aria-label="Телеграм" :href="isMobile ? 't.me/ProKsiKzzz' : 'https://t.me/ProKsiKzzz'">
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
  const navigation: NavigationListItem[] = [
    {
      id: 1,
      title: "Главная",
      href: "/",
      icon: "bx-grid-alt",
    },
    {
      id: 3,
      title: "Статьи",
      href: "/articles/",
      icon: "bxs-notepad",
    },
    {
      id: 4,
      title: "Авторы",
      href: "/authors/",
      icon: "bxs-user",
    },
  ];

  const isMenuOpen = ref(false);
  const sidebarEl = ref();

  const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const isMobile = computed(() => {
    return window.innerWidth < 1024;
  });

  onMounted(() => {
    let deferredPrompt: Event | null;
    window.addEventListener("beforeinstallprompt", (e) => {
      deferredPrompt = e;
    });

    const installApp = document.getElementById("installApp");
    if (installApp) {
      installApp.addEventListener("click", async () => {
        if (deferredPrompt !== null) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt?.userChoice;
          if (outcome === "accepted") {
            deferredPrompt = null;
          }
        }
      });
    }
  });
</script>
<style lang="scss" scoped>
  @import "index.scss";
</style>
