<template>
  <aside class="aside">
    <div class="sidebar-nav">
      <Teleport to="body">
        <transition name="fade">
          <div class="sidebar-nav-install" v-if="showInstallPrompt">
            <button-ui class="sidebar-nav-install-button" title="Установить приложение" @click="installPWA">
              <template #icon>
                <icon class="sidebar-icon" name="icon:install" />
              </template>
            </button-ui>
            <button-ui title="Нет спасибо" @click="hidePrompt"></button-ui>
          </div>
        </transition>
      </Teleport>
      <div class="sidebar" ref="sidebarEl" :class="{ active: isMenuOpen }">
        <div class="sidebar-head">
          <a
            class="sidebar-share"
            aria-label="Телеграм"
            :href="isMobile ? 't.me/ProKsiKzzz' : 'https://t.me/ProKsiKzzz'"
          >
            <icon class="sidebar-icon sidebar-share-icon" name="icon:tg" />
          </a>
          <button-ui
            aria-label="Открыть меню"
            class="sidebar-menu-button"
            :class="{ active: isMenuOpen }"
            @click="openMenu"
          >
            <template #icon>
              <span class="sidebar-burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </template>
          </button-ui>
        </div>
        <ul class="sidebar-list" v-if="navigation">
          <li class="sidebar-item" v-for="route in navigation" :key="route.id">
            <button-ui class="sidebar-item-button" :class-icon="route.icon" :title="route.title" :to="route.href">
              <template #icon>
                <icon class="sidebar-icon" :name="route.icon" />
              </template>
            </button-ui>
          </li>
          <li class="sidebar-item sidebar-item-bottom">
            <button-ui
              class="sidebar-item-button"
              :title="isMobile ? 'ТГ' : 'Телеграм'"
              to="https://t.me/ProKsiKzzz"
              target="_blank"
            >
              <template #icon>
                <icon class="sidebar-icon" name="icon:tg" />
              </template>
            </button-ui>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
  import { useWindowSize } from "@vueuse/core";
  import type { NavigationListItem } from "../model/index";
  const navigation: NavigationListItem[] = [
    {
      id: 1,
      title: "Главная",
      href: "/",
      icon: "icon:wallet",
    },
    {
      id: 3,
      title: "Статьи",
      href: "/articles/",
      icon: "icon:paper",
    },
    {
      id: 5,
      title: "Корабли",
      href: "/starships/",
      icon: "icon:starwars",
    },
    {
      id: 4,
      title: "Авторы",
      href: "/authors/",
      icon: "icon:users",
    },
    {
      id: 6,
      title: "Проекты",
      href: "/projects/",
      icon: "icon:grid",
    },
  ];

  const isMenuOpen = ref(false);
  const sidebarEl = ref();
  const installEvent = ref();

  const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const { width } = useWindowSize();

  const isMobile = computed(() => {
    return width.value < 768;
  });

  const showInstallPrompt = ref(false);

  onBeforeMount(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      installEvent.value = e;
      showInstallPrompt.value = true;
    });

    window.addEventListener("appinstalled", () => {
      hidePrompt();
      installEvent.value = null;
    });
  });

  function hidePrompt() {
    showInstallPrompt.value = false;
  }

  function installPWA() {
    installEvent.value.prompt();
    installEvent.value.userChoice.then(() => {
      hidePrompt();
    });
  }
</script>
<style lang="scss" scoped>
  @use "index.scss" as *;
</style>
