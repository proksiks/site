<template>
  <!--  TODO LIST -->
  <div>
    <nuxt-link class="back" to="/">Назад</nuxt-link>
    <form>
      <input type="text" placeholder="Новая задача" />
      <button>Добавить</button>
    </form>
    <ul>
      <li>
        <div>
          <input type="checkbox" />
          <span>Купить молоко</span>
          <button>Удалить</button>
        </div>
      </li>
    </ul>
  </div>
</template>
