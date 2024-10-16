<template>
  <div class="wrapper">
    <navigation-ui />
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
  import Lenis from "@studio-freight/lenis";
  import { useWindowSize } from "@vueuse/core";
  useSeoMeta({
    title: "Site",
    ogTitle: "Site",
    description: "site",
    ogDescription: "site",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
  });

  const { width } = useWindowSize();

  const lenis = new Lenis({
    duration: 1.2,
    lerp: 0.05,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  onMounted(() => {
    if (width.value > 1024) {
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  });



//   <template>
//   <button v-if="deferredPrompt" @onClick="promptInstall">
//     Add to home screen
//   </button>
// </template>
// 

//   import { Component, Vue } from "vue-property-decorator";
//   import { BeforeInstallPromptEvent } from "vue-pwa-install";
// 
//   @Component({})
//   export default class App extends Vue {
//     deferredPrompt: BeforeInstallPromptEvent | void;
// 
//     promptInstall() {
//       // Show the prompt:
//       this.deferredPrompt.prompt();
// 
//       // Wait for the user to respond to the prompt:
//       this.deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === "accepted") {
//           console.log("User accepted the install prompt");
//         } else {
//           console.log("User dismissed the install prompt");
//         }
// 
//         this.deferredPrompt = null;
//       });
//     }
// 
//     created() {
//       this.$on("canInstall", (event: BeforeInstallPromptEvent) => {
//         // Prevent Chrome 67 and earlier from automatically showing the prompt:
//         event.preventDefault();
// 
//         // Stash the event so it can be triggered later:
//         this.deferredPrompt = event;
//       });
//     }
//   }

  //onMounted(() => {
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
  //});
</script>
