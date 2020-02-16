<template>
  <div class="page-content">
    <h2 class="page-title">
      {{ title }}
    </h2>
    <div v-if="amount > 0">
      <div class="items">
        <div v-for="item in items" class="item-cart-grid">
          <img :src="item.product.image">
          <div class="item-cart-grid-title">{{item.product.title}}</div>

          <div class="item-cart-grid-amount">{{item.amount}}</div>
          <div class="item-cart-grid-price">{{item.singlePrice}}</div>
          <div class="item-cart-grid-total">{{item.totalPrice}}</div>
          <div class="item-cart-grid-actions">
            <button @click="addToCart(item.product.id)">+</button>
            <button @click="removeFromCart(item.product.id, 1)">-</button>
          </div>
          <button class="item-cart-grid-removeAll" @click="removeFromCart(item.product.id, item.amount)"></button>
        </div>
      </div>

      <div class="cart-totalprice">Total: {{total}}</div>
    </div>
    <router-link v-else class="go-shopping" :to="{ name: 'Home' }">
      empty cart :(<br>
      Let's go shopping
    </router-link>
  </div>
</template>

<style lang="scss">
  .item-cart-grid {
    display: grid;
    grid-template-areas:
      "image . title  title   title"
      "image . amount price   total"
      "image . actions . removeAll";

    grid-template-columns: minmax(50px, 75px) 1rem 60px 1fr 1fr;
    margin-bottom: 1rem;

    > img {
      grid-area: image;
      display: block;
      width: 100%;
      height: auto;
      border-radius: 3px;
    }
  }

  %label {
    display: block;
    font-size: 0.6rem;
    text-transform: uppercase;
    margin-bottom: 3px;
    font-weight: bold;
  }

  @mixin label($text) {
    &::before {
      @extend %label;
      content: "#{$text}";
    }
  }

  .item-cart-grid-title {
    grid-area: title;
  }

  .item-cart-grid-amount {
    grid-area: amount;
    @include label('Amount');
  }

  .item-cart-grid-price {
    grid-area: price;
    @include label('Price');
  }

  .item-cart-grid-total {
    grid-area: total;
    @include label('Sum');
  }

  .item-cart-grid-actions {
    grid-area: actions;
  }

  .item-cart-grid-removeAll {
    grid-area: removeAll;
  }

  


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

  .cart-totalprice {
    text-align: right;
  }
</style>

<script>    
  import formatPrice from '../utils/formatPrice';

  export default {
    name: 'Cart',
    computed: {
      amount() {
        return this.$store.getters.getCartAmount.toString();
      },
      items() {
        return this.$store.getters.getCart;
      },
      total() {
        return formatPrice(this.$store.getters.getTotalCartAmount);
      }
    },
    methods: {
      addToCart(id) {
        this.$store.commit('addToCart', {
          id,
          amount: 1
        });
      },
      removeFromCart(id, amount) {
        this.$store.commit('removeFromCart', {
          id,
          amount
        });
      }
    },
    data() {
      return {
        title: 'Cart',
      };
    },
  };
</script>