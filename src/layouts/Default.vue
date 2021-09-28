<template>
  <div>
    <div class="md:h-screen md:overflow-hidden layout app">
      <NavBar @setTheme="setTheme" :theme="this.theme" />
      <main class="relative z-30 w-full h-screen overflow-hidden overflow-y-scroll">
        <div v-if="showTop" class="relative px-4 pt-4 md:px-10 md:pt-10">
          <slot name="main-top" />
          <cart
            v-if="showCart"
            class="hidden md:block absolute bottom-0 right-0 mt-20 mr-5"
          />
        </div>
        <div class="p-4 md:p-10 h-full">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Cart from "../components/Cart";
import NavBar from "../components/NavBar";

export default {
  name: "Layout",
  components: { Cart, NavBar },
  props: {
    showCart: Boolean,
    showTop: Boolean,
  },
  data: function () {
    return {
      theme: "light",
    };
  },
  methods: {
    setTheme(mode) {
      this.theme = mode;
    },
  },
};
</script>
<style>
html {
  overflow: hidden;
}
body {
  background: #eff0fb;
}
main:before {
  content: "";
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.1;
  background-image: url(/bg.jpg);
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: 400px;
  z-index: -1;
}
a {
  @apply transition duration-500 ease-in-out relative;
  &:focus {
    bottom: -1px;
  }
}

@media (max-width: 480px) {
}
@media (min-width: 640px) and (max-width: 768px) {
  div.app {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "header main";
  }
  .app header {
    grid-area: header;
    grid-column: 100px;
    grid-row: 100px;
    height: 100vh;
    width: 100px;
  }
  .app main {
    grid-area: main;
  }
}
@media (min-width: 768px) {
  .app {
    display: grid;
    grid-template-columns: 100px 1fr;
  }
  .flex > header {
    width: 100px;
  }
}
@media (min-width: 1024px) {
  header {
    height: 100vh;
  }
}

body[data-theme="dark"] main:before {
  opacity: 0.03;
}
body[data-theme="dark"] {
  @apply bg-gray-800 text-white;
}
</style>
