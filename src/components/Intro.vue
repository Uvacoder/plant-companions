<template>
  <div>
    <div
      v-show="isOpen != false"
      id="intro"
      class="bg-cover bg-bottom relative z-50 intro"
      style="background-image: url(/companions.jpg)"
    >
      <div
        class="flex items-end justify-start update px-10 pt-10 bg-green-900 text-white bg-opacity-50 border-b-8 border-yellow-500"
        style="backdrop-filter: blur(10px)"
      >
        <g-image src="/gardener.png" class="w-42"></g-image>
        <div class="mb-10">
          <h2 class="text-2xl font-bold mb-3">Introducing a more refined SavvyGarden</h2>
          <p class="text-xl">
            Our new update has received some design love, expands with a new section for
            <g-link to="/guilds">Plant Guilds</g-link>, adds another 100 Companion Plants
            and our new <g-link to="/shop">Shop</g-link>, where you can support my efforts
            by purchasing some groovy music to garden to, or one of our Permaculture
            related posters.
          </p>
        </div>
        <button
          class="outline-none absolute top-0 right-0 mt-2 mr-6 text-3xl block hover:opacity-75"
          @click.prevent="hideIntro"
          title="Got it!"
        >
          &times;
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      isOpen: true,
      intro: true,
    };
  },
  mounted() {
    if (localStorage.getItem("intro")) {
      this.isOpen = JSON.parse(localStorage.getItem("intro"));
    }
  },
  methods: {
    hideIntro() {
      this.isOpen = false;
    },
  },
};
</script>
<style>
.intro .update {
  & p {
    @apply max-w-5xl;
  }
  & a {
    @apply underline;
  }
}
</style>
