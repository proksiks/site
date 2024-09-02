<template>
  <div class="box">
    <div class="wrap">
      <div class="info">
        <div class="inner-navigation">
          <nav class="buttons">
            <button-ui class="button" to="/" v-for="breadcrumb in navigation" :key="breadcrumb.href" :title="breadcrumb.title" />
          </nav>
          <div class="search">
            <form @submit.prevent="onSubmit">
              <input class="search-input" type="text" placeholder="Поиск" />
            </form>
          </div>
        </div>
        <div>
          <select class="select" v-model="baseCurrency">
            <option class="select-option" value="rub">RUB</option>
            <option class="select-option" value="usd">USD</option>
            <option class="select-option" value="eur">EUR</option>
          </select>
        </div>
      </div>

      <div>
        <div class="points">
          <div class="point">1 RUB = {{ getCurrencyValue("rub") }} {{ baseCurrency }}</div>
          <div class="point">1 USD = {{ getCurrencyValue("usd") }} {{ baseCurrency }}</div>
          <div class="point">1 EUR = {{ getCurrencyValue("eur") }} {{ baseCurrency }}</div>
        </div>

        <!--<pre>
          {{ data }}
        </pre>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { navigation } from "~/content/Header.json";

  const { data } = await useFetch<{ [key: string]: number }>("https://status.neuralgeneration.com/api/currency");
  const baseCurrency = ref("rub");

  function getCurrencyValue(currency: string) {
    if (data.value && data.value[`${currency}-${baseCurrency.value}` as keyof typeof data.value]) {
      return data.value[`${currency}-${baseCurrency.value}` as keyof typeof data.value];
    } else {
      return 1;
    }
  }

  function onSubmit() {
    console.log("onSubmit");
  }
</script>
<style scoped>
  .box {
    height: 100%;
    padding: 1.25rem;
    color: var(--dark);
    background-color: var(--white);
    border-radius: 0.625rem;
  }
  .wrap {
    background-color: var(--dark);
    border-radius: 0.375rem;
    padding: 0.625rem;
    height: 100%;
    color: var(--white);
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .select {
    padding: 0.625rem;
    border-radius: 0.375rem;
    background-color: transparent;
    color: var(--white);
  }
  .select-option {
    color: var(--dark);
  }
  .points {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid var(--white);
  }
  .point {
    text-transform: uppercase;
    background-color: var(--white);
    color: var(--dark);
    padding: 10px;
    border-radius: 6px;
  }
  .point + .point {
    margin-top: 10px;
  }

  .inner-navigation {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  

  .search-input {
    padding: 0.625rem;
    border-radius: 0.375rem;
    background-color: transparent;
    color: var(--white);
    border: 1px solid var(--white);
    width: 100%;
  }
</style>
