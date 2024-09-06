<template>
  <!-- TODO вынести конвертер в виджет -->
  <div class="wrap">
    <breadcrumbs-ui :breadcrumbs="breadcrumbs" />
    <h1>Ковертация валют</h1>
    <form class="form">
      <div class="field">
        <div class="field-inner">
          <div class="field-input">
            <input class="input" min="0" type="number" :value="baseCurrencyValue" @input="onChangeBaseCurrencyValue" />
          </div>
          <div class="field-select">
            <select class="select" v-model="baseCurrency">
              <option class="select-option" :value="currency" v-for="currency in currencies">
                {{ currency.toUpperCase() }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="equalize"><=></div>
      <div class="field">
        <div class="field-inner">
          <div class="field-input">
            <input class="input" min="0" type="number" :value="currencyValue" @input="onChangeCurrencyValue" />
          </div>
          <div class="field-select">
            <select class="select" :value="currency" @change="calculateCurrency">
              <option class="select-option" :value="currency" v-for="currency in currencies">
                {{ currency.toUpperCase() }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
  const { data } = await useFetch<{ [key: string]: number }>("https://status.neuralgeneration.com/api/currency");
  const breadcrumbs = [{ href: "/", title: "Главная" }, { title: "Конвертация" }];
  const currencies = ["rub", "usd", "eur"];

  const baseCurrency = ref("rub");
  const baseCurrencyValue = ref(1);
  const baseCurrencyRelation = computed(() => {
    return `${baseCurrency.value}-${currency.value}`;
  });
  const getBaseCurrencyValue = computed(() => {
    if (data.value && data.value[baseCurrencyRelation.value]) {
      return parseFloat((baseCurrencyValue.value * data.value[baseCurrencyRelation.value]).toFixed(2));
    } else {
      return 1;
    }
  });

  const currency = ref("usd");
  const currencyValue = ref(1);
  const currencyRelation = computed(() => {
    return `${currency.value}-${baseCurrency.value}`;
  });
  const getCurrencyValue = computed(() => {
    if (data.value && data.value[currencyRelation.value]) {
      return parseFloat((data.value[currencyRelation.value] * baseCurrencyValue.value).toFixed(2));
    } else {
      return 1;
    }
  });
  function onChangeBaseCurrencyValue(e: Event) {
    baseCurrencyValue.value = +(e.target as HTMLInputElement).value;
    calculateBaseCurrency(e);
  }
  function calculateBaseCurrency(e: Event) {
    if (data.value && data.value[baseCurrencyRelation.value]) {
      currencyValue.value = +(+(e.target as HTMLInputElement).value * data.value[baseCurrencyRelation.value]).toFixed(2);
    }
  }

  function onChangeCurrencyValue(e: Event) {
    currencyValue.value = +(e.target as HTMLInputElement).value;
    calculateCurrency(e);
  }

  function calculateCurrency(e: Event) {
    if (data.value && data.value[currencyRelation.value]) {
      baseCurrencyValue.value = +(+(e.target as HTMLInputElement).value * data.value[currencyRelation.value]).toFixed(2);
    }
  }
</script>
<style lang="scss" scoped>
  .buttons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .form {
    max-width: 22rem;
  }
  .equalize {
    pointer-events: none;
    text-align: center;
    transform: rotate(90deg);
    transform-origin: bottom center left center;
  }
  .field {
    padding: 0.375rem 0;
  }
  .field + .field {
    margin-top: 0.625rem;
  }

  .field-inner {
    align-items: center;
    display: flex;
    border: 0.0625rem solid var(--white);
    border-radius: 0.25rem;
    &:has(.input:focus-visible),
    &:has(.select:focus-visible) {
      border: 0.0625rem solid var(--cyanide);
    }
  }
  .field-select {
    width: 100%;
  }
  .field-input {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 0.125rem;
      height: 100%;
      background-color: var(--white);
    }
  }
  .input {
    padding: 0.1875rem 0.375rem;
  }
  .input,
  .select {
    outline: none;
    width: 100%;
    background-color: transparent;
    border: none;
    color: var(--white);
    border-radius: 4px;
  }
  .select {
    &:focus-visible {
      background-color: black;
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
