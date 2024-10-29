<template>
  <div class="sidebar-nav">
    <transition name="fade">
      <div class="sidebar-nav-install" v-if="showInstallPrompt">
        <button-ui title="Установить приложение" @click="installPWA">
          <template #icon>
            <span class="sidebar-menu-icon">
              <icon style="width: 1.375rem; height: 1.375rem" name="icon:install" />
            </span>
          </template>
        </button-ui>
        <button-ui title="Нет спасибо" @click="hidePrompt"></button-ui>
      </div>
    </transition>
    <div class="sidebar" ref="sidebarEl" :class="{ active: isMenuOpen }">
      <div class="sidebar-head">
        <a class="sidebar-title" aria-label="Телеграм" :href="isMobile ? 't.me/ProKsiKzzz' : 'https://t.me/ProKsiKzzz'">
          <span class="sidebar-menu-icon">
            <icon name="icon:tg" />
          </span>
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
              <span class="sidebar-menu-icon">
                <icon style="width: 22px; height: 22px" class="sidebar-menu-icon" :name="route.icon" />
              </span>
            </template>
          </button-ui>
        </li>
        <li class="sidebar-item sidebar-item-bottom">
          <button-ui class="sidebar-item-button" title="Телеграмм" to="https://t.me/ProKsiKzzz" target="_blank">
            <template #icon>
              <span class="sidebar-menu-icon">
                <icon style="width: 1.375rem; height: 1.375rem" name="icon:tg" />
              </span>
            </template>
          </button-ui>
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
      icon: "icon:wallet",
    },
    {
      id: 3,
      title: "Статьи",
      href: "/articles/",
      icon: "icon:grid",
    },
    {
      id: 4,
      title: "Авторы",
      href: "/authors/",
      icon: "icon:users",
    },
  ];

  const isMenuOpen = ref(false);
  const sidebarEl = ref();
  const installEvent = ref();

  const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const isMobile = computed(() => {
    return window.innerWidth < 1024;
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
