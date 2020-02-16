<template>
  <div class="page-content">
    <h2 class="page-title">
      {{ title }}
    </h2>
    <ul class="product-listing" v-if="amount > 0">
      <li
        v-for="product in items"
        :key="product.product.id">
        <product :id="product.product.id" />
      </li>
    </ul>
    <router-link v-else class="go-shopping" :to="{ name: 'Home' }">
      empty cart :(<br>
      Let's go shopping
    </router-link>
  </div>
</template>

<style lang="scss">
  .page-title {
    margin-bottom: 20px;
  }
  
  .go-shopping {
    padding: 1rem;
    border-radius: 3px;
    background-color: var(--color-background);
    color: var(--color-text);
    width: 100%;
    display: block;
    text-decoration: none;
    text-align: center;
  }
</style>

<script>
  import ProductCard from '../components/Product.vue';
    
  export default {
    name: 'Cart',
    components: {
      product: ProductCard
    },
    computed: {
      amount() {
        return this.$store.getters.getCartAmount.toString()
      },
      items() {
        return this.$store.getters.getCart
      }
    },
    data() {
      return {
        title: 'Cart',
      };
    },
  };
</script>