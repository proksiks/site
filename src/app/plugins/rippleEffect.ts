export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('ripple', {
        mounted(element, binding, globalThis) {
            element.style.overflow = "hidden";
            element.addEventListener("click", function (e: MouseEvent) {
                const target = element.getBoundingClientRect();

                const posX = e.pageX - target.left;
                const posY = e.pageY - target.top;

                let buttonWidth = target.width;
                let buttonHeight = target.height;
                buttonWidth > buttonHeight ? (buttonHeight = buttonWidth) : (buttonWidth = buttonHeight);

                let spanEl = document.createElement("span");
                spanEl.className = "ripple";
                spanEl.style.width = buttonWidth + "px";
                spanEl.style.height = buttonHeight + "px";
                spanEl.style.top = posY - buttonHeight / 2 + "px";
                spanEl.style.left = posX - buttonWidth / 2 + "px";
                spanEl.classList.add("ripple-effect");

                element.appendChild(spanEl);

                setTimeout(() => {
                    spanEl.remove();
                }, 500);
            }, false);

        }
    });
});