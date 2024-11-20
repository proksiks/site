<template>
  <div class="my-article">
    <div class="my-article-content">
      <div class="my-article-box">
        <nav class="pagination-nav">
          <button-ui class="pagination-nav__button pagination__nav--next" to="/starships/3/">
            <template #icon>
              <icon name="icon:next" />
            </template>
          </button-ui>
        </nav>
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
  </div>
</template>

<style lang="scss" scoped>
  .pagination-nav {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.625rem;
  }
  .pagination-nav__button {
    display: inline-block;
    @media (max-width: 480px) {
      padding: 1rem 0.75rem;
    }
  }
  .my-article-intro {
    margin-bottom: 1.25rem;
  }
  .my-article-box {
    position: relative;
    padding: 1.25rem;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--dark-2);
      opacity: 0.5;
      filter: blur(0.5rem);
      z-index: -1;
      border-radius: 0.5rem;
    }
  }
  .my-article-box * {
    position: relative;
  }
  .my-article-content {
    position: relative;
    max-width: 45rem;
    margin: 0 auto;
    border-radius: 0.5rem;
  }
  .my-article-back {
    //  position: sticky;
    //  top: 0.625rem;
    display: block;
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
  .my-article-image {
    position: relative;
    display: block;
    width: 680px;
    height: 18rem;
    max-width: 100%;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 0.5rem;
    text-align: center;
    &:deep(*) {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }
  .my-article-author {
    display: block;
    text-align: center;
    margin-top: 0.625rem;
  }
</style>
