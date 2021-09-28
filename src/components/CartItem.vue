<template>
  <div class="cart-item">
    <g-image class="cart-image" :src="item.media.source" />
    <div class="w-full flex justify-between items-start">
      <div class="cart-details">
        <h4 class="text-lg font-bold mb-1">{{ item.name }}</h4>
        <p class="cart-price text-green">
          {{ item.line_total.formatted_with_symbol }}
        </p>
      </div>
      <button type="button" class="cart-remove" @click="removeFromCart">Remove</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: ["item", "cart"],
  methods: {
    removeFromCart() {
      this.$emit("remove-from-cart", this.item.id);
    },
  },
};
</script>

<style>
.cart-item {
  @apply flex;
}
.cart-image {
  @apply w-16 h-16 border-2 border-yellow-600 object-cover mr-3;
}
.cart-name {
  @apply text-sm text-blue-900 font-bold;
}
.cart-qty {
  @apply flex;
  margin: 0 auto;
}
.cart-remove {
  @apply bg-white bg-gray-200 rounded-md py-1 px-2 text-sm uppercase text-blue-700 font-bold ml-3;
}
</style>
