<template>
  <!-- TODO вынести конвертер в виджет -->
  <div class="wrap">
    <breadcrumbs-ui :breadcrumbs="breadcrumbs" />
    <currency-converter-ui :data="data" />
  </div>
</template>

<script lang="ts" setup>
  const { data } = await useFetch<{ [key: string]: number }>("https://status.neuralgeneration.com/api/currency");
  const breadcrumbs = [{ href: "/", title: "Главная" }, { title: "Конвертация" }];
</script>
<style lang="scss" scoped></style>
