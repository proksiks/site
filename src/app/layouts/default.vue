<template>
  <div class="wrapper">
    <vite-pwa-manifest />
    <navigation-ui :navigation="navigation" />
    <main class="main">
      <div class="screen">
        <div class="screen-inner">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  const navigation = [
    {
      id: 1,
      title: "Главная",
      href: "/",
      icon: "bx-grid-alt",
    },
    {
      id: 2,
      title: "Конвертация",
      href: "/convert/",
      icon: "bxs-devices",
    },
  ];
  useHead({
    meta: [{ name: "description", content: "Site." }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/site/favicon.ico" },
      { rel: "stylesheet", href: "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" },
    ],
  });
  useSeoMeta({
    title: "Site",
    ogTitle: "Site",
    description: "site",
    ogDescription: "site",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  });
  onMounted(() => {
    console.log("onMounted");

    const displayConfirmNotification = () => {
      if ("serviceWorker" in navigator) {
        const options = {
          body: "You successfully subscribed to our Notification service!",
          icon: "src/images/icons/app-icon-96x96.png",
          image: "src/images/main-image-sm.jpg",
          dir: "ltr",
          lang: "en-US",
          badge: "src/images/icons/app-icon-96x96.png",
          tag: "confirm-notification",
          actions: [
            {
              action: "confirm",
              title: "Okay",
              icon: "src/images/icons/app-icon-96x96.png",
            },
            {
              action: "cancel",
              title: "Cancel",
              icon: "src/images/icons/app-icon-96x96.png",
            },
          ],
        };
        navigator.serviceWorker.ready.then((sw) => sw.showNotification("Successfully subscribed!", options));
      }
    };
    const enableNotificationsButtons = document.querySelectorAll(".enable-notifications");
    const askForNotificationPermission = () => {
      Notification.requestPermission((result) => {
        if (result === "granted") {
          displayConfirmNotification();
          // configurePushSubscription();
        }
      });
    };
    if ("Notification" in window) {
      for (let i = 0; i < enableNotificationsButtons.length; i++) {
        enableNotificationsButtons[i].style.display = "inline-block";
        enableNotificationsButtons[i].addEventListener("click", askForNotificationPermission);
      }
    }
  });
</script>
