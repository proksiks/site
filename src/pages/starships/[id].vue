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
    <div class="starship">
      <h1 class="page-title starship__item">
        Звездолет
        <span v-if="data">
          {{ data.name }}
        </span>
        <span v-else>
          <skeleton-ui width="9.375rem" height="2.25rem" />
        </span>
      </h1>
      <div class="starship__cover">
        <img v-if="data" :src="`/images/starships/${id}.webp`" alt="image" />
        <skeleton-ui width="55%" height="200px" v-else />
      </div>
      <div class="starship__item">
        Модель:
        <span v-if="data">
          {{ data.model }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
      </div>
      <div class="starship__item">
        Стоимость:
        <span v-if="data">
          {{ costFormated(Number(data.cost_in_credits)) }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        кредитов
      </div>
      <div class="starship__item">
        Максимальная скорость:
        <span v-if="data">
          {{ data.max_atmosphering_speed }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        км/ч
      </div>
      <div class="starship__item">
        Количество пассажиров:
        <span v-if="data">
          {{ data.passengers }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        человек
      </div>
      <div class="starship__item">
        Грузоподъемность:
        <span v-if="data">
          {{ data.cargo_capacity }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        тонн
      </div>
      <div class="starship__item">
        Производитель:
        <span v-if="data">
          {{ data.manufacturer }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
      </div>
      <div class="starship__item">
        Класс:
        <span v-if="data">
          {{ data.starship_class }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
      </div>
      <div class="starship__item">
        Количество мест:
        <span v-if="data">
          {{ data.length }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        метров
      </div>
      <div class="starship__item">
        Количество пилотов:
        <span v-if="data">
          {{ data.pilots.length }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // https://swapi.dev/documentation
  import { Teleport } from "vue";
  //import type { Starship } from "./model";
  import { result } from "~/app/content/StarshipMoc.json";
  //const api = "https://swapi.dev/api/starships/";
  //const { data } = await useFetch<Starship | null>(`${api}${id.value.toString()}`, { key: "starship" });
  const runtimeConfig = useRuntimeConfig();


  onMounted(() => {
    console.log(runtimeConfig.public.CURRENT_BRANCH);
  });

  const route = useRoute();
  const id = ref(Number(route.params.id || 1));
  const data = result[id.value];
  const costFormated = (cost: number) => {
    if (!cost) return 0;
    return new Intl.NumberFormat("ru-RU").format(cost);
  };

  definePageMeta({
    pageTransition: {
      mode: "out-in",
    },
    middleware(to, from) {
      if (to.meta.pageTransition && typeof to.meta.pageTransition !== "boolean") {
        to.meta.pageTransition.name = +to.params.id! > +from.params.id! ? "slide-left" : "slide-right";
      }
    },
  });
</script>

<style lang="scss" scoped>
  @use "ui/index.scss" as *;
</style>
