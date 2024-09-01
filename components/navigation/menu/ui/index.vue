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
        <!--<li class="sidebar-item" v-for="route in items" :key="route.id">
            <nuxt-link class="sidebar-button" :to="route.href">
              <span class="sidebar-button-content">
                <i class="sidebar-button-icon bx" :class="route.classIcon"></i>
                <span class="sidebar-name">
                  <span class="sidebar-name-text">{{ route.title }}</span>
                  <span class="sidebar-name-text sidebar-name-text-dublicate">{{ route.title }}</span>
                </span>
              </span>
            </nuxt-link>
          </li>-->

        <!--<li class="sidebar-item">
            <button class="sidebar-button">
              <span class="sidebar-button-content">
                <i class="sidebar-button-icon bx bx-cog"></i>
                <span class="sidebar-name">
                  <span class="sidebar-name-text">Настройки</span>
                  <span class="sidebar-name-text sidebar-name-text-dublicate">Настройки</span>
                </span>
              </span>
            </button>
          </li>-->

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

<script setup>
  //import { items } from "~/content/Header.json";
  const isMenuOpen = ref(false);
  const sidebarEl = ref();

  const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<style scoped>
  .sidebar-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    flex: 1;
    height: 100%;

    background: var(--dark);
    z-index: 99;
  }

  .sidebar-nav::before {
    pointer-events: none;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(100%);
    margin-left: -0.0625rem;
    width: 0.625rem;
    height: 100%;
    background: var(--shadow-vertical);
  }

  .sidebar {
    flex: 1;
    height: 100%;
    width: 3.125rem;
    transition: all 0.5s ease;
    padding-top: 0.625rem;
    display: flex;
    flex-direction: column;
    margin: 0 0.625rem;
    overflow: hidden;
    transition: width 0.6s ease;
  }
  .sidebar.active {
    width: 9.0625rem;
  }
  .sidebar.active .sidebar-name {
    opacity: 1;
  }
  .sidebar.active .sidebar-title {
    opacity: 1;
    transform: translateX(-1.875rem);
  }

  .sidebar-head {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sidebar-head::before {
    pointer-events: none;
    --height: 0.625rem;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -0.625rem;
    width: 100%;
    height: 0.625rem;
    background: var(--shadow-horizontal);
  }

  .sidebar-title {
    color: var(--white);
    white-space: nowrap;
    position: absolute;
    opacity: 0;
    padding-left: 1.875rem;
    transform: translateX(0);
    transition: opacity 0.3s ease, transform 0.6s ease;
  }

  .sidebar-title:hover .sidebar-menu-icon {
    color: var(--dark);
    background-color: var(--white);
  }

  .sidebar-title .sidebar-menu-icon {
    color: var(--white);
    font-size: 1.375rem;
    padding: 0.875rem;
    padding: 0.875rem;
    border-radius: 0.5rem;
    transition: color 0.3s ease, background-color 0.6s ease;
  }
  .sidebar-button {
    display: block;
    position: relative;
    z-index: 1;
    cursor: pointer;
    border: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: var(--dark);
    background-color: transparent;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .sidebar-button::before {
    pointer-events: none;
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    inset: 0;
    opacity: 0;
    color: var(--dark);
    border-radius: 0.5rem;
    background-color: white;
    border: 0.0625rem solid transparent;
    transition: all 0.3s ease;
  }

  .sidebar-button:hover {
    color: var(--dark);
  }
  .sidebar-button:hover .sidebar-name-text {
    transform: translateY(-100%) scale(0, 0);
    opacity: 0;
  }
  .sidebar-button:hover .sidebar-name-text-dublicate {
    transform: translateY(0);
    color: var(--dark);
    opacity: 1;
  }
  .sidebar-button:hover::before {
    opacity: 1;
  }
  .sidebar-button:active::before {
    opacity: 1;
    /*box-shadow: 0 -0.25rem 0 0.1875rem rgba(17, 16, 29, 1) inset;*/
    transform: translateY(2px) scale(0.98);
  }
  .sidebar-button:active .sidebar-button-icon {
    transform: translateY(2px) scale(0.9);
  }
  .sidebar-button:active .sidebar-name {
    transform: translateY(2px);
  }
  .sidebar-button.active {
    color: var(--dark);
  }
  .sidebar-button.active::before {
    opacity: 1;
  }

  .sidebar-button-content {
    display: flex;
    align-items: center;
    min-height: 3.125rem;
    border-radius: 0.5rem;
    white-space: nowrap;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .sidebar-button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 3.125rem;
    border-radius: 0.375rem;
    padding-right: 1rem;
    font-size: 1.125rem;
    flex-shrink: 0;
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .sidebar-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .sidebar-list::-webkit-scrollbar {
    display: none;
  }

  .sidebar-name {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;
    font-size: 0.9375rem;
    font-weight: 400;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .sidebar-name-text {
    display: block;
    position: relative;
    opacity: 1;
    z-index: 1;
    transform: translateY(0) scaleY(1);
    transition: all 0.3s ease;
  }

  .sidebar-name-text-dublicate {
    position: absolute;
    left: 0;
    top: 0;
    overflow: 0;
    transform: translateY(100%) scaleY(0);
  }

  .sidebar-item {
    position: relative;
    width: 100%;
    display: flex;
  }
  .sidebar-item + .sidebar-item {
    margin-top: 0.75rem;
  }

  .sidebar-item + .sidebar-item-bottom {
    margin-top: auto;
    padding-top: 0.625rem;
  }

  .sidebar-menu-button {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.375rem;
    color: var(--dark);
    height: 3.125rem;
    width: 3.125rem;
    text-align: center;
    line-height: 3.125rem;
    transform: translate(0);
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  }
  .sidebar-menu-button.active {
    color: var(--dark);
  }

  .sidebar-search-input {
    height: 100%;
    width: 100%;
    border-radius: 0.75rem;
    outline: none;
    border: none;
    background: #1d1b31;
    padding-left: 3.125rem;
    font-size: 1.125rem;
    color: #fff;
  }
  .sidebar-button-search {
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    z-index: 99;
    border: none;

    border-radius: 0.75rem;
    color: #fff;
    transition: all 0.5s ease;
    padding: 0;
    background-color: transparent;
  }
  .sidebar-button-search::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.7);
    background-color: #fff;
    border-radius: 0.375rem;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;

    transform-origin: center;
    transition: opacity 0.3s ease, transform 0.15s ease;
  }
  .sidebar-button-search * {
    pointer-events: none;
    font-size: 3.125rem;
    transform: scale(0.36);
  }
  .sidebar-button-search:hover,
  .sidebar-button-search:hover::before {
    color: var(--dark);
    opacity: 1;
  }
  .sidebar-button-search:active::before {
    transform: translate(-50%, -50%) scale(0.8);
  }

  .sidebar ul li .search:hover {
    background: #fff;
    color: #1d1b31;
  }

  .sidebar-search-input {
    position: relative;
    min-height: 3.125rem;
  }
</style>
