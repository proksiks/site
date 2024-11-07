<template>
  <div class="page" v-if="data">
    <h1>Звездолет {{ data.name }}</h1>
    <div>Модель: {{ data.model }}</div>
    <div>Стоимость: {{ costFormated(Number(data.cost_in_credits)) }} кредитов</div>
    <div>Максимальная скорость: {{ data.max_atmosphering_speed }} км/ч</div>
    <div>Количество пассажиров: {{ data.passengers }} человек</div>
    <div>Грузоподъемность: {{ data.cargo_capacity }} тонн</div>
    <div>Производитель: {{ data.manufacturer }}</div>
    <div>Класс: {{ data.starship_class }}</div>
    <div>Количество мест: {{ data.length }} метров</div>
    <div>Количество пилотов: {{ data.pilots.length }}</div>
  </div>
  <div v-else>
    <skeleton-ui width="100%" height="50px" />
    <skeleton-ui width="80%" height="20px" />
    <skeleton-ui width="60%" height="20px" />
    <skeleton-ui width="70%" height="20px" />
    <skeleton-ui width="80%" height="20px" />
    <skeleton-ui width="70%" height="20px" />
    <skeleton-ui width="80%" height="20px" />
  </div>
</template>

<script setup lang="ts">
  // https://swapi.dev/documentation
  import type { Starship } from "./model";
  const api = "https://swapi.dev/api/starships/";
  const { id } = useRoute().params;
  const { data } = useFetch<Starship | null>(`${api}${id}`, { key: "starship" });

  const costFormated = (cost: number) => {
    if (!cost) return 0;
    return new Intl.NumberFormat("ru-RU").format(cost);
  };
</script>

<style lang="scss" scoped>
  @use "ui/index.scss" as *;
</style>
