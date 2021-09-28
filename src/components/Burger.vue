<template>
  <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
    <slot>
      <button type="button" title="Menu">
        <svg
              class="fill-current w-4 h-4"
              viewBox="0 0 469.333 469.333"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M437.332 192h-160V32c0-17.664-14.336-32-32-32H224c-17.664 0-32 14.336-32 32v160H32c-17.664 0-32 14.336-32 32v21.332c0 17.664 14.336 32 32 32h160v160c0 17.664 14.336 32 32 32h21.332c17.664 0 32-14.336 32-32v-160h160c17.664 0 32-14.336 32-32V224c0-17.664-14.336-32-32-32zm0 0"
              />
            </svg>
      </button>
    </slot>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";

export default {
  // data: () => ({
  //     isBurgerActive: false
  // }),
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>
<style>
button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}
</style>