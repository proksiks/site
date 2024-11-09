import type { UseFetchOptions } from 'nuxt/app'
export function testCustomFetch<T>(url: string | (() => string), options: UseFetchOptions<T> = {},) {
  return useFetch(url, { ...options, $fetch: useNuxtApp().$customFetch })
}