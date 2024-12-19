<template>
  <div class="page">
    <lazy-breadcrumbs-ui class="currency-rate" :breadcrumbs="breadcrumbs" />
    <div class="head">
      <h1 class="page-title">Будущий курс валют</h1>
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
      <nav class="pagination-nav">
        <button-ui class="pagination-nav__button pagination__nav--next" to="/convert/" title="Конвертер">
          <template #icon>
            <icon name="icon:wallet" />
          </template>
        </button-ui>
      </nav>
    </div>
    <nuxt-picture class="qr-tg" src="/images/qr-tg.jpg" width="390" height="378" alt="telegram" />
  </div>
</template>

<script lang="ts" setup>
  const { data } = await useFetch<{ [key: string]: number }>("https://status.neuralgeneration.com/api/currency");
  const breadcrumbs = [{ href: "/convert/", title: "Конвертация" }];

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
  .pagination-nav__button {
    display: inline-block;
    @media (max-width: 480px) {
      padding: 1rem 0.75rem;
    }
  }
  .currency-rate {
    margin-bottom: 1.25rem;
  }
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
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: transparent;
    color: var(--white);
    font-size: 0.75rem;
  }
  .select-option {
    color: var(--dark);
  }

  .info {
    padding-top: 1.25rem;
    margin-top: 1.25rem;
    border-top: 0.0625rem solid var(--white);
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .points {
    display: flex;
    flex-direction: column;
  }
  .point {
    text-transform: uppercase;
    background-color: var(--white);
    color: var(--dark);
    padding: 0.625rem;
    border-radius: 0.375rem;
  }
  .point + .point {
    margin-top: 0.625rem;
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
    border: 0.0625rem solid var(--white);
    width: 100%;
  }
  .qr-tg {
    margin-top: 1.25rem;
    display: block;
    max-width: 12.5rem;
    &:deep(*) {
      border-radius: 0.5rem;
      max-width: 100%;
      height: auto;
    }
  }
</style>
