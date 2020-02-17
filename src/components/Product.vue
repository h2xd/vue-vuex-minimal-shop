<template>
  <div class="product-card">
    <img :src="product.image">
    <RouterLink class="product-title" :to="`/product/${product.id}`">
      {{product.title}}
    </RouterLink>
    <p class="product-description">{{product.description}}</p>
    <span class="product-price">{{price}}</span>
    <button class="product-order-btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<style lang="scss">
  @import "../scss/components/_button.scss";

  .product-card {
    display: grid;
    grid-template-areas:
      "image . title title"
      "image . description description"
      "image . price button";

    grid-template-columns: 20% 1rem 1fr 1fr;
    grid-row-gap: 10px;

    > img {
      grid-area: image;
      display: block;
      border-radius: 5px;
      width: 100%;
    }

    > .product-title {
      grid-area: title;
      font-weight: bold;
      color: var(--color-main);
      text-decoration: none;
    }

    > .product-description {
      grid-area: description;
      color: var(--color-text);
      font-size: var(--middle-fontsize);
    }

    > .product-price {
      grid-area: price;
      font-weight: bold;
      font-style: italic;
    }

    > .product-order-btn {
      @include button;
    }
  }
</style>

<script>
  import { mapState } from 'vuex';
  import formatPrice from '../utils/formatPrice';

  export default {
    props: {
      id: String
    },
    computed: {
      product() {
        return this.$store.getters.getProductById(this.id)
      },
      price() {
        return formatPrice(this.$store.getters.getProductById(this.id).price);
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