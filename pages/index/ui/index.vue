<template>
  <div class="box">
    <div class="wrap">
      <div class="info">
        <div class="buttons">
          <button-ui class="button" to="/">Главная</button-ui>
          <button-ui class="button" to="/convert/">Конвертер</button-ui>
        </div>
        <div>
          <select class="select">
            <option class="select-option" value="rub">RUB</option>
            <option class="select-option" value="usd">USD</option>
            <option class="select-option" value="eur">EUR</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  //const { data } = await useFetch("https://status.neuralgeneration.com/api/currency");
  //const baseCurrency = ref("rub");
  
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
</style>
