<template>
  <button
    class="bg-gray-100 dark:bg-gray-700 text-gray-900 rounded-l-md dark:text-white py-2 md:py-0 block text-sm hover:bg-grey-300 h-full px-2 md:px-5 focus:outline-none"
    :title="title"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
