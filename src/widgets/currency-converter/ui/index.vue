<template>
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
    <div class="name">
      <div>Ковертация</div>
      <div class="equalize"><=></div>
      <div>валюты</div>
    </div>
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
</template>

<script setup lang="ts">
  import type { CurrencyConverter } from "../model";
  const props = defineProps<CurrencyConverter>();

  const currencies = ["rub", "usd", "eur"];
  const baseCurrency = ref("rub");
  const currency = ref("usd");
  const baseCurrencyValue = ref(1);
  const currencyValue = ref(1);

  const baseCurrencyRelation = computed(() => `${baseCurrency.value}-${currency.value}`);
  const currencyRelation = computed(() => `${currency.value}-${baseCurrency.value}`);

  const getBaseCurrencyRelationValue = computed(() => {
    if (baseCurrencyRelation.value && props.data) {
      return props.data[baseCurrencyRelation.value] as number;
    } else {
      return 1;
    }
  });
  const getCurrencyRelationValue = computed(() => {
    if (currencyRelation.value && props.data) {
      return props.data[currencyRelation.value] as number;
    } else {
      return 1;
    }
  });

  const getBaseCurrencyValue = computed(() => {
    return parseFloat((baseCurrencyValue.value * getBaseCurrencyRelationValue.value).toFixed(2));
  });

  const getCurrencyValue = computed(() => {
    return parseFloat((currencyValue.value * getCurrencyRelationValue.value).toFixed(2));
  });

  function onChangeBaseCurrencyValue(e: Event) {
    const target = e.target as HTMLInputElement;
    baseCurrencyValue.value = +target.value;
    currencyValue.value = getBaseCurrencyValue.value;
  }

  function onChangeCurrencyValue(e: Event) {
    const target = e.target as HTMLInputElement;
    currencyValue.value = +target.value;
    baseCurrencyValue.value = getCurrencyValue.value;
  }

  function onSelectBaseCurrency(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.value === currency.value) {
      baseCurrency.value = "rub";
      currencyValue.value = 1;
    } else {
      baseCurrency.value = target.value;
      currencyValue.value = getBaseCurrencyValue.value;
    }
  }

  function onSelectCurrency(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.value === baseCurrency.value) {
      currency.value = "rub";
      baseCurrencyValue.value = 1;
    } else {
      currency.value = target.value;
      baseCurrencyValue.value = getCurrencyValue.value;
    }
  }
</script>

<style lang="scss" scoped>
  @import "index.scss";
</style>
