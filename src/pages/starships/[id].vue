<template>
  <div class="page">
    <Teleport to="body">
      <nav class="pagination-nav">
        <button-ui class="pagination-nav-button pagination-nav-prev" :to="`/starships/${id - 1}`" v-if="id > 1">
          <template #icon>
            <icon name="icon:prev" />
          </template>
        </button-ui>
        <button-ui class="pagination-nav-button pagination-nav-next" :to="`/starships/${id + 1}`">
          <template #icon>
            <icon name="icon:next" />
          </template>
        </button-ui>
      </nav>
    </Teleport>
    <div v-if="data">
      <h1 class="page-title">Звездолет {{ data.name }}</h1>
      <div class="starship__item">Модель: {{ data.model }}</div>
      <div class="starship__item">Стоимость: {{ costFormated(Number(data.cost_in_credits)) }} кредитов</div>
      <div class="starship__item">Максимальная скорость: {{ data.max_atmosphering_speed }} км/ч</div>
      <div class="starship__item">Количество пассажиров: {{ data.passengers }} человек</div>
      <div class="starship__item">Грузоподъемность: {{ data.cargo_capacity }} тонн</div>
      <div class="starship__item">Производитель: {{ data.manufacturer }}</div>
      <div class="starship__item">Класс: {{ data.starship_class }}</div>
      <div class="starship__item">Количество мест: {{ data.length }} метров</div>
      <div class="starship__item">Количество пилотов: {{ data.pilots.length }}</div>
    </div>
    <div v-else>
      <h1>Звездолет</h1>
      <skeleton-ui class="starship__item" width="15%" height="20px" />
      <skeleton-ui class="starship__item" width="20%" height="20px" />
      <skeleton-ui class="starship__item" width="25%" height="20px" />
      <skeleton-ui class="starship__item" width="30%" height="20px" />
      <skeleton-ui class="starship__item" width="35%" height="20px" />
      <skeleton-ui class="starship__item" width="30%" height="20px" />
      <skeleton-ui class="starship__item" width="40%" height="20px" />
      <skeleton-ui class="starship__item" width="10%" height="20px" />
      <skeleton-ui class="starship__item" width="30%" height="20px" />
      <skeleton-ui class="starship__item" width="20%" height="20px" />
    </div>
  </div>
</template>

<script setup lang="ts">
  // https://swapi.dev/documentation
  import { Teleport } from "vue";
  import type { Starship } from "./model";
  const api = "https://swapi.dev/api/starships/";

  const route = useRoute();
  const id = ref(Number(route.params.id || 1));
  const { data } = useFetch<Starship | null>(`${api}${id.value.toString()}`, { key: "starship" });

  const costFormated = (cost: number) => {
    if (!cost) return 0;
    return new Intl.NumberFormat("ru-RU").format(cost);
  };

  definePageMeta({
    pageTransition: {
      mode: "out-in",
    },
    middleware(to, from) {
      console.log(+to.params.id! > +from.params.id!);
      if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean") {
        to.meta.pageTransition.name = +to.params.id! > +from.params.id! ? "slide-left" : "slide-right";
      }
    },
  });
</script>

<style lang="scss" scoped>
  @use "ui/index.scss" as *;
</style>
