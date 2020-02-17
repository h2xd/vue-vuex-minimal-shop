<template>
  <div class="page-content">
    <h2 class="page-title">
      {{ product.title }}
    </h2>

    <img :src="product.image">

    <p class="product-description">{{product.description}}</p>

    <button class="product-order-btn" @click="addToCart">Add to cart</button>
    <div>
      {{price}}
    </div>
  </div>
</template>

<script>
  import formatPrice from '../utils/formatPrice.js';

  export default {
    name: 'Product',
    computed: {
      product() {
        return this.$store.getters.getProductById(this.$route.params.id)
      },
      price() {
        return formatPrice(this.$store.getters.getProductById(this.$route.params.id).price);
      }
    },
    methods: {
      addToCart() {
        this.$store.commit('addToCart', {
          id: this.id,
          amount: 1
        });
      }
    }
  };
</script>