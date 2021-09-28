<template>
  <Layout>
    <template slot="middle">
      <g-link to="/" class="hidden md:flex items-center relative lg:-ml-24">
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
          >Back to Guild Index</strong
        >
      </g-link>
    </template>
    <article class="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-2xl">
      <div
        class="bg-cover bg-center h-32 md:h-64 rounded-t-md overflow-hidden mb-6 md:mb-10"
        :style="`background-image:url(https://res.cloudinary.com/savvygarden/image/upload/w_432,h_116,c_fill/guilds/${$page.guild.title
          .replace(/\s+/g, '-')
          .toLowerCase()}.jpg)`"
      ></div>
      <div class="pb-8 md:pb-12 lg:pb-16 px-6 md:px-16 lg:px-20">
        <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          {{ $page.guild.title }}
        </h1>
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
      let title = this.$page.guild.title;
      return title;
    },
  },
};
</script>

<page-query>
query Guild ($path: String) {
	guild (path: $path) {
        title
	}
}
</page-query>

<style scoped>
.nav-desktop li:nth-of-type(2) > a {
  background: #e8e8e8;
}
</style>
