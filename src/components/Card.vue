<template>
  <div class="card">
    <div>
      <h2
        class="text-xl text-gray-700 dark:text-gray-100 md:text-2xl lg:text-3xl font-bold mb-3"
        v-if="title"
      >
        {{ title }}
      </h2>
      <p class="text-lg text-gray-800 dark:text-gray-300" v-if="content">{{ content }}</p>
      <p class="mt-3">
        <slot />
      </p>
    </div>
    <g-image v-if="image" :src="image" class="w-20 h-20" />
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
    image: {
      required: false,
      type: String,
    },
  },
};
</script>
<style scoped>
.card {
  @apply flex items-start justify-start transition-all duration-500 ease-in-out  transform hover:scale-110 bg-white rounded-md shadow-lg p-10 border border-solid border-gray-300;
}
.card img {
  @apply ml-10;
}
.card:hover {
  @apply bg-white from-white via-white;
}
body[data-theme="dark"] .card {
  @apply opacity-75 hover:opacity-100 dark:bg-gray-900 border-gray-900 rounded-md shadow-xl p-10;
}
.card a {
  @apply dark:text-white;
}
body main {
  @apply bg-gray-900;
}
</style>
