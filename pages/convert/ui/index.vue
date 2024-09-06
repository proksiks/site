<template>
  <!-- TODO вынести конвертер в виджет -->
  <div class="wrap">
    <breadcrumbs-ui :breadcrumbs="breadcrumbs" />
    <h1>Ковертация валют</h1>
    <form class="form">
      <div class="field">
        <div class="field-inner">
          <div class="field-input">
            <input class="input" min="0" type="number" :value="baseCurrency.value" @input="onInputBaseCurrency" />
          </div>
          <div class="field-select">
            <select class="select" v-model="baseCurrency.currency">
              <option class="select-option" :value="currency" v-for="currency in currencies">
                {{ currency.toUpperCase() }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="equalize">=></div>
      <div class="field">
        <div class="field-inner">
          <div class="field-input">
            <input class="input" min="0" type="number" :value="currency.value" @input="onInputCurrency" />
          </div>
          <div class="field-select">
            <select class="select" v-model="currency.currency">
              <option class="select-option" :value="currency" v-for="currency in currencies">
                {{ currency.toUpperCase() }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>

    <pre>
      {{ foo }}
    </pre>
  </div>
</template>

<script lang="ts" setup>
  const { data } = await useFetch<{ [key: string]: number }>("https://status.neuralgeneration.com/api/currency");
  const breadcrumbs = [{ href: "/", title: "Главная" }, { title: "Конвертация" }];
  const currencies = ["rub", "usd", "eur"];

  const baseCurrency = reactive({
    value: 1,
    currency: "rub",
  });
  const currency = reactive({
    value: 1,
    currency: "usd",
  });

  const currencyRelation = computed(() => {
    console.log(data.value);

    return `${baseCurrency.currency}-${currency.currency}`;
  });

  const getBaseCurrencyValue = computed(() => {
    if (data.value && data.value[currencyRelation.value]) {
      return data.value[currencyRelation.value];
    } else {
      return 1;
    }
  });
  function onInputBaseCurrency() {
    currency.value = parseFloat((baseCurrency.value * getBaseCurrencyValue.value).toFixed(2));
  }
  function onInputCurrency() {
    baseCurrency.value = parseFloat((currency.value / getBaseCurrencyValue.value).toFixed(2));
  }

  const foo = computed(() => {
    return {
      test: data.value && data.value[currencyRelation.value] ? data.value[currencyRelation.value] : 1,
      test2: { baseCurrency, currency },
    };
  });
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
