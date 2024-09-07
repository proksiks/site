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
            <select class="select" v-model="baseCurrency" @change="onSelectBaseCurrency">
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
            <select class="select" :value="currency" @change="onSelectCurrency">
              <option class="select-option" :value="currency" v-for="currency in currencies">
                {{ currency.toUpperCase() }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>

    <div>{{ baseCurrency }}-{{ currency }}={{ getBaseCurrencyValue }}</div>
    <div>{{ currency }}-{{ baseCurrency }}={{ getCurrencyValue }}</div>

    <pre>
      {{ data }}
    </pre>
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
  const getBaseCurrencyRelationValue = computed(() => {
    if (data.value) {
      return data.value[baseCurrencyRelation.value] as number;
    } else {
      return 1;
    }
  });
  const getCurrencyRelationValue = computed(() => {
    if (data.value) {
      return data.value[currencyRelation.value] as number;
    } else {
      //return data.value[currencyRelation2.value] as number;
      return 1;
    }
  });

  const getBaseCurrencyValue = computed(() => {
    return parseFloat((baseCurrencyValue.value * getBaseCurrencyRelationValue.value).toFixed(2));
  });

  const getCurrencyValue = computed(() => {
    if (data.value && data.value[currencyRelation.value]) {
      return parseFloat((data.value[currencyRelation.value] * baseCurrencyValue.value).toFixed(2));
    } else {
      return baseCurrencyValue.value;
    }
  });

  const currency = ref("usd");
  const currencyValue = ref(1);
  const currencyRelation = computed(() => {
    return `${currency.value}-${baseCurrency.value}`;
  });

  function onChangeBaseCurrencyValue(e: Event) {
    const target = e.target as HTMLInputElement;
    baseCurrencyValue.value = +target.value;
    calculateBaseCurrency(+target.value);
  }
  function calculateBaseCurrency(number: number) {
    if (data.value && baseCurrencyRelation.value) {
      currencyValue.value = number * getBaseCurrencyRelationValue.value;
    }
  }

  function onChangeCurrencyValue(e: Event) {
    const target = e.target as HTMLInputElement;
    currencyValue.value = +target.value;
    calculateCurrency(+target.value);
  }

  function calculateCurrency(number: number) {
    if (data.value && data.value[currencyRelation.value]) {
      baseCurrencyValue.value = +number.toFixed(2) * +data.value[currencyRelation.value].toFixed(2);
    }
  }

  function onSelectCurrency(e: Event) {
    if ((e.target as HTMLInputElement).value) {
      currency.value = (e.target as HTMLInputElement).value;
      baseCurrencyValue.value = getCurrencyValue.value;
    } else {
      currency.value = "usd";
    }
  }
  function onSelectBaseCurrency(e: Event) {
    if ((e.target as HTMLInputElement).value) {
      baseCurrency.value = (e.target as HTMLInputElement).value;
      currencyValue.value = getBaseCurrencyValue.value;
    } else {
      baseCurrency.value = "rub";
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
