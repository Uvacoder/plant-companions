<template>
  <Layout>
    <template slot="main-top">
      <Vendor :data="$page.commercejsProducts.meta.vendor" />
    </template>
    <ProductAlbum
      v-if="$page.commercejsProducts.categories[0].name === 'Music'"
      :id="$page.commercejsProducts.id"
      :name="$page.commercejsProducts.name"
      :description="$page.commercejsProducts.description"
      :categories="$page.commercejsProducts.categories"
      :year="$page.commercejsProducts.meta.year"
      :albumLength="$page.commercejsProducts.meta.albumLength"
      :songs="$page.commercejsProducts.meta.songs"
      :image="$page.commercejsProducts.media.source"
      :permalink="$page.commercejsProducts.permalink"
      :price="$page.commercejsProducts.price.formatted_with_symbol"
      :cartItems="cartItems"
      @refreshContent="getCartContent"
    />
    <ProductPoster
      v-if="$page.commercejsProducts.categories[0].name === 'Posters'"
      :id="$page.commercejsProducts.id"
      :name="$page.commercejsProducts.name"
      :description="$page.commercejsProducts.description"
      :categories="$page.commercejsProducts.categories"
      :image="$page.commercejsProducts.media.source"
      :permalink="$page.commercejsProducts.permalink"
      :price="$page.commercejsProducts.price.formatted_with_symbol"
      :assets="$page.commercejsProducts.assets"
      :cartItems="cartItems"
      @refreshContent="getCartContent"
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  commercejsProducts(id: $id) {
    price {
      formatted_with_symbol
    }
    name
    permalink
    description
    id
    categories {
      name
    }
    media {
      source
    }
    assets {
      url
    }
    meta {
      year
      albumLength
      songs {
        name
        songLength: length
        preview
      }
      vendor {
        name
        bio
        image
        social {
          url
          network
        }
      }
    }
  }
}
</page-query>

<script>
import ProductAlbum from "../components/ProductAlbum";
import ProductPoster from "../components/ProductPoster";
import Vendor from "../components/Vendor";

export default {
  name: "Product",
  components: { ProductAlbum, ProductPoster, Vendor },
  data: () => ({
    quantity: 0,
    checkoutLink: null,
    cartItems: []
  }),
  mounted() {
    this.getCartContent()
  },
  methods: {
    // get the current cart information
    // this includes:
    // - Getting the complete quanity from our cart
    // - Getting the checkout url
    // - Get the cart item id from each product in the cart and their quanity
    getCartContent() {
      this.$commerce.cart.retrieve().then((cart) => {
        this.cart = cart;
        this.quantity = cart.total_items;
        this.checkoutLink = cart.hosted_checkout_url;
        this.cartItems = cart.line_items.map(item => {
          return {
            product: item.product_id,
            cart_item_id: item.id,
            quantity: item.quantity
          }
        })

      });
    }
  }
};
</script>
