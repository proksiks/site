<template>
  <div class="page">
    <h1>Звездолеты</h1>

    <ul class="starships" v-if="starshipsData">
      <li class="starship" v-for="starship in starshipsData?.results">
        <nuxt-link class="starship-link" :to="`/starships/${getUrlShip(starship.url)}`">
          Название: {{ starship.name }}
        </nuxt-link>
        <div class="starship-item">Класс: {{ starship.starship_class }}</div>
        <div class="starship-item">Количество мест: {{ starship.pilots.length  }}</div>
      </li>
    </ul>
    <skeleton-ui v-else width="100%" height="250px" />
  </div>
</template>

<script setup lang="ts">
  // https://swapi.dev/documentation
  import type { Starship, StarshipsResponse } from "./model";
  const api = "https://swapi.dev/api/starships/";
  const options = {
    headers: { Accept: "application/json" },
    transform(input: Starship[]) {
      return { data: input, fetchedAt: new Date() };
    },
    getCachedData: cachedData,
  };
  const nuxt = useNuxtApp();
  const [{ data: starships }] = await Promise.all([useFetch(`${api}`, { ...options, key: "starships" })]);

  const starshipsData = computed(() => starships.value?.data as StarshipsResponse | undefined);
  const getUrlShip = (url: string) => url.replace(api, "");
  function cachedData(key: string) {
    const data = nuxt.payload.data[key] || nuxt.static.data[key];
    if (!data) return;

    const expirationDate = new Date(data.fetchedAt);
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
    const isExpired = expirationDate.getTime() < Date.now();
    if (isExpired) return;

    return data;
  }
</script>

<style lang="scss" scoped>
  @use "ui/index.scss" as *;
</style>
