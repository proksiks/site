<template>
  <div class="sidebar-nav">
    <button-ui id="installApp" class="sidebar-install-button" title="Установить приложение">
      <template #icon>
        <span class="sidebar-menu-icon">
          <icon style="width: 1.375rem; height: 1.375rem" name="icon:install" />
        </span>
      </template>
    </button-ui>
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
        if (deferredPrompt && deferredPrompt !== null) {
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
  @use "index.scss" as *;
</style>
