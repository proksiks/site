export default defineNuxtPlugin(() => {
  const $customFetch = $fetch.create({
    //baseURL: 'https://jsonplaceholder.typicode.com',
    onRequest({ request, options, error }) {
      //console.log(1);
    },
    onResponse({ response, options, error }) {
      //if (response.status === 401) {
      //  navigateTo('/')
      //}
      //console.log(2);
      
    },
    onResponseError({ response }) {
      //if (response.status === 401) {
      //  navigateTo('/')
      //}
      //console.log(3);
      
    },
  })
  // Expose to useNuxtApp().$customFetch
  return {
    provide: {
      customFetch: $customFetch,
    },
  }
})