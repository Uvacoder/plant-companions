<template>
  <div>
    <div
      class="w-full flex flex-col md:flex-row md:items-start md:justify-between md:space-x-10"
    >
      <g-image
        :src="image"
        :width="image.width"
        :height="image.height"
        class="p-3 rounded-md shadow-xl bg-white"
      />
      <div class="relative">
        <div class="xl:flex xl:justify-between xl:items-end mb-8">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 leading-snug" v-html="name" />
            <div class="text-gray-700 leading-snug mt-3 xl:mt-0 mb-6 xl:mb-0">
              Delivered via PDF for printing at home or via your local print shop.
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
        <div v-if="assets">
          <h3 class="font-bold text-2xl mb-3">Ideas for your local print shop</h3>
          <ul class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <li
              v-for="(image, index) in assets"
              :key="index"
              class="h-24 md:h-26 lg:h-52 xl:h-64 overflow-hidden rounded-md shadow-lg"
            >
              <g-image :src="image.url" alt="image.alt" fit="cover" />
            </li>
          </ul>
        </div>
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
    price: [Object, Array, String],
    assets: [Object, Array, String],
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
