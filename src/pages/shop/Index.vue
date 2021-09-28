<template>
  <Layout
    :quantity="quantity"
    :checkout-link="checkoutLink"
    :showCart="true"
    :showTop="true"
  >
    <template slot="main-top">
      <page-title title="Savvy Shop" content=""/>
    </template>

    <ClientOnly>
    <div
      v-for="cat in $static.allCommercejsCategories.edges"
      :key="cat.node.id"
      class="mb-10"
    >
      <div class="flex items-end justify-between mb-6 w-full">
        <div class="md:flex items-center justify-start md:space-x-6">
          <h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-none">
            {{ cat.node.name }}
          </h2>
          <p
            class="text-lg lg:text-xl text-gray-700 dark:text-gray-400 leading-none mt-1"
          >
            {{ cat.node.description }}
          </p>
        </div>
        <span
          class="justify-self-end text-gray-600 dark:text-gray-400 pr-20 pb-1 hidden md:block"
          >{{ cat.node.products.length }}
          <span v-if="cat.node.name === 'Music'">Albums</span
          ><span v-else>{{ cat.node.name }}</span></span
        >
      </div>
      <carousel
        v-if="cat.node.products"
        :navigationEnabled="true"
        :scrollPerPage="true"
        :paginationEnabled="false"
        navigationNextLabel="&raquo;"
        navigationPrevLabel="&laquo;"
        :perPageCustom="[
          [768, 3],
          [1024, 4],
          [1280, 5],
        ]"
      >
        <slide v-for="product in cat.node.products" :key="product.id" class="">
          <Product
            :name="product.name"
            :description="product.meta.vendor.name"
            :image="product.media.source"
            :categories="product.categories"
            :id="product.id"
            :permalink="product.permalink"
            :price="product.price.formatted"
            :onAddToCart="addToCart"
            class="mr-1"
          />
        </slide>
      </carousel>
    </div>
    </ClientOnly>
  </Layout>

</template>

<static-query>
query {
  allCommercejsCategories {
    edges {
      node {
        name
        description
        products {
          permalink
          categories {
            name
            slug
          }
          price {
            formatted
          }
          name
          description
          id
          media {
            source
          }
          meta {
            vendor {
              name
            }
          }
        }
      }
    }
  }
  allVendor {
    edges {
      node {
        name
        bio
        id
      }
    }
  }
}
</static-query>

<script>
import Product from "../../components/Product";
import PageTitle from "../../components/PageTitle";

export default {
  metaInfo: {
    title: "Shop",
  },
  components: {
    Product,
    PageTitle,
  },
  data: () => ({
    quantity: 0,
    checkoutLink: null,
  }),
  mounted() {
    this.$commerce.cart.retrieve().then((cart) => {
      //console.log(cart);
      this.quantity = cart.total_items;
      this.checkoutLink = cart.hosted_checkout_url;
    });
  },
  methods: {
    addToCart(id) {
      this.$commerce.cart
        .add(id, 1)
        .then((response) => {
          //console.log(response);
          this.quantity = response.cart.total_items;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
.VueCarousel-dot {
  @apply bg-gray-500 !important;
}
.VueCarousel-dot--active {
  @apply bg-gray-900 !important;
}
.VueCarousel-navigation {
  position: absolute;
  top: -38px;
  right: 35px;
}
.VueCarousel-navigation button {
  font-size: 30px;
  padding: 0 !important;
  outline: 0;
  background: #fff;
}

.VueCarousel-navigation button.VueCarousel-navigation-button {
  background: #222;
  padding: 3px 9px 9px !important;
  height: 34px;
  line-height: 24px;
  color: #fff;
  border-radius: 6px 0 0 6px;
}
.VueCarousel-navigation button.VueCarousel-navigation-next {
  border-radius: 0 6px 6px 0;
}
</style>
