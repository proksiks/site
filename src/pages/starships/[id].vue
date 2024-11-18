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
      <h1 class="page-title">
        Звездолет
        <span v-if="article.name">
          {{ article.name }}
        </span>
        <span v-else>
          <skeleton-ui width="9.375rem" height="2.25rem" />
        </span>
      </h1>
      <div class="starship__cover">
        <NuxtPicture
          class="card-image"
          format="avif,webp"
          placeholder
          loading="lazy"
          sizes="xs:160px sm:260px"
          fit="cover"
          :img-attrs="{ alt: '', fetchpriority: 'high' }"
          :src="`/images/starships/${getId}.webp`"
          v-if="getId"
        />
        <skeleton-ui width="25%" height="12.5rem" v-else />
      </div>
      <div class="starship__item">
        Модель:
        <span v-if="article.model">
          {{ article.model }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
      </div>
      <div class="starship__item">
        Стоимость:
        <span v-if="article.cost_in_credits">
          {{ costFormated(Number(article.cost_in_credits)) }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        кредитов
      </div>
      <div class="starship__item">
        Максимальная скорость:
        <span v-if="article.max_atmosphering_speed">
          {{ article.max_atmosphering_speed }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        км/ч
      </div>
      <div class="starship__item">
        Количество пассажиров:
        <span v-if="article.passengers">
          {{ article.passengers }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        человек
      </div>
      <div class="starship__item">
        Грузоподъемность:
        <span v-if="article.cargo_capacity">
          {{ article.cargo_capacity }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        тонн
      </div>
      <div class="starship__item">
        Производитель:
        <span v-if="article.manufacturer">
          {{ article.manufacturer }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
      </div>
      <div class="starship__item">
        Класс:
        <span v-if="article.starship_class">
          {{ article.starship_class }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
      </div>
      <div class="starship__item">
        Количество мест:
        <span v-if="article.length">
          {{ article.length }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
        метров
      </div>
      <div class="starship__item">
        Количество пилотов:
        <span v-if="article.pilots">
          {{ article.pilots.length }}
        </span>
        <span v-else>
          <skeleton-ui width="3.125rem" height="1.1494rem" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { result } from "~/app/content/StarshipMoc.json";
  import type { Starship } from "./model";

  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const api = runtimeConfig.public.STARWARS_PLACEHOLDER;
  const id = ref(Number(route.params.id || 1));

  const article = ref();
  const { data, error } = await useFetch<Starship | null>(`${api}${id.value.toString()}`, { key: "starship" });
  if (error.value?.data) {
    article.value = result;
  } else {
    article.value = data.value;
  }

  const getUrlShip = (url: string) => url?.replace(runtimeConfig.public.STARWARS_PLACEHOLDER, "");
  const getId = computed(() => getUrlShip(article.value?.url)?.replaceAll("/", ""));

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
        to.meta.pageTransition.name = +to.params.id! > +from.params.id! ? "page" : "slide-right";
      }
    },
  });
</script>

<style lang="scss" scoped>
  @use "ui/index.scss" as *;
</style>
