<template>
  <div class="page-content">
    <ul class="product-listing">
      <li
        v-for="product in products"
        :key="product.id">

        <img :src="product.image">
        <div>{{product.title}}</div>
        <p>{{product.description}}</p>
        <span>{{product.price}}</span>
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
  import { mapState } from 'vuex'

  export default {
    name: 'Index',

    computed: mapState({
      products: state => state.products
    }),
  };
</script>