<template>
  <div class="page">
    <h1>Звездолеты</h1>
    <ul class="starships" v-if="starshipsData">
      <li class="starship" v-for="starship in starshipsData?.results">
        <nuxt-link class="starship-link" :to="`/starships/${getUrlShip(starship.url)}`">
          Название: {{ starship.name }}
        </nuxt-link>
        <div class="starship-item">Класс: {{ starship.starship_class }}</div>
        <div class="starship-item">Количество мест: {{ starship.pilots.length }}</div>
      </li>
    </ul>
    <skeleton-ui v-else width="100%" height="250px" />
  </div>
</template>

<script setup lang="ts">
  // https://swapi.dev/documentation
  import type { StarshipsResponse } from "./model";
  const shipsApi = "https://swapi.dev/api/starships/";
  const [{ data: starships }] = await Promise.all([useCustomFetch(shipsApi)]);
  const getUrlShip = (url: string) => url.replace(shipsApi, "");
  const starshipsData = computed(() => starships.value?.data as StarshipsResponse | undefined);
</script>

<style lang="scss" scoped>
  @use "ui/index.scss" as *;
</style>
