<template>
  <div class="page-content">
    <h2 class="page-title">
      {{ product.title }}
    </h2>

    <img :src="product.image">

    <p class="description">{{product.description}}</p>

    <div class="grid">
      <button class="order-button" @click="addToCart">Add to cart</button>
      <div class="price">
        {{price}}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../scss/components/button";

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .description {
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  .grid {
    display: grid;
    grid-template-colums: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  .order-button {
    @include button;
    grid-column: 2;
    grid-row: 1;
  }

  .price {
    display: block;
    font-weight: bold;
    font-size: 2rem;
    grid-column: 1;
    grid-row: 1;
    color: var(--color-accent);
    text-shadow: 0 3px 6px var(--color-background-accent);
  }
</style>

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
          id: this.$route.params.id,
          amount: 1
        });
      }
    }
  };
</script>