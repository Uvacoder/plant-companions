<template>
  <Layout :showTop="true">
    <template slot="main-top">
      <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
        Ways to contribute
      </h1>
      <p class="text-xl mt-4 xl:w-2/3">
        The web version of the Savvy Garden app is and always will be free, without any
        ads, tracking or restrictions on the core functionality. I might offer a
        subscription service at some point, which would give access to suite of
        value-added-tools, like garden planning and reminders.
      </p>
    </template>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
      <card
        title="Print a poster"
        content="Download one of our poster templates to put up at your local nursery, school or
          community center."
        image="/c-print.svg"
      >
        <a href="#" class="text-blue-700 underline">Detailed</a> &middot;
        <a href="#" class="text-blue-700 underline">Lowfi</a>
      </card>
      <card
        title="Tell a friend"
        content="The easiest way to help out is to spread the word, either via chat, social media
          or in person."
        image="/c-share.svg"
      >
        <g-link to="/sponsor" class="text-blue-700 underline">More info</g-link>
      </card>
      <card
        title="Support the shop"
        content="Another way to help is to buy some groovy music or eductional posters from the
          Savvy Shop."
        image="/c-shop.svg"
      >
        <g-link to="/shop" class="text-blue-700 underline">Browse the shop</g-link>
        &middot;
        <g-link to="/shop" class="text-blue-700 underline">Become a vendor</g-link>
      </card>
      <card
        title="Buy me a coffee"
        content="For anyone wanting to make a small financial contribution, head over to my
          buy-me-a-coffee page."
        image="/c-coffee.svg"
      >
        <a
          href="https://www.buymeacoffee.com/smokeyfro"
          target="_blank"
          class="text-blue-700 underline"
          >More info</a
        >
      </card>
      <card
        title="Add to the database"
        content="In the event you don't find the plant you're looking for, go ahead and add it
          yourself."
        image="/c-submit.svg"
      >
        <g-link to="/sponsor" class="text-blue-700 underline">Start adding</g-link>
      </card>
      <card
        title="Become a sponsor"
        content="For companies who's principles align with the my own, I'll be offering
          incentives to sponsor the apps development."
        image="/c-sponsor.svg"
      >
        <g-link to="/sponsor" class="text-blue-700 underline">More info</g-link>
      </card>
      <card
        title="Purchase the app"
        content="I'll be releasing native apps for iOS, Android, Windows, Linux and Mac in the
          near future."
        image=""
      />
      <card
        title="Hire me"
        content="I'm available for freelance consulting on interesting projects. See my portfolio
          for more information."
        image="/c-hire.svg"
      >
        <a href="https://smokeyfro.com" target="_blank" class="text-blue-700 underline"
          >Check my portfolio</a
        >
      </card>
      <card
        title="Write a post"
        content="For the bloggers out there, write a post about the app, so that your audience
          can share in the love."
        image="/c-post.svg"
      >
        <a href="#" target="_blank" class="text-blue-700 underline">Sample content</a>
      </card>
    </div>
  </Layout>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
  metaInfo: {
    title: "Contribute to the companion planting database",
  },
  components: {
    Card,
  },
};
</script>
