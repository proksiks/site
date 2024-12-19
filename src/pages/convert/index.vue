<template>
  <div class="page">
    <lazy-breadcrumbs-ui class="convert-breadcrumbs" :breadcrumbs="breadcrumbs" />
    <!-- <a href="https://www.cbr-xml-daily.ru/" target="_blank">API для курсов ЦБ РФ</a> -->
    <h1 class="page-title">Конвертер</h1>
    <lazy-currency-converter-ui :data="api" />
  </div>
</template>

<script lang="ts" setup>
  const { data: api } = await useFetch<{ [key: string]: number }>("https://status.neuralgeneration.com/api/currency");
  const cbApi = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  console.log(cbApi);
  
  const breadcrumbs = [{ href: "/", title: "Главная" }, { title: "Конвертация" }];
  //const xmlApi = "https://www.cbr-xml-daily.ru/daily_json.js";

  //const { data: xmlData } = await useFetch(xmlApi);

  //console.log(xmlData.value);

  //https://www.cbr-xml-daily.ru/daily_json.js ссылка на api

  //  import { useState, useEffect } from "react";
  //import "bootstrap/dist/css/bootstrap.min.css";
  //import Table from "react-bootstrap/Table";

  //function App() {
  //  const apiUrl = `https://www.cbr-xml-daily.ru/daily_json.js`;
  //  // State
  //  const [apiData, setApiData] = useState({});
  //  // Side effect
  //  useEffect(() => {
  //    fetch(apiUrl)
  //      .then((res) => res.json())
  //      .then((data) => setApiData(data.Valute));
  //  }, [apiUrl]);
</script>
<style lang="scss" scoped>
  .convert-breadcrumbs {
    margin-bottom: 1.25rem;
  }
</style>
