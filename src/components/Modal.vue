<template>
  <Transition name="fade">
    <div
      v-if="showModal"
      class="fixed inset-0 w-full h-full overflow-y-auto overflow-x-hidden bg-opacity-50 flex items-center justify-center dark:bg-black bg-red-700 z-1000"
      @click.self="close"
    >
      <div class="relative w-full h-full dark:bg-black bg-white bg-opacity-90 p-6 mt-5">
        <h2 class="absolute top-20 -mt-1 text-gray-900 font-bold text-3xl">Explore</h2>
        <button
          aria-label="close"
          class="border border-gray-300 absolute top-20 -mt-1 z-50 mr-5 right-0 text-xl bg-white rounded-full text-gray-700 dark:text-gray-600 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white dark:hover:text-black h-8 w-8 md:h-12 md:w-12 focus:outline-none"
          @click.prevent="close"
        >
          &times;
        </button>
        <div class="overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showModal: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
