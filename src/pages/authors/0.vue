<template>
  <div class="my-article">
    <nuxt-link class="my-article-back" to="/authors/">Назад</nuxt-link>
    <div class="my-article-content">
      <div class="my-article-intro">
        <NuxtPicture
          class="my-article-image"
          format="avif,webp"
          placeholder
          loading="lazy"
          sizes="xs:440px sm:720px"
          fit="cover"
          :img-attrs="{ alt: '', fetchpriority: 'high' }"
          src="/images/photos/main.jpg"
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
    max-width: 45rem;
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
    width: 45rem;
    height: 28.125rem;
    max-width: 100%;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 0.5rem;
    text-align: center;
    &:deep(*) {
      max-width: 100%;
      border-radius: 0.5rem;
    }
  }
  .my-article-author {
    display: block;
    text-align: center;
    margin-top: 0.625rem;
  }
</style>
