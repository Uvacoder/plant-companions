<template>
  <div>
    <ClientOnly>
      <div>
        <div
          class="font-sans block lg:inline-block align-middle text-black hover:text-gray-700 relative"
        >
          <button
            v-on:click.prevent="isCartOpen = !isCartOpen"
            target="_blank"
            class="mr-5 relative flex items-center rounded-md bg-gray-700 text-white py-2 px-3 leading-none"
          >
            <svg class="w-6 h-6 fill-current text-white mr-3" viewbox="0 0 24 24">
              <path
                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
              />
            </svg>
            <span
              >{{ total_items }}
              <span v-if="total_items === 1">Item</span>
              <span v-else>Items</span>
            </span>
          </button>
          <div
            v-show="isCartOpen"
            class="bg-white border-2 border-gray-900 absolute z-30 top-0 right-0 -mt-1 mr-4 rounded-md overflow-hidden"
            style="width: 400px"
          >
            <!-- <pre>{{ cart }}</pre> -->
            <div
              class="flex justify-between items-center py-3 px-4 font-bold bg-gray-900"
            >
              <h5 class="text-white text-lg">Your shopping cart</h5>
              <button
                class="rounded-full bg-red-800 text-white inline-block py-1 px-3 font-bold text-lg"
                v-on:click.prevent="isCartOpen = false"
              >
                &times;
              </button>
            </div>
            <div v-if="total_items != 0">
              <CartItem
                v-for="lineItem in line_items"
                :key="lineItem.id"
                class="p-5"
                :item="lineItem"
                @update-quantity="handleUpdateQuantity"
                @remove-from-cart="handleRemoveFromCart"
              />
              <div class="flex justify-between px-5 py-4 bg-gray-100">
                <p class="cart-title">Subtotal:</p>
                <p class="cart-price">{{ cart.subtotal.formatted_with_symbol }}</p>
              </div>
            </div>
            <div
              v-if="line_items.length > 0"
              class="pt-6 flex justify-between bg-gray-800"
            >
              <button type="button" class="cart-btn-empty" @click="emptyCart">
                Empty cart
              </button>
              <button class="cart-btn-checkout" @click="checkout">Checkout</button>
            </div>
            <p v-else class="cart-none bg-gray-800 text-lg">
              No items in your cart, start adding some!
            </p>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script>
import CartItem from "./CartItem";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      cart: null,
      total_items: 0,
      line_items: [],
      isCartOpen: false,
    };
  },
  mounted() {
    this.fetchCart();
  },
  methods: {
    fetchCart() {
      this.$commerce.cart
        .retrieve()
        .then((cart) => {
          this.cart = cart;
          (this.total_items = cart.total_items), (this.line_items = cart.line_items);
        })
        .catch((error) => {
          console.log("There was an error fetching the cart", error);
        });
    },
    handleUpdateQuantity(lineItemId, quantity) {
      this.$commerce.cart
        .update(lineItemId, { quantity })
        .then((resp) => {
          this.cart = resp.cart;
          this.total_items = resp.cart.total_items;
          this.line_items = resp.cart.line_items;
        })
        .catch((error) => {
          console.log("There was an error updating the cart items", error);
        });
    },
    handleRemoveFromCart(lineItemId) {
      this.$commerce.cart
        .remove(lineItemId)
        .then((resp) => {
          this.cart = resp.cart;
        })
        .catch((error) => {
          console.log("There was an error updating the cart items", error);
        });
    },
    emptyCart() {
      this.$commerce.cart
        .empty()
        .then((resp) => {
          this.cart = resp.cart;
          this.total_items = resp.cart.total_items;
          this.line_items = resp.cart.line_items;
        })
        .catch((error) => {
          console.log("There was an error clearing your cart", error);
        });
    },
    checkout() {
      this.$commerce.cart
        .add(productId, quantity)
        .then((resp) => {
          this.cart = resp.cart;
          this.total_items = resp.cart.total_items;
          this.line_items = resp.cart.line_items;
        })
        .catch((error) => {
          console.log("There was an error fetching the cart", error);
        });
    },
  },
};
</script>

<style>
.cart-title {
  @apply text-gray-700 font-bold text-xl;
}

.cart-none {
  @apply p-5 text-gray-300;
}

.cart-btn-empty {
  @apply bg-white bg-gray-200 rounded-md pl-5 mx-5 mb-5 py-2 px-3 text-sm uppercase text-gray-900 font-bold;
  align-self: flex-start;
}

.cart-btn-checkout {
  @apply bg-green-600 rounded-md pl-5 mx-5 mb-5 py-2 px-3 text-sm uppercase text-white font-bold;

  &:hover {
    background-color: lighten(#292b83, 10);
  }
}
</style>
