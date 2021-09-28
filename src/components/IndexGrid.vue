<template>
  <div>
    <ul
      v-if="data.length"
      class="plants list-none grid pb-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
    >
      <!-- <li
        v-for="edge in data"
        :key="edge.node.id"
        class="overflow-hidden rounded-md relative border md:border-0 border-solid border-gray-900 shadow-xl md:shadow-none"
        :style="`background: url(https://res.cloudinary.com/friendorfoe/image/upload/c_fill,h_116,w_432/${edge.node.title
          .replace(/\s+/g, '-')
          .toLowerCase()}.jpg);`"
      > -->
      <li
        v-for="edge in data"
        :key="edge.node.id"
        class="overflow-hidden rounded-md relative border md:border-0 border-solid border-gray-900 shadow-xl md:shadow-none"
      >
        <g-link
          :to="`${edge.node.path}`"
          class="item-overlay overflow-hidden rounded-md block h-16 md:h-20 text-lg lg:text-xl xl:text-2xl"
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
