<template>
  <div>
    <nuxt-link class="back" to="/articles">Назад</nuxt-link>
    <div class="page-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque amet harum in sit, praesentium, quo tempora quas quae expedita eum temporibus eaque incidunt pariatur facere minima. Necessitatibus, adipisci facere.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam dolores sint ratione quaerat nulla, ut adipisci tempora. At aperiam iste numquam ut consequuntur accusantium suscipit animi id aut asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque amet harum in sit, praesentium, quo tempora quas quae expedita eum temporibus eaque incidunt pariatur facere minima. Necessitatibus, adipisci facere.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam dolores sint ratione quaerat nulla, ut adipisci tempora. At aperiam iste numquam ut consequuntur accusantium suscipit animi id aut asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque amet harum in sit, praesentium, quo tempora quas quae expedita eum temporibus eaque incidunt pariatur facere minima. Necessitatibus, adipisci facere.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam dolores sint ratione quaerat nulla, ut adipisci tempora. At aperiam iste numquam ut consequuntur accusantium suscipit animi id aut asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque amet harum in sit, praesentium, quo tempora quas quae expedita eum temporibus eaque incidunt pariatur facere minima. Necessitatibus, adipisci facere.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam dolores sint ratione quaerat nulla, ut adipisci tempora. At aperiam iste numquam ut consequuntur accusantium suscipit animi id aut asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque amet harum in sit, praesentium, quo tempora quas quae expedita eum temporibus eaque incidunt pariatur facere minima. Necessitatibus, adipisci facere.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam dolores sint ratione quaerat nulla, ut adipisci tempora. At aperiam iste numquam ut consequuntur accusantium suscipit animi id aut asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque amet harum in sit, praesentium, quo tempora quas quae expedita eum temporibus eaque incidunt pariatur facere minima. Necessitatibus, adipisci facere.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam dolores sint ratione quaerat nulla, ut adipisci tempora. At aperiam iste numquam ut consequuntur accusantium suscipit animi id aut asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque amet harum in sit, praesentium, quo tempora quas quae expedita eum temporibus eaque incidunt pariatur facere minima. Necessitatibus, adipisci facere.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam dolores sint ratione quaerat nulla, ut adipisci tempora. At aperiam iste numquam ut consequuntur accusantium suscipit animi id aut asperiores.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque amet harum in sit, praesentium, quo tempora quas quae expedita eum temporibus eaque incidunt pariatur facere minima. Necessitatibus, adipisci facere.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam dolores sint ratione quaerat nulla, ut adipisci tempora. At aperiam iste numquam ut consequuntur accusantium suscipit animi id aut asperiores.
      <!--<nuxt-link :to="`/authors/${authorPost?.id}`">
        {{ authorPost?.name }}
      </nuxt-link>
      <h1>
        {{ detailPost?.title }}
      </h1>
      <p>
        {{ detailPost?.body }}
      </p>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
  //import type { Post } from "./model";
  //const api = "https://jsonplaceholder.typicode.com";
  //const route = useRoute();

  //const { data: post } = await useAsyncData<Post[]>("posts", () => $fetch(`${api}/posts?id=${route.params.id}`));

  //const detailPost = computed(() => {
  //  if (post.value) {
  //    return post.value[0];
  //  }
  //});

  //const { data: user } = await useAsyncData<Post[]>("users", () =>
  //  $fetch(`${api}/users?id=${detailPost.value?.userId}`)
  //);

  //const authorPost = computed(() => {
  //  if (user.value) {
  //    return user.value[0];
  //  }
  //});
</script>

<style lang="scss" scoped>
  .back {
    display: block;
    margin: 1rem 0;
  }
  .page-content {
    background-color: var(--dark);
    padding: 0.625rem;
    border-radius: 0.5rem;
  }
</style>
