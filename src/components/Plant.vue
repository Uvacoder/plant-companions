<template>
  <article class="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-2xl">
    <div
      class="bg-cover bg-center h-32 md:h-64 rounded-t-md overflow-hidden mb-6 md:mb-10"
      :style="`background-image:url(https://res.cloudinary.com/friendorfoe/image/upload/w_432,h_116,c_fill,f_webp,fl_awebp/${$static.plant.title
        .replace(/\s+/g, '-')
        .toLowerCase()}.jpg)`"
    ></div>
    <div class="pb-8 md:pb-12 lg:pb-16 px-6 md:px-16 lg:px-20">
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
        {{ $static.plant.title }}
      </h1>
      <p v-if="$static.plant.otherNames" class="text-xl text-center text-gray-700">
        Also known as {{ $static.plant.otherNames }}
      </p>
      <div class="mt-6 md:mt-10">
        <h2 class="text-xl font-bold mb-4 text-center">
          Friends of {{ $static.plant.title }}
        </h2>
        <ul
          v-if="$static.plant.friends.length"
          class="flex flex-wrap items-start justify-center"
        >
          <li v-for="friend in $static.plant.friends" :key="friend.id">
            <g-link
              :to="friend.path"
              class="m-2 text-white bg-green-700 rounded-md px-2 lg:px-3 py-1 lg:py-2 block hover:opacity-75 font-bold"
            >
              {{ friend.title }}
            </g-link>
          </li>
        </ul>
        <p v-else class="text-lg text-gray-700 text-center">No friends added yet.</p>
      </div>
      <div class="mt-6 md:mt-10">
        <h2 class="text-xl font-bold mb-4 text-center">
          Foes of {{ $static.plant.title }}
        </h2>
        <ul
          v-if="$static.plant.foes.length"
          class="flex flex-wrap items-start justify-center"
        >
          <li v-for="foe in $static.plant.foes" :key="foe.id">
            <g-link
              :to="foe.path"
              class="m-2 text-white bg-red-700 rounded-md px-2 lg:px-3 py-1 lg:py-2 block hover:opacity-75 font-bold"
            >
              {{ foe.title }}
            </g-link>
          </li>
        </ul>
        <p v-else class="text-lg text-gray-700 text-center">No foes added yet.</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.seoTitle,
    };
  },
  computed: {
    seoTitle() {
      let pageTitle = "";
      let title = this.$page.plant.title;
      let otherNames = this.$page.plant.otherNames;
      if (otherNames) {
        pageTitle = `Companion plants for ${title} (also known as ${otherNames})`;
      } else {
        pageTitle = `Companion plants for ${title}`;
      }
      return pageTitle;
    },
  },
};
</script>

<static-query>
query Plant ($path: String) {
	plant (path: $path) {
        title
        otherNames
        friends {
            title
            path
        }
        foes {
            title
            path
        }
	}
}
</static-query>
