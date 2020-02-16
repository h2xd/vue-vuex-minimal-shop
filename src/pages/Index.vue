<template>
  <div class="page-content">
    <ul class="product-listing">
      <li
        v-for="product in products"
        :key="product.id">
        <product :id="product.id" />
      </li>
    </ul>
  </div>

</template>

<style lang="scss">
  .product-listing {
    list-style-type: none;

    > li {
      margin-bottom: 1rem;

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }

</style>

<script>
  import { mapState } from 'vuex';
  import ProductCard from '../components/Product.vue';

  export default {
    components: {
      product: ProductCard
    },
    computed: mapState({
      products: state => state.products
    }),
  };
</script>