<template>
  <div>
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-4xl font-bold text-gray-900" v-html="name" />
        <div class="text-gray-700 leading-none">
          {{ year }} &middot; {{ songs.length }} Songs &middot;
          {{ albumLength }}
        </div>
      </div>
      <button
        class="md:mb-4 text-xl bg-green-500 hover:bg-green-700 text-white font-semibold py-0 pr-4 rounded-md overflow-hidden"
        @click="onAddToBasket(id)"
        v-if="cart_item.quantity==0 && cart_loaded"
      >
        <strong
          v-html="price"
          class="bg-gray-900 text-white py-3 px-4 inline-block mr-3"
        />
        Add to Cart
      </button>
      <button
        @click="onRemoveFromBasket(cart_item.cart_item_id)"
        class="md:mb-4 text-xl bg-green-500 text-white font-semibold py-3 px-4 rounded-md overflow-hidden"
        v-if="cart_item.quantity>0 && cart_loaded"
      >
        Remove from basket
      </button>
    </div>
    <div
      class="w-full flex flex-col md:flex-row md:items-start md:justify-start md:space-x-10"
    >
      <div class="w-full md:w-2/3 relative order-2 md:order-1" v-if="songs">
        <ul class="bg-white p-10 md:rounded-md overflow-hidden shadow-lg">
          <li v-for="(song, i) in songs" :key="i">
            <audio-player
              :url="song.preview"
              playerid="audio-player"
              :songname="song.name"
              :songLength="song.songLength"
            >
            </audio-player>
          </li>
        </ul>
      </div>
      <div class="h-64 md:h-full w-full md:w-1/3 order-1 md:order-2">
        <img :src="image" fit="cover" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductAlbum",
  props: {
    id: [Object, Array, String],
    permalink: [Object, Array, String],
    name: [Object, Array, String],
    description: [Object, Array, String],
    categories: [Array, Object],
    image: [Object, Array, String],
    year: [String, Number],
    albumLength: String,
    songs: [Object, Array],
    price: [Object, Array, String],
    cartItems: Array
  },
  data() {
    return {
      cart_loaded: false
    }
  },
  computed: {
    cart_item() {
      // convert the Observer Response to an usable JSON 
      const items =JSON.parse(JSON.stringify(this.cartItems))
      
      // since we want only the cart item information for the 
      // current product, we use the filter method to get it
      const item = items.filter(item => { return item.product == this.id })
      
      this.cart_loaded = true
      // in case we have no cart item for this product
      // return a dummy object with the same props
      return (item.length > 0) ? item[0] : {product: this.id, cart_item_id: null, quantity:0}
    }
  },
  methods: {
    // add the current product to our cart
    // `id` is the product id
    onAddToBasket(id) {
      this.$commerce.cart
        .add(id, 1)
        .then((response) => {
          this.refreshContent();
        })
        .catch((e) => console.log(e));
    },

    // remove the current product from the cart
    // `id` is the cart item id
    onRemoveFromBasket(id) {
      
      this.$commerce.cart
        .remove(id)
        .then((response) => {
          this.refreshContent();
        })
        .catch((e) => console.log(e));
    },

    // trigger a refresh from our cart
    refreshContent() {
      this.$emit("refreshContent")
    }
  },
};
</script>
