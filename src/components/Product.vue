<template>
  <div class="bg-white dark:bg-gray-700 rounded-md shadow-lg overflow-hidden">
    <div class="h-64 overflow-hidden block relative">
      <g-link :to="`/shop/${permalink}`">
        <g-image
          class="w-full relative z-10"
          :src="image"
          :alt="name"
          height="384"
          fit="cover"
        />
      </g-link>
    </div>
    <div class="px-6 py-4">
      <div class="flex justify-between align-center">
        <g-link :to="`/shop/${permalink}`">
          <h3 class="font-bold whitespace-nowrap" v-html="name"></h3>
        </g-link>
        <span
          class="font-semibold text-green-800 dark:text-green-600"
          v-html="`$${price}`"
        ></span>
      </div>
      <p class="text-gray-700 dark:text-gray-400 text-base" v-if="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    description: String,
    categories: Array,
    permalink: String,
    id: String,
    image: String,
    name: String,
    onAddToCart: Function,
    price: String,
  },
};
</script>
