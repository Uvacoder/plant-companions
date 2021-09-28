<template>
  <div class="cart">
    <h5 class="cart__heading">Your shopping cart</h5>
    <div v-if="cart.line_items.length">
      <CartItem
        v-for="lineItem in cart.line_items"
        :key="lineItem.id"
        class="cart__inner"
        :item="lineItem"
        @update-quantity="handleUpdateQuantity"
        @remove-from-cart="$emit('remove-from-cart', $event)"
      />
      <div class="cart__total">
        <p class="cart__total-title">Subtotal:</p>
        <p class="cart__total-price">{{ cart.subtotal.formatted_with_symbol }}</p>
      </div>
    </div>
    <div class="cart__footer">
      <button
        v-if="cart.line_items.length"
        type="button"
        class="cart__btn-empty"
        @click="emptyCart"
      >
        Empty cart
      </button>
      <button v-if="cart.line_items.length" class="cart__btn-checkout" @click="checkout">
        Checkout
      </button>
      <p v-else class="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  props: ["cart"],
  methods: {
    /**
     * Updates line_items in cart
     * https://commercejs.com/docs/sdk/cart/#update-cart
     *
     * @param {string} lineItemId ID of the cart line item being updated
     * @param {number} quantity New line item quantity to update
     */
    handleUpdateQuantity(lineItemId, quantity) {
      this.$commerce.cart
        .update(lineItemId, { quantity })
        .then((resp) => {
          this.cart = resp.cart;
        })
        .catch((error) => {
          console.log("There was an error updating the cart items", error);
        });
    },
    /**
     * Empty the entire cart
     * https://commercejs.com/docs/sdk/cart#empty-cart
     */
    emptyCart() {
      this.$emit("empty-cart");
    },
    /**
     * Navigate to checkout and close cart
     */
    checkout() {
      this.$emit("checkout");
    },
  },
};
</script>

<style>
.cart {
  @apply bg-white border-2 border-blue-700 fixed;
  z-index: 1;
  width: 350px;
  top: 1rem;
  right: 1.25rem;

  &__heading {
    @apply py-3 px-4 font-bold border-b-2 border-blue-600 text-blue-600;
  }

  &__inner {
    @apply p-5;
  }

  &__total {
    @apply flex px-5 py-4 border-t-2 border-blue-600;
    justify-content: space-between;
  }

  &__total-title {
    @apply text-blue-700 font-bold;
  }

  &__none {
    @apply p-5 text-blue-700 text-center;
  }

  &__footer {
    @apply flex;
    justify-content: space-between;
  }

  &__btn-empty {
    @apply bg-white border border-blue-500 pl-5 mx-5 mb-5 py-2 px-3 text-sm uppercase text-blue-900 font-bold;
    align-self: flex-start;
  }

  &__btn-checkout {
    @apply bg-blue-600 border border-blue-600 pl-5 mx-5 mb-5 py-2 px-3 text-sm uppercase text-white font-bold;

    &:hover {
      background-color: lighten(#292b83, 10);
    }
  }
}
</style>
