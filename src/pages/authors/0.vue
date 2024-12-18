<template>
  <div class="my-article">
    <div class="my-article-content">
      <div class="my-article-box">
        <nav class="my-article-nav">
          <button-ui class="my-article-nav__button" to="/starships/9/">
            <template #icon>
              <icon name="icon:next" />
            </template>
          </button-ui>
        </nav>
        <figure class="my-article-intro">
          <NuxtPicture
            class="my-article-image"
            format="avif,webp"
            loading="lazy"
            fit="cover"
            :img-attrs="{ alt: '', fetchpriority: 'high' }"
            src="/images/photos/main.jpg"
          />
          <figcaption class="my-article-author">Хлюпнев Владимир</figcaption>
        </figure>
        <h1>Мой Путь Как Разработчика</h1>
        <div>
          <h2>Четыре Года В Мире Программирования</h2>
          <p>
            Программирование стало важной частью моих дней. Начав свой путь в 14 лет, я быстро осознал, насколько важным и интересным может быть этот процесс. 
            За четыре года работы в этой сфере, я успел не только освоить основные технологии, но и сформировать свое понимание того, что значит быть разработчиком. 
            Сегодня я расскажу о своем опыте, используемых технологиях и о том, что мне удалось достичь за это время.
          </p>
          <h2>
            Как Я Начал Свой Путь
          </h2>
          <p>
            В подростковые годы я часто помогал своим друзьям со сборкой компьютеров.
            Развёртыванием серверов (CS 1.6, Minecraft), созданием сайтов на различных конструкторах,
            видимо с тех лет я начал заниматься коммерческой разработкой на дворовом уровне.
            Тогда то я и 
            Спустя годы я начал обучение в ЖД университете, где научился взаимодействовать с людьми и решать казалось бы не решаемые задачи.
          </p>
          <p>
            Мой путь в программировании начался с простого интереса к технологиям.
            Я всегда был любопытным и часто задавался вопросами о том, как работают сайты и приложения.
            Увидев, как другие создают цифровые продукты, я решил, что хочу быть одним из них. 
            В то время я провел много часов за чтением статей и просмотром обучающих видео на YouTube. 
            Я изучал основы HTML и CSS, которые стали моими первыми шагами в мир веб-разработки.
          </p>
          <p>
            Первый проект, который я создал, был простым одностраничным сайтом. 
            Я помню, как мне было интересно изменить дизайн, добавить новые элементы и посмотреть, как мои изменения отражаются на странице. 
            Этот первый опыт был настолько вдохновляющим, что я понял: программирование — это не просто профессия, но и увлекательное занятие, где я могу реализовывать свои идеи и визуализировать свои мысли.
          </p>

          <h2>
            Основные Технологии В Моей Работе
          </h2>

          <p>
            Со временем я расширил свои знания и теперь использую несколько основных технологий. 
            Важнейшими из них для меня стали Vue.js, TypeScript, SCSS и HTML. 
            Каждая из этих технологий играет свою уникальную роль в моих проектах.
          </p>

          <h3>
            Vue.js: Фронтенд на Высоком Уровне
          </h3>

          <p>
            Vue.js – это один из самых популярных фреймворков для создания интерфейсов, который я использую в своей работе. 
            Он позволяет создавать реактивные пользовательские интерфейсы со сложной логикой, сохраняя при этом простоту и читабельность кода. 
            Я оценил Vue за его подход к компонентам, что позволило мне разбивать большие приложения на более мелкие и управляемые блоки.
          </p>

          <p>
            Работа с Vue.js позволила мне не только ускорить процесс разработки, но и повысить качество готового продукта. 
            Благодаря реактивности фреймворка, пользовательский интерфейс мгновенно обновляется при изменении состояния приложения. 
            Это делает взаимодействие с приложением более плавным и интерактивным.
          </p>

          <h3>
            TypeScript: Безопасность и Типизация
          </h3>

          <p>
            TypeScript является надстройкой над JavaScript, которая добавляет статическую типизацию. 
            Она сыграла важную роль в моем подходе к разработке. 
            Использование TypeScript дало мне возможность выявлять ошибки на этапе компиляции, что значительно снижает количество багов в конечном продукте. 
            Это особенно важно в крупных проектах, где работа ведется несколькими разработчиками.
          </p>

          <p>
            TypeScript также имеет хорошую интеграцию с фреймворком Vue, что позволяет легко использовать типизированные переменные и интерфейсы. 
            Это делает код более понятным и обеспечивает лучшую поддержку со стороны инструментов разработки. 
            Благодаря этому я чувствую себя более уверенным в написании кода, так как явно понимаю, какой тип данных ожидается в каждом случае.
          </p>

          <h3>
            SCSS: Стиль на Высшем Уровне
          </h3>

          <p>
            Когда речь заходит о стилизации, я предпочитаю использовать SCSS. 
            Это расширение CSS, которое добавляет поддержку переменных, вложений, миксинов и множества других полезных инструментов, что делает написание стилей более эффективным и организованным. 
            С помощью SCSS я могу создавать чистые и структурированные таблицы стилей, которые легко поддерживать.
          </p>

          <p>
            SCSS также отлично работает с Vue.js, что позволяет писать стили на уровне компонентов. 
            Это значит, что стили каждого компонента могут быть изолированны и независимы от других. 
            Такой подход не только упрощает разработку, но и повышает производительность приложения в целом.
          </p>

          <h3>
            HTML: Основы Веб-Разработки
          </h3>

          <p>
            HTML, конечно же, остаётся основой всей веб-разработки. 
            Без него невозможно создать ни один сайт или приложение. 
            Я всегда придерживаюсь принципов семантики и доступности при написании кода HTML. 
            Это позволяет не только улучшать SEO-позиции сайта, но и делать его доступным для людей с разными возможностями.
          </p>

          <p>
            Соблюдение стандартов HTML не только помогает улучшить видимость сайта в поисковых системах, но и делает его более удобным для пользователей. 
            Я также активно использую возможности HTML5, что позволяет мне интегрировать различные мультимедиафункции и улучшать пользовательский опыт.
          </p>

          <h2>
            Проекты и Достижения
          </h2>

          <p>
            За четыре года я работал над множеством различных проектов, от небольших сайтов до крупных веб-приложений.
            Каждый проект был уникален и представлял собой новые вызовы, которые я с увлечением принимал.
          </p>

          <h3>
            Примеры Успешных Проектов
          </h3>

          <p>
            Одним из самых значительных моих проектов стал сайт для средней компании численностью чуть больше 500 человек, занимающейся разработкой программного обеспечения различной сложности. 
            В этом проекте мне пришлось использовать все навыки, которые я освоил: разработка на Vue.js, работа с TypeScript для управления состоянием приложения и стиль через SCSS. 
            Это было захватывающе и дало мне возможность углубиться в детали проектирования и разработки интерфейсов.
          </p>

          <p>
            Проект был выполнен в сроки и в рамках бюджета, что дало мне возможность сосредоточиться только на основном функционале. 
            Этот опыт стал важным этапом в моем профессиональном развитии, уверив меня в том, что я выбрал правильный путь.
          </p>

          <h3>
            Работа В Команде
          </h3>

          <p>
            Работа в команде также сыграла важную роль в моем развитии как разработчика. 
            Совместная работа с другими программистами научила меня тому, как правильно распределять задачи и взаимодействовать с коллегами.
            Мне приходилось работать над проектами, где мы использовали системы контроля версий, такие как Git, что дало мне возможность понять принцип работы с кодом в команде.
          </p>

          <p>
            Кроме того, я научился анализировать и исправлять ошибки других, а также получать обратную связь на свою работу. 
            Это позволило мне не только улучшить качество своего кода, но и развить коммуникативные навыки.
          </p>

          <h3>
            Постоянное Обучение и Саморазвитие
          </h3>

          <p>
            Мир технологий постоянно меняется, и чтобы оставаться конкурентоспособным, я понимаю, что непрерывное обучение – это необходимость. 
            Я уделяю время каждому новому тренду и стараюсь следить за последними новостями в разработке. 
            Я читаю статьи, смотрю вебинары и принимаю участие в онлайн-курсах. 
            Это помогает мне оставаться в курсе последних изменений и находить новые эффективные подходы к решению задач.
          </p>

          <h3>
            Участие в Сообществе
          </h3>

          <p>
            Не менее важным аспектом моего саморазвития является участие в разработческих сообществах. 
            Я посещаю конференции и митапы, где могу обменяться опытом с другими разработчиками, обсудить новые технологии и получить вдохновение для своих проектов. 
            Это общение не только расширяет мой кругозор, но и позволяет находить единомышленников, с которыми я могу работать над совместными проектами.
          </p>

          <h3>
            Просмотр Кода Других Разработчиков
          </h3>

          <p>
            Изучение чужого кода также дает мне возможность увидеть различные подходы к решению одной и той же задачи. 
            Это расширяет мои горизонты и помогает находить более элегантные решения. 
            Я часто просматриваю популярные репозитории на GitHub, изучаю архитектуру проектов и оптимизацию кода.
          </p>

          <h3>
            Заключение
          </h3>

          <p>
            Четыре года, которые я провел в мире программирования, стали для меня не только временем учёбы, но и оппортунистичным опытом. 
            Я прошел путь от новичка до более уверенного разработчика, научившись использовать такие технологии, как Vue.js, TypeScript, SCSS и HTML. 
            Я научился работать в команде, решать знакомствами с новыми подходами и искать решения сложных задач.
          </p>

          <p>
            Каждый проект, над которым я работал, принес мне новые знания и опыт. 
            Я понимаю, что путь разработчика – это постоянное обучение и самосовершенствование. 
            Я готов к новым вызовам и возможностям, которые откроет передо мной будущее в этой захватывающей сфере.
          </p>

          <p>Со писком проектов в которых я принимал непосредственное участие можно увидеть тут <nuxt-link to="/projects">ссылка</nuxt-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .my-article-nav {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.625rem;
  }
  .my-article-nav__button {
    display: inline-block;
    @media (max-width: 480px) {
      padding: 1rem 0.75rem;
    }
  }

  .my-article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .my-article-intro {
    margin: 0;
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
    width: 33.75rem;
    height: 21.0625rem;
    max-width: 100%;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 0.5rem;
    text-align: center;
    @media (max-width: 480px) {
      height: 12.5rem;
      width: 100%;
    }
    &:deep(*) {
      max-width: 100%;
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
