<template>
  <Layout :showCart="false" :showTop="true">
    <!-- <template slot="below">
        <form class="mb-2 block lg:hidden border-b-2 border-gray-400 focus-within:border-teal-500 sticky top-0 overflow-hidden rounded-md shadow-xl h-16 leading-none">
            <input v-model="plantSearch" aria-label="Search" :v-bind="plantSearch" class="appearance-none focus:outline-none block w-full p-5 text-xl bg-gray-100" type="search" :placeholder="`Search ${$page.plants.edges.length} plants`" autofocus />
        </form>
    </template> -->
    <template slot="main-top">
      <form
        class="bg-white hidden lg:block flex-grow border-b-4 border-gray-400 focus-within:bg-white focus-within:border-teal-500 rounded-md overflow-hidden shadow-xl h-16 leading-none"
      >
        <input
          name="search"
          aria-label="Search"
          v-model="guildSearch"
          :v-bind="guildSearch"
          class="bg-white appearance-none rounded-md focus:outline-none block w-full px-5 pb-0 h-full text-xl"
          type="search"
          :placeholder="`Search our growing database of ${$page.guilds.edges.length} plant guilds`"
          autofocus
        />
      </form>
    </template>

    <ul
      v-if="filteredGuilds.length"
      class="plants list-none space-y-4 mt-4 md:mt-0 sm:space-y-0 grid-cols-1 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
    >
      <li
        v-for="edge in filteredGuilds"
        :key="edge.node.id"
        class="overflow-hidden rounded-md relative bg-no-repeat bg-cover"
        :style="`background-image: url(https://res.cloudinary.com/savvygarden/image/upload/w_432,h_116,c_fill/guilds/${edge.node.title
          .replace(/\s+/g, '-')
          .toLowerCase()}.jpg);`"
      >
        <g-link
          :to="`${edge.node.path}`"
          class="item-overlay block h-40 text-lg lg:text-xl xl:text-2xl"
        >
          <span>{{ edge.node.title }}</span>
        </g-link>
      </li>
    </ul>
    <p v-else class="text-center text-xl mt-10">
      Can't find the guild you're looking for? Help me grow the database by
      <g-link to="/contribute" class="underline">submitting the guild here</g-link>.
    </p>
  </Layout>
</template>

<page-query>
  query Guilds {
    guilds: allGuild(sortBy: "path", order: ASC) {
      edges {
        node{
          id
          path
          title
        }
      }
    }
  }
</page-query>

<script>
import lowerCase from "@/filters/LowerCase";

export default {
  metaInfo: {
    title: "Plant Guilds",
  },
  data() {
    return {
      guildSearch: "",
    };
  },
  filters: {
    lowerCase,
  },
  computed: {
    guildList() {
      return this.$page.guilds.edges;
    },
    filteredGuilds() {
      const guildSearch = this.guildSearch;
      return this.guildList.filter((edge) => {
        return edge.node.title.toLowerCase().match(this.guildSearch.toLowerCase());
      });
    },
  },
};
</script>

<style>
.plants a:hover {
  backdrop-filter: blur(10px);
}
.item-overlay {
  @apply rounded-md overflow-hidden bg-gray-900 bg-opacity-75 transition duration-500 ease-in-out flex items-center justify-center text-white text-center whitespace-pre font-bold relative z-30;
  &:hover {
    @apply bg-green-900 bg-opacity-75 text-gray-100;
  }
}
</style>
