<template>
  <div class="product-card">
    <img :src="product.image">
    <router-link class="product-title" :to="{ name: `/product/${product.id}` }">
      {{product.title}}
    </router-link>
    <p class="product-description">{{product.description}}</p>
    <span class="product-price">{{price}}</span>
    <button class="product-order-btn">Order now</button>
  </div>
</template>

<style lang="scss">
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
    }

    > .product-order-btn {
      grid-area: button;
    }
  }
</style>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      id: String
    },
    computed: {
      product() {
        return this.$store.getters.getProductById(this.id)
      },
      price() {
        return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(this.$store.getters.getProductById(this.id).price);
      }
    }
  };
</script>