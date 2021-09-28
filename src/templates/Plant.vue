<template>
  <Layout>
    <template slot="main-top">
      <g-link to="/" class="hidden md:flex items-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <strong
          class="text-xl leading-none mt-1 border-b-4 pt-2 pb-1 border-transparent hover:border-gray-400"
          >Back to Plant Index</strong
        >
      </g-link>
    </template>
    <article class="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-2xl">
      <div
        class="relative flex items-end justify-start p-10 bg-cover bg-center h-32 md:h-64 rounded-t-md overflow-hidden"
        :style="`background-image:url(https://res.cloudinary.com/friendorfoe/image/upload/w_432,h_116,c_fill,f_webp,fl_awebp/${$page.plant.slug}.jpg)`"
      >
        <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div class="relative z-20">
          <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-none">
            {{ $page.plant.title }}
          </h1>
          <p v-if="$page.plant.otherNames" class="text-xl text-gray-300">
            Also known as {{ $page.plant.otherNames }}
          </p>
        </div>
      </div>
      <div class="">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="bg-green-100 p-10">
            <h2 class="text-2xl font-bold mb-4 text-gray-900">Friends</h2>
            <ul
              v-if="$page.plant.friends.length"
              class="flex flex-wrap items-start justify-start"
            >
              <li
                v-for="friend in $page.plant.friends"
                :key="friend.id"
                class="mr-3 mb-3"
              >
                <g-link
                  :to="friend.path"
                  class="text-white bg-green-700 rounded-md px-2 lg:px-3 py-1 lg:py-2 block hover:opacity-75 font-bold"
                >
                  {{ friend.title }}
                </g-link>
              </li>
            </ul>
            <p v-else class="text-lg text-gray-700 text-center">No friends added yet.</p>
          </div>
          <div class="bg-red-100 p-10">
            <h2 class="text-2xl font-bold mb-4 text-gray-900">Foes</h2>
            <ul
              v-if="$page.plant.foes.length"
              class="flex flex-wrap items-start justify-start"
            >
              <li v-for="foe in $page.plant.foes" :key="foe.id" class="mr-3 mb-3">
                <g-link
                  :to="foe.path"
                  class="text-white bg-red-700 rounded-md px-2 lg:px-3 py-1 lg:py-2 block hover:opacity-75 font-bold"
                >
                  {{ foe.title }}
                </g-link>
              </li>
            </ul>
            <p v-else class="text-lg text-gray-700 text-left">No foes added yet.</p>
          </div>
        </div>
      </div>
      <div v-if="$page.plant.notes" class="p-10 text-lg">
        <h2 class="font-bold text-2xl">Notes</h2>
        {{ $page.plant.notes }}
      </div>
    </article>
  </Layout>
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

<page-query>
query Plant ($path: String) {
	plant (path: $path) {
        title
        slug
        otherNames
        friends {
            title
            path
        }
        foes {
            title
            path
        }
        notes
	}
}
</page-query>

<style scoped>
.nav-desktop li:first-of-type > a {
  background: #e8e8e8;
}
</style>
