<template>
  <div class="h-full">
    <nav-desktop v-on="$listeners" :theme="theme" />
    <nav-mobile @openNavbarModal="openNavbarModal" v-on="$listeners" :theme="theme" />
    <modal :showModal="this.showNavbarModal" @close="closeNavbarModal">
      <nav-modal />
    </modal>
  </div>
</template>

<script>
import NavDesktop from "~/components/NavDesktop.vue";
import NavMobile from "~/components/NavMobile.vue";
import Modal from "~/components/Modal.vue";
import NavModal from "~/components/NavModal.vue";
export default {
  props: {
    theme: {
      type: String,
    },
  },
  components: {
    NavDesktop,
    NavMobile,
    Modal,
    NavModal,
  },
  data: function () {
    return {
      showNavbarModal: false,
    };
  },
  methods: {
    openNavbarModal() {
      this.showNavbarModal = true;
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
