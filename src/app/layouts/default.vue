<template>
  <nuxt-pwa-manifest />
  <div class="wrapper">
    <navigation-ui :navigation="navigation" />
    <main class="main">
      <canvas-background-ui />
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
  useSeoMeta({
    title: "Site",
    ogTitle: "Site",
    description: "site",
    ogDescription: "site",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  });
  onMounted(() => {
    let defaultInstallEvent = null;

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      defaultInstallEvent = e;
      console.log("beforeinstallprompt", e);
    });

    setTimeout(() => {
      if (defaultInstallEvent) {
        defaultInstallEvent.prompt();
        defaultInstallEvent = null;
      }
    }, 5000);

    //const displayConfirmNotification = () => {
    //  if ("serviceWorker" in navigator) {
    //    const options = {
    //      body: "You successfully subscribed to our Notification service!",
    //      icon: "src/images/icons/app-icon-96x96.png",
    //      image: "src/images/main-image-sm.jpg",
    //      dir: "ltr",
    //      lang: "en-US",
    //      badge: "src/images/icons/app-icon-96x96.png",
    //      tag: "confirm-notification",
    //      actions: [
    //        {
    //          action: "confirm",
    //          title: "Okay",
    //          icon: "src/images/icons/app-icon-96x96.png",
    //        },
    //        {
    //          action: "cancel",
    //          title: "Cancel",
    //          icon: "src/images/icons/app-icon-96x96.png",
    //        },
    //      ],
    //    };
    //    navigator.serviceWorker.ready.then((sw) => sw.showNotification("Successfully subscribed!", options));
    //  }
    //};
    //const enableNotificationsButtons = document.querySelectorAll(".enable-notifications");
    //const askForNotificationPermission = () => {
    //  Notification.requestPermission((result) => {
    //    if (result === "granted") {
    //      displayConfirmNotification();
    //      // configurePushSubscription();
    //    }
    //  });
    //};
    //if ("Notification" in window) {
    //  for (let i = 0; i < enableNotificationsButtons.length; i++) {
    //    enableNotificationsButtons[i].style.display = "inline-block";
    //    enableNotificationsButtons[i].addEventListener("click", askForNotificationPermission);
    //  }
    //}
  });
</script>
