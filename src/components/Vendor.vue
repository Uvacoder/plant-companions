<template>
  <div class="flex items-center justify-start">
    <div class="hidden lg:block mr-5 w-32 mb-0" v-if="data.image">
      <g-image
        :src="data.image"
        :alt="data.name"
        width="50"
        height="50"
        class="overflow-hidden rounded-full block"
      />
    </div>
    <div class="md:max-w-4xl">
      <div class="text-3xl md:text-5xl font-bold leading-none mb-2">
        <span> {{ data.name }} </span>
      </div>
      <p class="text-lg">
        {{ data.bio }}
      </p>
        <ul v-if="data.social"
        class="social flex items-center justify-start space-x-3 mt-3 opacity-75">
          <li v-for="(link, index) in data.social" :key="index">
            <a :href="link.url" :title="`Follow on ${link.network}`">
              <g-image
                :src="`/social/${link.network}.svg`"
                :alt="link.network"
                class="w-4 h-4"
              />
            </a>
          </li>
          <li v-if="data.website">
            <a :href="data.website">
              <g-image src="/social/link.svg" alt="Website" class="w-4 h-4" />
            </a>
          </li>
        </ul>

      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vendor",
  props: {
    data: [Array, Object],
  },
};
</script>
