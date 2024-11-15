<template>
  <div class="page">
    <h1>Звездолеты</h1>
    <ul class="starships" v-if="starshipsData">
      <li v-for="starship in starshipsData" :key="starship.id">
        <span v-if="starship">
          <lazy-card-ui class="articles-card" :post="starship" v-if="starship" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  // https://swapi.dev/documentation
  import type { StarshipsResponse } from "./model";
  const shipsApi = "https://swapi.dev/api/starships/";
  const [{ data: starships }] = await Promise.all([useCustomFetch(shipsApi)]);
  const getUrlShip = (url: string) => url.replace(shipsApi, "");
  const starshipsData = computed(() => {
    const data = starships.value?.data as StarshipsResponse | undefined;
    console.log(data?.results);

    const result = [];
    if (data) {
      for (let index = 0; index < data.results.length; index++) {
        const element = data.results[index];

        const obj = {
          id: getUrlShip(element.url).replaceAll("/", ""),
          to: getUrlShip(element.url).replaceAll("/", ""),
          title: element.name,
          body: element.passengers === "n/a" ? `Вместимость: 0 чел` : `Вместимость: ${element.passengers} чел`,
        };

        result.push(obj);
      }
    }
    return result;
  });
</script>

<style lang="scss" scoped>
  @use "ui/index.scss" as *;
</style>
