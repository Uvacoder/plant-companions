<template>
  <div>
    <div
      v-if="data.length"
      class="w-full table md:bg-white dark:bg-gray-900 rounded-md overflow-hidden md:shadow-xl"
    >
      <div
        class="w-full hidden md:flex bg-gray-800 text-white text-sm overflow-hidden px-2 uppercase font-bold sticky top-0 z-20"
      >
        <div class="w-2/12 p-4">Name</div>
        <div class="w-2/12 p-4">Type</div>
        <div class="w-4/12 p-4">Friends</div>
        <div class="w-4/12 p-4">Foes</div>
      </div>
      <div
        v-for="edge in data"
        :key="edge.node.id"
        class="bg-white dark:bg-gray-700 text-white shadow-xl rounded-md md:rounded-none overflow-hidden md:bg-none md:shadow-none w-full flex flex-col mb-4 md:mb-0 md:flex-row relative z-10 odd:bg-gray-100 dark:odd:bg-gray-800"
      >
        <div class="md:w-2/12 px-4 pt-4 pb-0 md:p-4 flex justify-between items-center">
          <g-link
            class="text-blue-700 dark:text-blue-200 underline"
            :to="`${edge.node.path}`"
            >{{ edge.node.title }}</g-link
          >
        </div>
        <div class="md:w-2/12 px-4 pb-3 md:p-4 text-gray-700 dark:text-gray-100">
          {{ edge.node.type }}
        </div>
        <div
          v-if="edge.node.friends.length"
          class="relative links w-full md:w-4/12 md:p-4 friends"
        >
          <g-link v-for="friend in edge.node.friends" :key="friend.id" :to="friend.path"
            ><span class="text-green-700 dark:text-green-100 underline">{{
              friend.title
            }}</span></g-link
          >
        </div>
        <div v-else class="relative links w-full md:w-4/12 md:p-4 friends">
          <div class="no-links text-gray-600 text-sm">
            No friends for {{ edge.node.title }}.
            <button class="px-1 text-blue-500 underline rounded-md">Add some</button>
          </div>
        </div>
        <div v-if="edge.node.foes.length" class="links w-full md:w-4/12 md:p-4 foes">
          <g-link v-for="foe in edge.node.foes" :key="foe.id" :to="foe.path"
            ><span class="text-red-700 dark:text-red-100 underline">{{
              foe.title
            }}</span></g-link
          >
        </div>
        <div v-else class="relative links w-full md:w-4/12 md:p-4 foes">
          <div class="no-links text-gray-600 text-sm">
            No foes for {{ edge.node.title }}.
            <button class="px-1 text-blue-500 underline rounded-md">Add some</button>
          </div>
        </div>
      </div>
    </div>
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
