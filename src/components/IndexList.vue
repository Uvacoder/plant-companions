<template>
  <div>
    <ul
      v-if="data.length"
      class="list-layout list-none mt-4 md:mt-0 flex items-start justify-start flex-wrap"
    >
      <li
        v-for="edge in data"
        :key="edge.node.id"
        class="mb-3 lg:mb-5 mr-3 lg:mb-5"
        :class="edge.node.type"
      >
        <g-link
          :to="`${edge.node.path}`"
          class="block py-0 md:py-2 px-2 md:px-3 lg:px-4 bg-white rounded-sm md:rounded-md shadow-xl text-base lg:text-xl"
        >
          <span>{{ edge.node.title }}</span>
        </g-link>
      </li>
    </ul>
    <NoPlants v-else />
  </div>
</template>
<script>
import NoPlants from "./NoPlants";

export default {
  props: {
    data: {
      required: true,
      type: [Object, Array],
    },
  },
  components: {
    NoPlants,
  },
};
</script>
