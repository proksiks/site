<template>
  <div class="wrap">
    <div class="head">
      <nuxt-link to="/convert/">Конвертация</nuxt-link>
      <select class="select" v-model="baseCurrency">
        <option class="select-option" value="rub">RUB</option>
        <option class="select-option" value="usd">USD</option>
        <option class="select-option" value="eur">EUR</option>
      </select>
    </div>
    <div class="info">
      <div class="points">
        <div class="point">{{ count }} RUB = {{ getCurrencyValue("rub").toFixed(2) }} {{ baseCurrency }}</div>
        <div class="point">{{ count }} USD = {{ getCurrencyValue("usd").toFixed(2) }} {{ baseCurrency }}</div>
        <div class="point">{{ count }} EUR = {{ getCurrencyValue("eur").toFixed(2) }} {{ baseCurrency }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { data } = await useFetch<{ [key: string]: number }>("https://status.neuralgeneration.com/api/currency");
  const baseCurrency = ref("rub");
  function getCurrencyValue(currency: string) {
    if (data.value && data.value[`${currency}-${baseCurrency.value}` as keyof typeof data.value]) {
      return data.value[`${currency}-${baseCurrency.value}` as keyof typeof data.value];
    } else {
      return 1;
    }
  }

  const counter = useCount();
  const { count } = storeToRefs(counter);
</script>
<style scoped>
  .head {
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
