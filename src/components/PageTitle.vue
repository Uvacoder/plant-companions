<template>
  <div>
    <h2
      class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none dark:text-white"
      v-if="title"
    >
      {{ title }}
    </h2>
    <p class="text-lg text-gray-800 dark:text-gray-300" v-if="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
  },
};
</script>
