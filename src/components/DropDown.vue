<template>
  <div class="relative">
    <button
      class="relative z-10 bg-white dark:bg-gray-700 shadow-xl py-2 md:py-0 px-3 md:px-5 rounded-md h-full flex items-center focus:outline-none"
      :class="{
        'bg-gray-200 dark:bg-gray-900 text-gray-600 dark:text-gray-400': isVisible,
      }"
      @click="toggleDropdown"
    >
      <span class="mr-2">{{ label }}</span>

      <svg
        v-if="isVisible"
        class="hidden md:inline-block stroke-current w-4 h-4"
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 15V3M3.75 8.25L9 3l5.25 5.25"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else
        class="hidden md:inline-block stroke-current w-4 h-4"
        width="18"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 15V3M3.75 9.75L9 15l5.25-5.25"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <ul
      class="bg-gray-200 dark:bg-gray-900 p-4 flex flex-col space-y-2 rounded-md shadow-xl absolute z-50 top-0 right-0 mt-12 w-40 text-left"
      v-on-clickaway="hideDropdown"
      v-if="isVisible"
    >
      <li class="block w-full" v-for="(item, i) in data" :key="i">
        <button
          class="bg-white dark:bg-gray-800 rounded-md block p-3 w-full shadow-sm text-left"
          @click.prevent="setDropdown(item)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "DropDown",
  mixins: [clickaway],
  data: function () {
    return {
      isVisible: false,
    };
  },
  props: {
    label: {
      required: true,
      type: String,
    },
    data: {
      required: true,
      type: [Object, Array],
    },
  },
  methods: {
    toggleDropdown() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
    },
    setDropdown(item) {
      this.$emit("update-list", item.value);
    },
  },
};
</script>
<style></style>
