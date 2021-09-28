<template>
  <button
    aria-label="close"
    class="absolute mt-10 z-50 mr-2 right-0 text-xl bg-white rounded-full text-gray-700 dark:text-gray-600 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white dark:hover:text-black h-8 w-8 md:h-12 md:w-12 focus:outline-none"
    @click.prevent="close"
  >
    &times;
  </button>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
