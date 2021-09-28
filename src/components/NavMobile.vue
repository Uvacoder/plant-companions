<template>
  <header>
    <g-link
      to="/"
      class="md:mt-6 flex items-center justify-between hover:opacity-50"
      title="Back to the plant index"
    >
      <img
        src="/mark.svg"
        class="w-10 lg:w-12 ml-2"
        width="64"
        height="64"
        alt="Savvy Garden"
      />
    </g-link>
    <div class="flex items-center space-between space-x-4 md:hidden mr-3">
      <CartMini />
      <theme-switcher v-on="$listeners" :theme="theme" />
      <button
        title="Open Navigation"
        role="button"
        v-if="showNavigation === false"
        @click.prevent="openNavbarModal()"
        aria-label="Open Navigation"
      >
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="TextAlignRight"
        >
          <path d="M3 6h18m-10 6h10M6 18h15" />
        </svg>
      </button>
      <modal-close v-if="showNavigation === true" />
    </div>
  </header>
</template>

<script>
import ModalClose from "~/components/ModalClose.vue";
import CartMini from "~/components/CartMini.vue";
import ThemeSwitcher from "~/components/ThemeSwitcher.vue";

export default {
  props: {
    theme: {
      type: String,
    },
    showNavigation: {
      type: Boolean,
    },
  },
  components: {
    ThemeSwitcher,
    CartMini,
    ModalClose
  },
  methods: {
    openNavbarModal() {
      this.$emit("openNavbarModal");
    },
    closeNavbarModal() {
      this.showNavbarModal = false;
    },
  },
  watch: {
    $route(to, from) {
      this.closeNavbarModal();
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
