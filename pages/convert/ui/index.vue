<template>
  <!-- TODO вынести конвертер в виджет -->
  <div class="wrap">
    <breadcrumbs-ui :breadcrumbs="breadcrumbs" />
    <h1>Ковертация валют</h1>
    <form class="form">
      <div class="field">
        <div class="field-inner">
          <div class="field-input">
            <input class="input" min="0" type="number" v-model="firstCurrencyValue" />
          </div>
          <div class="field-select">
            <select class="select" v-model="firstCurrency">
              <option class="select-option" :value="currency" v-for="currency in currencies">
                {{ currency.toUpperCase() }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="field-inner">
          <div class="field-input">
            <input class="input" min="0" type="number" v-model="secondCurrencyValue" />
          </div>
          <div class="field-select">
            <select class="select" v-model="secondCurrency">
              <option class="select-option" :value="currency" v-for="currency in currencies">
                {{ currency.toUpperCase() }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>

    {{ firstCurrencyValue }}
    {{ secondCurrencyValue }}
  </div>
</template>

<script lang="ts" setup>
  const breadcrumbs = [{ href: "/", title: "Главная" }, { title: "Конвертация" }];

  const currencies = ["rub", "usd", "eur"];
  const firstCurrencyValue = ref(0);
  const secondCurrencyValue = ref(0);
  
  const firstCurrency = ref("rub");
  const secondCurrency = ref("usd");
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
