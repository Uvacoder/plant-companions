<template>
  <div>
    <ClientOnly>
      <div
        v-if="isCartOpen"
        class="cart-overlay absolute inset-0 h-screen w-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 z-10"
        style=""
      ></div>
      <div class="bottom-0 right-0">
        <div
          class="block lg:inline-block align-middle text-black dark:text-white hover:text-gray-700"
        >
          <button
            v-on:click.prevent="isCartOpen = !isCartOpen"
            target="_blank"
            class="flex items-center"
          >
            <svg
              class="stroke-current dark:stroke-white"
              width="21"
              height="21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.545 7.805A.875.875 0 014.417 7h12.166c.456 0 .836.35.872.805l.768 9.555a1.75 1.75 0 01-1.744 1.89H4.52a1.75 1.75 0 01-1.744-1.89l.768-9.555z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 9.625V5.25a3.5 3.5 0 10-7 0v4.375"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            v-show="isCartOpen"
            class="w-full bg-white border-2 border-gray-900 absolute z-30 top-0 left-0 right-0 h-auto -mt-1 lg:rounded-md overflow-hidden"
          >
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
              class="p-6 flex justify-between bg-gray-800"
            >
              <button
                type="button"
                class="bg-white bg-gray-200 rounded-md py-2 px-3 text-sm uppercase text-gray-900 font-bold"
                @click="emptyCart"
              >
                Empty cart
              </button>
              <button
                class="bg-green-600 rounded-md py-2 px-3 text-sm uppercase text-white font-bold"
                @click="checkout"
              >
                Checkout
              </button>
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

.cart-overlay {
  backdrop-filter: blur(10px);
}
</style>
