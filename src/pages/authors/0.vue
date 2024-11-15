<template>
  <div class="my-article">
    <nuxt-link class="my-article-back" to="/authors/">Назад</nuxt-link>
    <div class="my-article-content">
      <div class="my-article-intro">
        <img
          class="my-article-image"
          src="/images/photos/main.jpg"
          width="960"
          height="440"
          alt="image"
          loading="lazy"
        />
      </div>
      <nuxt-link :to="`/authors/0/`" class="my-article-author"> Хлюпнев Владимир </nuxt-link>
      <h1>Продуктовая разработка</h1>
      <p>Это ещё заготовка проекта, тут мои мысли, задумки, наработки</p>
      <p>
        Тут должна быть большая красочная история описывающая мою жизнь и мою деятельность, что я за человек и чем
        занимаюсь.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .my-article-content {
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: var(--dark-2);
  }
  .my-article-back {
    //  position: sticky;
    //  top: 0.625rem;
    display: block;
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
  .my-article-image {
    display: block;
    max-width: 100%;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 0.5rem;
  }
  .my-article-author {
    display: block;
    text-align: center;
    margin-top: 0.625rem;
  }
</style>
