<template>
  <!-- TODO вынести конвертер в виджет -->
  <div class="box">
    <div class="wrap">
      <div class="buttons">
        <button-ui class="button" to="/">Главная</button-ui>
        <button-ui class="button" to="/convert/">Конвертер</button-ui>
      </div>
      <h2>1 Российский рубль равно</h2>
      <p>0,011 Доллар США</p>

      <form class="form">
        <div class="field">
          <div class="field-inner">
            <div class="field-input">
              <input class="input" min="0" type="number" />
            </div>
            <div class="field-select">
              <select class="select" name="" id="">
                <option value="value">Российский рубль</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="field-inner">
            <div class="field-input">
              <input class="input" min="0" type="number" />
            </div>
            <div class="field-select">
              <select class="select" name="" id="">
                <option value="value">Доллар США</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
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
    color: var(--white);
    height: 100%;
  }
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
