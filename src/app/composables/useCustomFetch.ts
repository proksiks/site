const nuxt = useNuxtApp();

const options = {
  headers: { Accept: "application/json" },
  transform(input: {}) {
    return { data: input, fetchedAt: new Date() };
  },
  getCachedData: cachedData,
};

function cachedData(key: string) {
  const data = nuxt.payload.data[key] || nuxt.static.data[key];
  if (!data) return;

  const expirationDate = new Date(data.fetchedAt);
  expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
  const isExpired = expirationDate.getTime() < Date.now();
  if (isExpired) return;

  return data;
}

export function useCustomFetch(url: string | (() => string)) {
  const urlValue = typeof url === 'function' ? url() : url;
  return useFetch(urlValue, { ...options, $fetch: useNuxtApp().$customFetch, key: urlValue });
}